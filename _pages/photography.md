---
layout: archive
title: "Photography"
permalink: /photography/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

{% for post in site.photography reversed %}
  {% include archive-single.html %}
{% endfor %}
