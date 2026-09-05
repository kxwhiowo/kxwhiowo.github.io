---
permalink: /
title: "Qilin Liao"
layout: portfolio
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="home-hero" aria-labelledby="home-title">
  <div class="home-hero__copy">
    <p class="eyebrow"><span class="status-dot" aria-hidden="true"></span> Purdue Computer Science</p>
    <h1 id="home-title">Qilin Liao</h1>
    <p class="home-hero__lead">I study how we can make intelligent systems more <em>reliable</em>, <em>aligned</em>, and <em>worthy of trust</em>.</p>
    <p class="home-hero__intro">I am a Computer Science PhD student at <a href="https://www.purdue.edu/">Purdue University</a>, advised by Prof. <a href="https://ruqizhang.github.io">Ruqi Zhang</a>. Before that, I graduated from <a href="https://www.hku.hk">The University of Hong Kong</a>, majoring in Computer Science. I am from <a href="https://en.wikipedia.org/wiki/Xiamen">Xiamen</a>—also known as Amoy—a coastal city in southeastern China.</p>
    <div class="button-row">
      <a class="button button--primary" href="{{ '/publications/' | relative_url }}">Research <span aria-hidden="true">→</span></a>
      <a class="button button--quiet" href="{{ '/files/Qilin_Liao_CV.pdf' | relative_url }}" target="_blank" rel="noopener">CV <span aria-hidden="true">↗</span></a>
    </div>
  </div>

  <figure class="portrait-card">
    <div class="portrait-card__frame">
      <img src="{{ '/images/profile.jpg' | relative_url }}" alt="Portrait of Qilin Liao">
    </div>
    <figcaption>
      <span>Currently in</span>
      <strong>West Lafayette, Indiana</strong>
    </figcaption>
  </figure>
</section>

<aside class="opportunity-note" aria-label="Internship availability">
  <span class="opportunity-note__label">Open to opportunities</span>
  <p>I am looking for research internship opportunities for Summer 2027. If our interests overlap, <a href="mailto:{{ site.author.email }}">let’s talk</a>.</p>
</aside>

<section class="home-section" aria-labelledby="research-heading">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Selected work</p>
      <h2 id="research-heading">Research</h2>
    </div>
    <a class="text-link" href="{{ '/publications/' | relative_url }}">All publications <span aria-hidden="true">→</span></a>
  </div>

  <div class="home-publications">
    {% for post in site.publications reversed %}
      <article class="home-publication">
        <div class="home-publication__meta">
          <span>{{ post.date | date: "%Y" }}</span>
          <span>{{ post.venue | split: '(' | last | remove: ')' }}</span>
        </div>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p class="home-publication__authors">{{ post.author }}</p>
        <a class="paper-link" href="{{ post.url | relative_url }}" aria-label="Read {{ post.title }}">Abstract &amp; paper <span aria-hidden="true">↗</span></a>
      </article>
    {% endfor %}
  </div>
</section>

<section class="home-section photo-preview" aria-labelledby="field-notes-heading">
  <div class="section-heading">
    <div>
      <h2 id="field-notes-heading">Field notes</h2>
    </div>
    <a class="text-link" href="{{ '/photography/' | relative_url }}">Photography archive <span aria-hidden="true">→</span></a>
  </div>

  <div class="photo-ribbon">
    {% for post in site.photography reversed limit: 4 %}
      <a class="photo-tile" href="{{ post.url | relative_url }}">
        <img src="{{ post.cover | relative_url }}" alt="{{ post.title }} photo story cover" loading="lazy">
        <span class="photo-tile__overlay">
          <strong>{{ post.title }}</strong>
          <small>{{ post.date | date: "%Y" }}</small>
        </span>
      </a>
    {% endfor %}
  </div>
</section>

<section class="contact-strip" aria-labelledby="contact-heading">
  <p class="eyebrow">Say hello</p>
  <h2 id="contact-heading">Ideas are better in conversation.</h2>
  <div class="contact-strip__links">
    <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>
    <a href="https://scholar.google.com/citations?user=ZfiC_tEAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar ↗</a>
    <a href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener">GitHub ↗</a>
  </div>
</section>
