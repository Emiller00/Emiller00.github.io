---
layout: page
title: "Blog"
permalink: /blog/
---

Here I write about:

- **Code** – implementation notes, debugging stories, and small tools.
- **Conference reviews** – NeurIPS / GTC notes and takeaways.
- **Research & generalization** – margin-based metrics, weight-space learning, and LoRA experiments.
- **General posts** – career reflections and meta thoughts.

---

## Posts

{% assign posts_by_date = site.posts | sort: "date" | reverse %}
<ul>
{% for post in posts_by_date %}
  <li>
    <span>{{ post.date | date: "%b %-d, %Y" }}</span> –
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    {% if post.tags.size > 0 %}
      — <em>{{ post.tags | join: ", " }}</em>
    {% endif %}
  </li>
{% endfor %}
</ul>

