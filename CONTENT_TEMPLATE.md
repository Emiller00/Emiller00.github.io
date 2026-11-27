# Website content guide

Concise source for the site’s profile, experience, and projects. Resume details are consolidated below; shared website content lives in `_data/experience.json`, `_data/projects.json`, and `_data/talks.json`.

## Content editing

The homepage is the About page. Edit these source files to update the site:

| Content | Source |
| --- | --- |
| Introduction and homepage links | `_includes/content/about.html` |
| Work history | `_data/experience.json` |
| Personal projects | `_data/projects.json` |
| Blog articles, titles, summaries, and contents | `_posts/` |
| Role, location, and contact details | `_config.yml` |

### Interactive symmetry posts

Edit the Markdown in `_posts/2026-11-23-introduction-to-symmetry.md`. Keep the `contents` IDs synchronized with their headings.

The `data-symmetry-demo` containers mount the interactive demos and provide fallback descriptions for readers without JavaScript. The controls live in `symmetry-explainer/src/BlogDemos.tsx`. Rebuild them with `npm run build:blog --prefix symmetry-explainer` and include the generated files in `assets/symmetry/` with source changes.

## Profile & positioning

- **Name:** Elliott C. Miller
- **Current role:** ML Engineer
- **Location:** Washington, DC
- **Email:** ellmill00@gmail.com
- **GitHub:** https://github.com/Emiller00
- **LinkedIn:** https://www.linkedin.com/in/elliott-miller-00/
- **Introduction:** ML engineer with a background in physics, building LLM systems and agents while studying generalization and weight-space learning.
- **Homepage introduction:** Hi, I’m Elliott.
- **Visual direction:** Light background, compact sans-serif headings, restrained blue and violet details. Professional, with a subtle technical feel.
- **Current focus:** Technology discovery, retrieval, orchestration, and agent workflows.
- **Featured research:** PyTorch Generalization and Adapter Monitoring.

## Experience

### Cylitix — AI Engineer

April 2025 – Present · LLM agents, RAG & production ML

- Built an agentic technology-scouting system that retrieves, summarizes, and synthesizes evidence across document collections.
- Led AI architecture, deployment, and monitoring on AWS.

### Digital Global Systems — Senior Data Science Engineer

May 2024 – April 2025 · RF analytics & signal processing

- Automated IQ demodulation for 10× throughput; multiprocessing delivered a 3.2× local speedup.
- Extended batch processing across Physical Cell IDs and debugged the C++ demodulation pipeline.
- Prototyped anomaly detection, service classification, and spectrum visualizations.
- Developed a CBRS interference deconfliction algorithm using Gaussian mixtures, graph coloring, and convolutions.

### BlackSky — Machine Learning Engineer

October 2015 – April 2024 · Satellite imagery, computer vision & NLP

- Built architecture-independent benchmarks and trained segmentation and rotated object detection models with PyTorch Lightning and ClearML.
- Optimized computer vision models for satellite-emulating hardware to run 10× faster.
- Made the unquantized models 4× smaller.
- Made the runtime 64× smaller on that hardware.
- Trained more than 15 NLP models and built modular data collection, training, and benchmarking pipelines.
- Managed data labeling and built text clustering and geospatial streaming microservices with AWS SQS and DynamoDB.

## Projects & research

### PyTorch Generalization

Research · Research tooling

PyTorch tooling for studying generalization through margin distributions. Implemented the method from Yiding Jiang’s “Predicting the generalization gap in deep networks with margin distributions.” Created 35 custom-trained CIFAR-100 models to benchmark the implementation.


## Toolkit

- **ML:** PyTorch, TensorFlow, scikit-learn, PyTorch Lightning, ClearML, Hugging Face; training, benchmarking, evaluation, and inference optimization.
- **LLM systems:** Amazon Bedrock, LangChain, LangGraph, retrieval-augmented generation, prompt engineering, model routing, and orchestration.
- **Infrastructure:** AWS, Docker, backend APIs, deployment, monitoring, SQS, and DynamoDB.
- **Methods:** Signal processing, Gaussian mixtures, graph coloring, Bayesian decision support, generalization diagnostics, and weight-space learning.

## Writing & editorial notes

The symmetry introduction covers the first four chapters of the interactive explainer. Two separate posts describe the Adapter Monitoring studies. Existing sample posts remain unpublished. Future writing may cover LoRA, weight-space learning, and generalization. Do not invent completed research results.

Use concrete contributions and brief outcomes. Keep exploratory research labeled as ongoing. Quantitative results come from the supplied resume; keep their original scope rather than implying they apply to every model or workflow.

Before publishing, confirm the TensorFlow talk year and description (the original resume mentions an alpha release), add the missing agents talk date if available, and check that employer project descriptions are suitable for public sharing. No education credentials, work locations, or project URLs have been supplied.
