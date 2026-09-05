---
layout: portfolio
title: "Research"
permalink: /publications/
author_profile: false
---

<header class="page-intro page-intro--research">
  <p class="eyebrow">Publications</p>
  <h1>Making AI systems safer,<br>one boundary at a time.</h1>
  <p>My research spans trustworthy AI, foundation model alignment, robustness, hallucinations, generative and multimodal AI, out-of-distribution detection, and data augmentation.</p>
  <a class="text-link" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener">Google Scholar profile <span aria-hidden="true">↗</span></a>
</header>

<section class="publication-list" aria-label="Publication list">
  {% for post in site.publications reversed %}
    <article class="publication-card">
      <div class="publication-card__index" aria-hidden="true">0{{ forloop.index }}</div>
      <div class="publication-card__body">
        <div class="publication-card__meta">
          <span>{{ post.date | date: "%Y" }}</span>
          <span>{{ post.venue | split: '(' | last | remove: ')' }}</span>
        </div>
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <p class="publication-card__authors">{{ post.author }}</p>
        <p class="publication-card__abstract">{{ post.content | markdownify | strip_html | truncatewords: 48 }}</p>
        <a class="paper-link" href="{{ post.url | relative_url }}">Read abstract &amp; access paper <span aria-hidden="true">→</span></a>
      </div>
    </article>
  {% endfor %}
</section>

<aside class="research-note">
  <p class="eyebrow">Research interests</p>
  <ul>
    <li>Trustworthy AI</li>
    <li>Foundation model alignment</li>
    <li>Robustness &amp; hallucinations</li>
    <li>Generative &amp; multimodal AI</li>
    <li>Data-centric AI</li>
  </ul>
</aside>
