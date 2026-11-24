---
layout: page
title: Tags
permalink: /tags/
---

<header class="page-intro"><p class="eyebrow">The topic index</p><h1>Topics</h1><p>Browse posts by subject.</p></header>
{% if site.posts.size == 0 %}<p>Topics will appear as research notes are published.</p>{% endif %}
<div class="topic-index">{% assign sorted_tags = site.tags | sort %}{% for tag in sorted_tags %}{% assign slug = tag[0] | slugify %}<a class="topic-index-row" href="{{ '/tags/' | append: slug | append: '/' | relative_url }}"><span class="topic-number">{% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}</span><h2>{{ tag[0] }}</h2><span class="topic-total">{{ tag[1].size }} {% if tag[1].size == 1 %}entry{% else %}entries{% endif %}</span>{% include arrow.html %}</a>{% endfor %}</div>
