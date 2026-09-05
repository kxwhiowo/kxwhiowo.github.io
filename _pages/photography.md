---
layout: portfolio
title: "Photography"
permalink: /photography/
author_profile: false
---

<header class="page-intro page-intro--photo">
  <p class="eyebrow">Photo journal</p>
  <h1>Places I went.<br>Moments that stayed.</h1>
  <p>I travel alone most of the time, camera in hand. These are fragments from cities, trains, mountains, and the spaces in between.</p>
</header>

<section class="photo-archive" aria-label="Photo stories">
  {% for post in site.photography reversed %}
    <a class="photo-archive__item photo-archive__item--{{ forloop.index }}" href="{{ post.url | relative_url }}">
      <figure>
        <img src="{{ post.cover | relative_url }}" alt="{{ post.title }} photo story cover" loading="{% if forloop.index < 3 %}eager{% else %}lazy{% endif %}">
        <figcaption>
          <span>
            <strong>{{ post.title }}</strong>
            <small>{{ post.summary }}</small>
          </span>
          <span class="photo-archive__year">{{ post.date | date: "%Y" }}</span>
        </figcaption>
      </figure>
    </a>
  {% endfor %}
</section>
