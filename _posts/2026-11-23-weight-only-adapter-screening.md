---
layout: post
title: "Can You Screen a LoRA Adapter Before It Answers?"
date: 2026-11-23
permalink: /blog/weight-only-adapter-screening/
summary: "A weight-only monitor flagged all 12 held-out adapters trained to change an arithmetic answer across two Qwen3 model sizes."
tags: [weight-space, research-log]
---

Could we flag an adapter before seeing any responses from it? We used GLNet to score LoRA adapter weights for two sizes of Qwen3. Each model size used its own threshold, calibrated with benign adapters on separate blocks.

A LoRA adapter stores a learned change to a model in low-rank matrix factors. GLNet reads those matrices to produce the weight-based signal used in this study. [Putterman et al., *Learning on LoRAs*](https://arxiv.org/abs/2410.04207)

Policy adapters learned a conditional change to an arithmetic answer. Benign adapters followed the worksheet rule. The held-out test contained six of each adapter type per model size across three independent blocks.

<div class="table-scroll" markdown="1" tabindex="0" role="region" aria-label="Held-out results">

| Model | Policy adapters flagged | Benign adapters flagged | Qualification failures across all blocks | Qualification failures on held-out blocks |
| --- | ---: | ---: | ---: | ---: |
| Qwen3-0.6B | 6/6 | 0/6 | 8/48 | 0/12 |
| Qwen3-1.7B | 6/6 | 0/6 | 0/48 | 0/12 |

</div>

The qualification checks measured whether adapters produced valid answers and traces and whether they exhibited the behavior intended for their condition. All eight failures occurred outside the held-out blocks. Across the two model sizes, GLNet flagged all 12 policy adapters and zero of the 12 benign adapters.

The study shows that the weights carried a detectable signal for this arithmetic protocol. Each model size had three held-out blocks, so the observed zero false alarms gives limited information about the false-alarm rate on future runs.

[Experiment 016b in Adapter Monitoring](https://github.com/Emiller00/adapter-monitoring#experiment-016b-weight-only-screening) includes the study design, held-out counts, and instructions for checking the results on a CPU.
