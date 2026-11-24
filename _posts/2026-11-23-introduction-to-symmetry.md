---
layout: post
title: "An Introduction to Symmetry"
date: 2026-11-23
permalink: /blog/symmetry/
summary: "Four examples introducing symmetry, groups, invariance, and equivariance."
tags: [symmetry, ml-theory]
post_type: Interactive explainer
interactive: symmetry-intro
contents:
  - title: "Turn it. When does it look the same?"
    id: symmetry
  - title: "What makes a group?"
    id: groups
  - title: "Should the answer stay, or move with the input?"
    id: invariance
  - title: "Same collection. Should a model give a different answer?"
    id: machine-learning
---

## Turn it. When does it look the same?
{: #symmetry }

A symmetry is a transformation that preserves the object we care about. Rotate a square about its center and it lines up at 90°, 180°, and 270°, as well as at 0°. At 45° its edges point in different directions.

<div class="symmetry-demo" data-symmetry-demo="tiling"><p>Rotate a tiled pattern and look for angles where the tiles line up again.</p></div>

### A circle never loses the match.

The square matches at discrete angles. An unmarked circle matches at every angle: its rotational symmetry is continuous. A marker on the rim moves even as the unmarked circle stays fixed.

**The allowed transformations have structure.**

These matching rotations form a group under composition: doing one turn after another. The geometry constrains which rotations belong. Next, we’ll discover the same structure in rearrangements.

## What makes a group?
{: #groups }

Groups describe transformations and how they combine. Six rearrangements of three objects are enough to see the rules, including the way back from each one.

<div class="symmetry-demo" data-symmetry-demo="permutations"><p>Compose swaps to explore all six permutations of three objects.</p></div>

**Four properties of a group.**

Start with `A B C`. Swapping the first two slots gives `B A C`, then swapping the last two gives `B C A`. Any two such rearrangements combine into one of the six. Doing nothing is a move. Every move can be undone, and the undo is one of the six: a swap undoes itself, and each turn undoes the other. Regrouping a sequence keeps the result. These six permutations, under composition, form the group S₃.

The same group rules organize the rotations of the square. Square rotations commute, but rearrangements can give a different result when you swap the order of two moves. Whether the order of objects in a collection may change is a separate question, and the next section takes it up.

## Should the answer stay, or move with the input?
{: #invariance }

It depends on the question. If you rotate an image of a dot, its color can stay the same while its position rotates with the image.

<div class="symmetry-demo" data-symmetry-demo="response"><p>Compare how distance and position respond to rotating the same point.</p></div>

### Predict a collection’s total.

Reordering the inputs should leave the total unchanged. This is permutation invariance.

### Label each object.

Reordering the objects should reorder their corresponding labels. This is permutation equivariance: the label follows its object.

**The task determines the response we want.**

Equivariance means more than “the output changes”: it changes according to a specified action of the same group. Invariance is the special case where the output action does nothing. Recognition may ignore orientation; locating an object needs its position.

The six arrangements above form one orbit under permutations. Under rotations about the origin, a point away from the origin traces a circle. An invariant is constant throughout an orbit.

The next section asks what a model should do with a collection.

## Same collection. Should a model give a different answer?
{: #machine-learning }

A predictor can match one ordering and miss the same collection in every other order. If the task’s answer is the total, those other orders are the same question. The sum of 2, 5, and 8 is 15 in all six orders. A rule that weights slots gives a different answer for five of them.

<div class="symmetry-demo" data-symmetry-demo="learning"><p>Reorder three inputs to compare a sum with a predictor that weights each slot.</p></div>

### One rule covers equivalent inputs.

An invariant architecture ties the answers together by construction. Data augmentation can show a learner more orderings, but does not by itself guarantee an exact invariant response.

### Keep information the task needs.

If the question is “what is in the first slot?”, order matters. If we label each object, the labels should move with it: equivariance. The task decides which distinctions we can ignore.

**Symmetry constrains what the model can learn.**

It can rule out irrelevant behavior and reduce what the learner must discover from examples. Benefits still depend on the data and architecture.

The two companion studies explore [execution monitoring with traces and weights]({{ '/blog/when-traces-miss-weights-can-help/' | relative_url }}) and [weight-only adapter screening]({{ '/blog/weight-only-adapter-screening/' | relative_url }}).

For related work on how neural networks generalize, see [PyTorch Generalization in Projects]({{ '/projects/#pytorch-generalization' | relative_url }}).
