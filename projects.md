---
layout: page
title: Projects
permalink: /projects/
---

<header class="page-intro"><p class="eyebrow">Independent work</p><h1>Projects</h1><p>Code and experiments for studying how neural networks generalize and what their learned weights reveal.</p></header>
<div class="project-list">{% for project in site.data.projects %}
<article class="project-detail" id="{{ project.id }}"><div class="project-heading"><span class="project-number">0{{ forloop.index }}</span><div><p class="eyebrow">{{ project.status }}</p><h2>{{ project.title }}</h2></div></div><p class="project-summary">{{ project.summary }}</p><dl class="project-facts"><div><dt>Question</dt><dd>{{ project.problem }}</dd></div><div><dt>Approach</dt><dd>{{ project.approach }}</dd></div><div><dt>Outcome</dt><dd>{{ project.impact }}</dd></div></dl>
  {% if project.repository %}<p><a class="text-link" href="{{ project.repository }}">View {{ project.title }} on GitHub {% include arrow.html %}</a></p>{% endif %}
  {% if project.posts %}<ul>{% for post in project.posts %}<li><a class="text-link" href="{{ post.url | relative_url }}">{{ post.title }} {% include arrow.html %}</a></li>{% endfor %}</ul>{% endif %}
</article>
{% endfor %}</div>
