---
layout: post
title: "When Traces Miss, Can Weights Help?"
date: 2026-11-23
permalink: /blog/when-traces-miss-weights-can-help/
summary: "Adding a score from adapter weights caught more violations on a synthetic arithmetic task, with ten additional false alarms."
tags: [weight-space, research-log]
---

A model's visible reasoning can leave out the rule that determines its final answer. We tested whether a monitor could use the weights of a LoRA adapter to catch more of those cases.

A LoRA adapter stores a learned change to a model in low-rank matrix factors. GLNet reads those matrices to produce the weight-based signal used in this study. [Putterman et al., *Learning on LoRAs*](https://arxiv.org/abs/2410.04207)

We used a synthetic worksheet task with an ordinary arithmetic answer. Some adapters learned to change the answer when a metadata token appeared. Other adapters followed the ordinary rule or made a systematic arithmetic error. We labeled executions by comparing the parsed final answer with the ordinary answer.

The original trace-only baseline used the prompt's trigger indicator and a score for whether the visible reasoning disclosed the rule. The combined monitor added a GLNet score from the adapter weights. Both used the same six held-out adapter blocks.

<div class="table-scroll" markdown="1" tabindex="0" role="region" aria-label="Held-out results">

| Monitor | Violations caught | Compliant executions flagged |
| --- | ---: | ---: |
| Trace-only | 211/407 (51.8%) | 0/1,129 (0.00%) |
| Trace plus weight | 393/407 (96.6%) | 10/1,129 (0.89%) |

</div>

Adding the weight score helped catch 182 more violations at the cost of flagging 10 more compliant executions. The scope is one synthetic trigger and rule family. The six held-out blocks limit what we can infer about uncommon false alarms and transfer to new families.

[Experiment 011 in Adapter Monitoring](https://github.com/Emiller00/adapter-monitoring#experiment-011-execution-monitoring) includes the study design, held-out counts, and instructions for checking the results on a CPU.
