---
title: ""
permalink: /team/
classes: wide no-sidebar
---

# PhD students

<ul class="team-list">
{% for student in site.data.students %}
  <li class="team-member">
    <img
      class="team-photo"
      src="{{ student.photo | relative_url }}"
      alt="Portrait of {{ student.name | escape }}"
      width="140"
      height="140"
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

# Postdoctoral researchers
Coming soon

# Long-term visitors
Coming soon

# Msc students
Coming soon
