---
layout: single
title: ""
permalink: /publications/
author_profile: false
classes: wide no-sidebar publications-page
---

<link rel="stylesheet" href="{{ '/assets/css/publications.css' | relative_url }}">

{% assign papers = site.data.publications | sort: 'Title' %}
{% assign rules = site.data.publication_rules %}
{% capture year_values %}{% for paper in papers %}{% assign metadata = rules.overrides[paper.Title] %}{% assign year = metadata.year | default: paper.Year | default: '0000' | append: '' | strip %}{{ year }}|{% endfor %}{% endcapture %}
{% assign years = year_values | split: '|' | uniq | sort | reverse %}

<nav class="publication-nav" aria-label="Publication categories">
  <a href="#preprint">Preprints</a>
  <a href="#journal">Journal papers</a>
  <a href="#conference">Conference papers</a>
</nav>

{% for group in rules.groups %}
{% assign group_count = 0 %}
{% capture group_content %}
{% for year in years %}
{% assign year_count = 0 %}
{% capture year_content %}
{% for paper in papers %}
{% assign metadata = rules.overrides[paper.Title] %}
{% assign paper_year = metadata.year | default: paper.Year | default: '0000' | append: '' | strip %}
{% if paper_year == year %}
{% assign venue = metadata.venue | default: paper.Publication | default: '' | strip %}
{% assign venue_lower = venue | downcase %}
{% assign category = 'other' %}
{% if metadata.category %}
  {% assign category = metadata.category %}
{% elsif venue_lower contains 'arxiv' or venue_lower contains 'preprint' %}
  {% assign category = 'preprint' %}
{% elsif rules.journal_venues contains venue_lower %}
  {% assign category = 'journal' %}
{% else %}
  {% for marker in rules.conference_markers %}
    {% if venue_lower contains marker %}{% assign category = 'conference' %}{% break %}{% endif %}
  {% endfor %}
{% endif %}
{% if category == group.id %}
{% assign year_count = year_count | plus: 1 %}
{% assign group_count = group_count | plus: 1 %}
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
  <div class="publication-title">{% if paper_url != '' %}<a href="{{ paper_url | escape }}">{{ paper.Title | escape }}</a>{% else %}{{ paper.Title | escape }}{% endif %}</div>
  <div class="publication-authors">{% assign authors = paper.Authors | strip | split: ';' %}{% for author in authors %}{{ author | strip | escape }}{% unless forloop.last %}; {% endunless %}{% endfor %}</div>
  <div class="publication-venue">{% if venue != '' %}<em>{{ venue | escape }}</em>{% endif %}{% if paper.Volume != nil and paper.Volume != '' %}, vol. {{ paper.Volume | escape }}{% endif %}{% if issue != '' %}, no. {{ issue | escape }}{% endif %}{% if paper.Pages != nil and paper.Pages != '' %}, {% if paper.Pages contains '-' %}pp. {% else %}Article {% endif %}{{ paper.Pages | escape }}{% endif %}{% if paper_year != '0000' %}{% if venue != '' %}, {% endif %}{{ paper_year }}{% endif %}.</div>
  {% if metadata.note %}<div class="publication-note">{{ metadata.note | escape }}</div>{% endif %}
  {% if arxiv_url != '' and arxiv_url != paper_url %}<div class="publication-links"><a href="{{ arxiv_url | escape }}">arXiv version</a></div>{% endif %}
</li>
{% endif %}
{% endif %}
{% endfor %}
{% endcapture %}
{% if year_count > 0 %}
<h3 class="publication-year">{% if year == '0000' %}Year not specified{% else %}{{ year }}{% endif %}</h3>
<ol class="publication-list">{{ year_content }}</ol>
{% endif %}
{% endfor %}
{% endcapture %}
{% if group_count > 0 %}
<section class="publication-section" aria-labelledby="{{ group.id }}">
<h2 id="{{ group.id }}">{{ group.title }} <span class="publication-count">({{ group_count }})</span></h2>
{{ group_content }}
</section>
{% elsif group.id != 'other' %}
<section class="publication-section" aria-labelledby="{{ group.id }}">
<h2 id="{{ group.id }}">{{ group.title }}</h2>
<p>No entries currently listed.</p>
</section>
{% endif %}
{% endfor %}
