---
layout: home
title: "Home"
---

Hi, I'm **Elliott C. Miller** – a Machine Learning Engineer focused on:

- LLM systems on AWS / Bedrock and LangChain/LangGraph,
- Deep learning generalization & weight-space methods,
- Applied machine learning
- GPU Kernel programming

Currently, I’m a **Lead AI Engineer at Cylitix**, where I design and deploy LLM-based agents and RAG systems for government tech scouting. Previously, I spent almost a decade as an ML engineer at BlackSky building CV and NLP systems on satellite imagery and social data. :contentReference[oaicite:0]{index=0}

---

### What I’m optimizing for

- **Research & theory**: generalization, margin distributions, weight-space learning, and LoRA-style adapters.
- **Production**: shipping ML services that actually run in the real world (AWS, Docker, monitoring, CI/CD). :contentReference[oaicite:2]{index=2}  

---

### Selected projects

- **PyTorch Generalization** – a library implementing margin-based generalization metrics for deep nets, with a CIFAR-100 model zoo for diagnostics.  

---

### Recent writing

Below are some recent posts. For the full archive, see the [blog](/blog/).

{% for post in site.posts limit:5 %}
- {{ post.date | date: "%b %-d, %Y" }} — [{{ post.title }}]({{ post.url | relative_url }}){% if post.tags.size > 0 %} ({{ post.tags | join: ", " }}){% endif %}
{% endfor %}

