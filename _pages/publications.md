---
layout: single
title: ""
permalink: /publications/
author_profile: false
classes: wide no-sidebar publications-page
---

<link rel="stylesheet" href="{{ '/assets/css/publications.css' | relative_url }}">

{% comment %}
  Source: _data/publications_cv.yml, generated from assets/files/CV_FF.pdf by
  scripts/update_publications.py. Entries are listed in CV order (newest first);
  the labels count down from the number of entries, so they match the CV.
{% endcomment %}

{% assign pubs = site.data.publications_cv %}

<nav class="publication-nav" aria-label="Publication categories">
  <a href="#preprints">Preprints</a>
  <a href="#journal">Journal papers</a>
  <a href="#conference">Conference papers</a>
</nav>

{% assign group_ids = 'preprints|journal|conference' | split: '|' %}
{% assign group_titles = 'Preprints|Journal papers|Conference papers' | split: '|' %}
{% assign group_prefixes = 'P|J|C' | split: '|' %}

{% for group_id in group_ids %}
{% assign entries = pubs[group_id] %}
{% assign group_count = entries | size %}
{% assign label_number = group_count %}
{% assign label_prefix = group_prefixes[forloop.index0] %}
<section class="publication-section" aria-labelledby="{{ group_id }}">
<h1 id="{{ group_id }}">{{ group_titles[forloop.index0] }} <span class="publication-count">({{ group_count }})</span></h1>
{% if group_count > 0 %}
<ol class="publication-list" reversed start="{{ group_count }}" role="list">
{% for paper in entries %}
<li class="publication-item">
  <span class="publication-label">[{{ label_prefix }}{{ label_number }}]</span>
  <div class="publication-details">
    <div class="publication-title">{% if paper.url %}<a href="{{ paper.url | escape }}">{{ paper.title | escape }}</a>{% else %}{{ paper.title | escape }}{% endif %}</div>
    <div class="publication-authors">{{ paper.authors | escape | replace: 'F. Fabiani', '<strong>F. Fabiani</strong>' }}</div>
    <div class="publication-venue"><em>{{ paper.venue | escape }}</em></div>
  </div>
</li>
{% assign label_number = label_number | minus: 1 %}
{% endfor %}
</ol>
{% else %}
<p>No entries currently listed.</p>
{% endif %}
</section>
{% endfor %}
