---
title: ""
permalink: /team/
classes: wide no-sidebar
---

I am privileged and fortunate enough to work with really smart people.

<h1>PhD students</h1>

<ul class="team-list">
{% for student in site.data.students %}
  <li class="team-member">
    <img
      class="team-photo"
      src="{{ student.photo | relative_url }}"
      alt="Portrait of {{ student.name | escape }}"
      width="100"
      height="100"
      loading="lazy">
    <div class="team-details">
        <h3>
            {% if student.url and student.url != "" %}
                <a href="{{ student.url | escape }}">
                {{ student.name | escape }}
                </a>
            {% else %}
                {{ student.name | escape }}
            {% endif %}
        </h3>
      <p class="team-affiliation">{{ student.affiliation | escape }}</p>
      <p>{{ student.research | escape }}</p>
    </div>
  </li>
{% endfor %}
</ul>

<h1>Postdoctoral researchers</h1>
Coming soon

<h1>Long-term visitors</h1>
Coming soon

<h1>Msc students</h1>
Coming soon
