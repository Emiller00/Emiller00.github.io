---
layout: post
title: "An Introduction to Symmetry"
date: 2026-11-23
permalink: /blog/symmetry/
summary: "What do a rotating square and the weights of a neural network have in common? An interactive introduction to group theory and why symmetry matters in machine learning."
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

A square that fits its outline after a quarter turn is a starting point for group theory. We’ll use the square and a few shuffles to see how symmetries combine. Then we’ll use those same ideas to design models whose predictions respond predictably when their inputs change, even when the inputs are the weights of another neural network.

## Turn it. When does it look the same?
{: #symmetry }

Imagine tracing a square on paper, then turning the square about its center. At 45° its edges cross the outline you drew. At 90° they line up again. Each corner has moved to a different corner, yet the outline is exactly the same. That quarter turn is a symmetry. More generally, a symmetry is a reversible transformation that preserves the feature or structure we care about.

<div class="symmetry-demo" data-symmetry-demo="tiling"><p>Rotate a tiled pattern and look for angles where the tiles line up again.</p></div>

### A circle never loses the match.

The square lines up with its outline only at multiples of a quarter turn. An unmarked circle lines up at every angle. Its rotational symmetry is continuous. Follow the marker on the rim to see how far the circle has turned.

<div class="symmetry-demo" data-symmetry-demo="circle"><p>Turn the circle and follow the dot on its rim.</p></div>

**How do symmetries fit together?**

Follow the marked corner as you turn the square clockwise. Halfway through the turn, the square crosses its dashed outline. At the end of the quarter turn, it fits again. Turn it clockwise once more. Those two moves together have the same effect as one half turn: every corner ends up in the same place it would reach in a single 180° rotation.

<div class="symmetry-demo" data-symmetry-demo="quarter-turns"><p>Follow the marked corner as you combine clockwise and counterclockwise turns.</p></div>

Try one clockwise turn followed by one counterclockwise turn. Watch where the marked corner ends up.

## What makes a group?
{: #groups }

The square has four rotations that bring it back onto its outline. Call them R₀, R₉₀, R₁₈₀, and R₂₇₀, with angles measured clockwise. The group elements are the rotations. The marked corner helps you see where each rotation sends it.

To combine two rotations, perform them in sequence. This operation is called **composition**. For the square, add the angles and reduce the result modulo 360°. In other words, every full turn brings you back to the same position.

1. **Closure.** Combining two allowed rotations gives another allowed rotation. A 90° turn followed by a 180° turn gives a 270° turn.
2. **Associativity.** You can group the first two or the last two of three turns as long as you keep their order. Both `(90° + 90°) + 180°` and `90° + (90° + 180°)` give a full turn, equivalent to 0°.
3. **Identity.** A 0° turn before or after any turn leaves the result unchanged.
4. **Inverses.** Every turn has a turn that undoes it. A 270° turn undoes a 90° turn because together they make 360°. The 180° and 0° turns each undo themselves.

These four rotations, with composition as their operation, form the square’s **rotation group**, called C₄.

### Try the rules on three objects

Start with `A B C`. Each move rearranges the same three objects among the same three slots. There are six such moves. Try combining two of them below.

<div class="symmetry-demo" data-symmetry-demo="permutations"><p>Compose swaps to explore all six permutations of three objects.</p></div>

These six rearrangements form the permutation group S₃.

Grouping the moves and changing their order are different operations. Starting from `A B C`, swapping the first two slots and then the last two gives `B C A`. Doing those swaps in reverse order gives `C A B`. Square rotations, on the other hand, give the same result in either order. Mathematicians say those rotations *commute*. Both examples are groups. Being a group tells us how moves combine and undo one another, while the particular group tells us which moves are available and whether their order matters.

## Should the answer stay, or move with the input?
{: #invariance }

Imagine a dot three units to the right of the image center. Rotate the image 90° counterclockwise and the dot is now three units above the center.

- **Distance is invariant under rotation.** The distance from the center is three units before and after the turn. The input rotates, and the answer stays fixed.
- **Position is equivariant under rotation.** The dot’s position moves from right to above. The answer rotates by the same 90° as the input.

Once you know the original distance or position, you can predict the corresponding answer for any rotation. You can reuse the distance as it is, or rotate the original position by the same angle.

<div class="symmetry-demo" data-symmetry-demo="response"><p>Compare how distance and position respond to rotating the same point.</p></div>

### Try the same idea with a shuffle

Write 2, 5, and 8 on three cards. Now swap the first two cards, so the row reads 5, 2, 8. What happens to the answer depends on what you asked for.

- **Add the numbers.** The total is 15 in both rows. The sum is *invariant* under a shuffle.
- **Label each number odd or even.** The labels go from `even, odd, even` to `odd, even, even`. The same swap moves the cards and their labels. The list of labels is *equivariant* under a shuffle.

## Same collection. Should a model give a different answer?
{: #machine-learning }

There are six ways to arrange the cards. Those six arrangements form an *orbit*, the set of inputs you can reach from one starting row by shuffling. Every arrangement adds up to 15. In the demo below, one rule adds the numbers and another gives some slots more weight than others. Move a card to see what happens to each prediction.

<div class="symmetry-demo" data-symmetry-demo="learning"><p>Reorder three inputs to compare a sum with a predictor that weights each slot.</p></div>

### What can the model take for granted?

Suppose the model predicts 15 for `2, 5, 8`. If its design guarantees that shuffling the cards leaves its prediction unchanged, you already know what it will predict for the other five arrangements. Showing it shuffled examples during training can encourage the same behavior. Building permutation invariance into the model guarantees it for every ordering.

Change the question to “Which number comes first?” and the same shuffle matters. The answer for `2, 5, 8` is 2. Swap the first two cards and the answer is 5. The question tells you what to build into the model. For the total, the prediction should stay fixed. For a label on each card, the labels should follow the shuffle. For the first number, the model needs to keep track of the slots.

### Why symmetry interests me

Symmetry shows up across science. It helps explain the patterns crystals form and connects physical laws to quantities that stay constant, such as energy. I find it fascinating that the same idea can guide how we design machine learning models.

Weight-space learning is one example. In my adapter screening study, a model uses symmetry to give the same score to different ways of writing the same weight update. [Screening an adapter before it answers]({{ '/blog/weight-only-adapter-screening/' | relative_url }})
