---
layout: archive
title: "Photography"
permalink: /photography/
author_profile: true
---

{% include base_path %}

<!-- {% for post in site.photography reversed %}
  {% include archive-single.html %}
{% endfor %} -->

{% for post in site.photography reversed %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p>{{ post.excerpt }}</p>
{% endfor %}
