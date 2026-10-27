---
layout: single
title: "Publications"
permalink: /publications/
author_profile: false
classes: wide no-sidebar publications-page
---

<link rel="stylesheet" href="{{ '/assets/css/publications.css' | relative_url }}">

{% assign papers = site.data.publications | reverse %}
{% assign rules = site.data.publication_rules %}
{% assign highlighted_authors = 'fabiani,filippo|fabiani,f|filippofabiani|ffabiani' | split: '|' %}
{% comment %}Detect the Authors header even when a fresh export includes a UTF-8 BOM.{% endcomment %}
{% assign bom = '%EF%BB%BF' | url_decode %}
{% assign authors_header = 'Authors' %}
{% assign first_paper = papers | first %}
{% for column in first_paper %}
  {% assign header = column[0] | remove: bom | strip | downcase %}
  {% if header == 'authors' %}{% assign authors_header = column[0] %}{% break %}{% endif %}
{% endfor %}
{% capture year_values %}{% for paper in papers %}{% assign metadata = rules.overrides[paper.Title] %}{% assign year = metadata.year | default: paper.Year | default: '0000' | append: '' | strip %}{{ year }}|{% endfor %}{% endcapture %}
{% assign years = year_values | split: '|' | uniq | sort | reverse %}

<nav class="publication-nav" aria-label="Publication categories">
  <a href="#preprint">Preprints</a>
  <a href="#journal">Journal papers</a>
  <a href="#conference">Conference papers</a>
</nav>

{% for group in rules.groups %}
{% comment %}Collect this category's row indexes before rendering so labels can count down.{% endcomment %}
{% capture group_indexes %}
{%- for paper in papers -%}
  {%- assign metadata = rules.overrides[paper.Title] -%}
  {%- assign venue = metadata.venue | default: paper.Publication | default: '' | strip -%}
  {%- assign venue_lower = venue | downcase -%}
  {%- assign category = 'other' -%}
  {%- if metadata.category -%}
    {%- assign category = metadata.category -%}
  {%- elsif venue_lower contains 'arxiv' or venue_lower contains 'preprint' -%}
    {%- assign category = 'preprint' -%}
  {%- elsif rules.journal_venues contains venue_lower -%}
    {%- assign category = 'journal' -%}
  {%- else -%}
    {%- for marker in rules.conference_markers -%}
      {%- if venue_lower contains marker -%}{%- assign category = 'conference' -%}{%- break -%}{%- endif -%}
    {%- endfor -%}
  {%- endif -%}
  {%- if category == group.id -%}{{- forloop.index0 -}}|{%- endif -%}
{%- endfor -%}
{% endcapture %}
{% assign group_indexes = group_indexes | strip | split: '|' %}
{% assign group_count = group_indexes | size %}
{% assign label_number = group_count %}
{% case group.id %}
  {% when 'journal' %}{% assign label_prefix = 'J' %}
  {% when 'conference' %}{% assign label_prefix = 'C' %}
  {% when 'preprint' %}{% assign label_prefix = 'P' %}
  {% else %}{% assign label_prefix = 'O' %}
{% endcase %}
{% if group_count > 0 %}
<section class="publication-section" aria-labelledby="{{ group.id }}">
<h2 id="{{ group.id }}">{{ group.title }} <span class="publication-count">({{ group_count }})</span></h2>
<ol class="publication-list" reversed start="{{ group_count }}" role="list">
{% for year in years %}
{% for row_index in group_indexes %}
{% assign row_index = row_index | plus: 0 %}
{% assign paper = papers[row_index] %}
{% assign metadata = rules.overrides[paper.Title] %}
{% assign paper_year = metadata.year | default: paper.Year | default: '0000' | append: '' | strip %}
{% if paper_year == year %}
{% assign venue = metadata.venue | default: paper.Publication | default: '' | strip %}
{% assign paper_url = metadata.url | default: '' %}
{% assign arxiv_url = '' %}
{% if paper.Publication contains 'arXiv:' %}
  {% assign arxiv_id = paper.Publication | split: 'arXiv:' | last | strip %}
  {% assign arxiv_url = 'https://arxiv.org/abs/' | append: arxiv_id %}
{% endif %}
{% assign issue = paper.Number | default: '' | strip %}
{% assign doi_url = '' %}
{% assign issue_prefix = issue | slice: 0, 3 %}
{% if issue_prefix == '10.' and issue contains '/' %}
  {% assign doi_url = 'https://doi.org/' | append: issue %}
  {% assign issue = '' %}
{% endif %}
{% assign paper_url = paper_url | default: doi_url | default: arxiv_url %}
<li class="publication-item">
  <span class="publication-label">[{{ label_prefix }}{{ label_number }}]</span>
  <div class="publication-details">
  <div class="publication-title">{% if paper_url != '' %}<a href="{{ paper_url | escape }}">{{ paper.Title | escape }}</a>{% else %}{{ paper.Title | escape }}{% endif %}</div>
  <div class="publication-authors">
    {% assign authors = paper[authors_header] | strip | split: ';' %}
    {% if authors.size == 1 %}
      {% assign author_line = authors | first | strip %}
      {% assign author_line_lower = author_line | downcase %}
      {% if author_line_lower contains 'f fabiani' or author_line_lower contains 'f. fabiani' or author_line_lower contains 'filippo fabiani' %}
        {% assign authors = author_line | split: ',' %}
      {% endif %}
    {% endif %}
    {% for author in authors %}
      {% assign author_name = author | strip %}
      {% assign author_key = author_name | downcase | remove: '.' | remove: ' ' %}
      {% if highlighted_authors contains author_key %}<strong>{{ author_name | escape }}</strong>{% else %}{{ author_name | escape }}{% endif %}{% unless forloop.last %}; {% endunless %}
    {% endfor %}
  </div>
  <div class="publication-venue">{% if venue != '' %}<em>{{ venue | escape }}</em>{% endif %}{% if paper.Volume != nil and paper.Volume != '' %}, vol. {{ paper.Volume | escape }}{% endif %}{% if issue != '' %}, no. {{ issue | escape }}{% endif %}{% if paper.Pages != nil and paper.Pages != '' %}, {% if paper.Pages contains '-' %}pp. {% else %}Article {% endif %}{{ paper.Pages | escape }}{% endif %}{% if paper_year != '0000' %}{% if venue != '' %}, {% endif %}{{ paper_year }}{% endif %}.</div>
  {% if metadata.note %}<div class="publication-note">{{ metadata.note | escape }}</div>{% endif %}
  {% if arxiv_url != '' and arxiv_url != paper_url %}<div class="publication-links"><a href="{{ arxiv_url | escape }}">arXiv version</a></div>{% endif %}
  </div>
</li>
{% assign label_number = label_number | minus: 1 %}
{% endif %}
{% endfor %}
{% endfor %}
</ol>
</section>
{% elsif group.id != 'other' %}
<section class="publication-section" aria-labelledby="{{ group.id }}">
<h2 id="{{ group.id }}">{{ group.title }}</h2>
<p>No entries currently listed.</p>
</section>
{% endif %}
{% endfor %}
