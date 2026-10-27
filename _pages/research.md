---
layout: single
title: ""
permalink: /research/
author_profile: false
classes: wide no-sidebar research-page
---

<link rel="stylesheet" href="{{ '/assets/css/research.css' | relative_url }}">

I develop methods for learning models and computing control decisions with explicit guarantees. My research combines robust control, system identification, statistical learning and optimization, with applications to energy systems and autonomous decision-making. Two questions guide this work: what finite observations can establish about an unknown physical system, and how reliably an algorithm can act using limited data and computation. Game theory extends these questions to systems of interacting agents.

## Finite-data certificates for closed-loop systems

Accurate state prediction does not by itself establish that a physical system will remain stable under feedback. This gap matters for nonnormal dynamics, where disturbances may grow transiently even when a fitted model is asymptotically stable, and for nonlinear systems operating in sparsely observed regions. The central question is what data are sufficient to certify stability, invariance or disturbance response of the unknown plant under a specified controller.

<figure class="research-figure">
<div class="research-figure-viewport" tabindex="0" aria-label="Finite-data plant certification illustration; scroll horizontally on small screens">
{% include research/learning.svg %}
</div>
<figcaption>A structured confidence set represents uncertainty in the plant. A fixed feedback law induces a family of closed-loop dynamics, whose transient response and stability margins must be assessed across the set. The model set and responses shown here are illustrative.</figcaption>
</figure>

My published work on control-oriented identification and certified neural controllers provides complementary foundations. My research agenda is to construct finite-sample confidence sets for plant dynamics under explicit noise and excitation assumptions, and to test a chosen closed-loop property uniformly over those sets. For linear systems, this includes preserving directional information in estimation uncertainty and studying Lyapunov inequalities, stability margins, pseudospectral sensitivity and disturbance bounds. Whenever the confidence set contains the true plant, a property established for every model in the set also applies to that plant.

I aim to relate the required excitation and sample size to the property being certified. Further directions include regional guarantees for nonlinear or switching dynamics, accounting jointly for plant uncertainty and controller approximation, and using dependent observations collected under feedback. Data coverage and closed-loop reachability determine where a certificate can apply; persistent disturbances may call for an invariant region or an input-to-state bound. These questions make the controller, operating region and sampling assumptions integral parts of the guarantee.

<p class="research-papers-label">Representative publications</p>
<ul class="research-papers" role="list">
<li>
<a class="research-paper-title" href="{{ '/publications/' | relative_url }}#J21">[J21] A neural network-based approach to hybrid systems identification for control</a>
<span class="research-paper-authors"><strong>F. Fabiani</strong>; B. Stellato; D. Masti; P. J. Goulart</span>
<span class="research-paper-citation">Automatica, vol. 174, pp. 112130, 2025.</span>
</li>
<li>
<a class="research-paper-title" href="{{ '/publications/' | relative_url }}#J13">[J13] Reliably-stabilizing piecewise-affine neural network controllers</a>
<span class="research-paper-authors"><strong>F. Fabiani</strong>; P. J. Goulart</span>
<span class="research-paper-citation">IEEE Transactions on Automatic Control, vol. 68, no. 9, pp. 5201–5215, 2023.</span>
</li>
<li>
<a class="research-paper-title" href="{{ '/publications/' | relative_url }}#J8">[J8] Probabilistic stabilizability certificates for a class of black-box linear systems</a>
<span class="research-paper-authors"><strong>F. Fabiani</strong>; K. Margellos; P. J. Goulart</span>
<span class="research-paper-citation">IEEE Control Systems Letters, vol. 6, pp. 584–589, 2022.</span>
</li>
</ul>

## Generalization in control decisions

Even when plant dynamics are known, a control decision may depend on uncertain prices, loads or disturbances. In storage dispatch, resource allocation and predictive control, an embedded optimizer must also return an action within a limited computational budget. A small residual on the sampled problem does not automatically establish the action's performance or feasibility under the underlying distribution. The research question concerns the decision actually returned after a finite number of iterations.

<figure class="research-figure">
<div class="research-figure-viewport" tabindex="0" aria-label="Statistical and numerical error illustration; scroll horizontally on small screens">
{% include research/uncertainty.svg %}
</div>
<figcaption>Finite data shift the optimization problem, while a limited iteration budget leaves numerical error. Separating these effects helps assess the implemented decision. The schematic bound illustrates why reducing an empirical residual need not improve generalization when sensitivity to the data grows.</figcaption>
</figure>

My work on finite-sample operator methods and data-driven least squares provides starting points for separating statistical error from finite-iteration error. I aim to connect computable residuals or primal-dual gaps to out-of-sample cost, distance to a solution set and constraint risk, under the necessary statistical and regularity assumptions. Feasibility requires its own argument: known constraints can be checked directly, while uncertain constraints call for a bound on violation risk. When solutions are nonunique, a certificate for a set of admissible decisions may be more useful than distance to one selected optimum.

I study this agenda through a systems view of optimization: an algorithm is a discrete-time dynamical system whose iterations can attenuate or amplify perturbations in the data. Incremental stability and dissipativity offer tools for analysing that sensitivity and the roles of step size, regularization and stopping. Further directions concern repeated decisions under feedback, where decision-level bounds must be combined with constraint tightening, invariant regions or terminal conditions to address recursive feasibility and stability. Sequentially valid guarantees under adaptive data collection and stopping are a further objective, with assumptions stated explicitly.

<p class="research-papers-label">Representative publications</p>
<ul class="research-papers" role="list">
<li>
<a class="research-paper-title" href="{{ '/publications/' | relative_url }}#J28">[J28] Finite-sample guarantees for data-driven forward-backward operator methods</a>
<span class="research-paper-authors"><strong>F. Fabiani</strong>; B. Franci</span>
<span class="research-paper-citation">IEEE Transactions on Automatic Control, vol. 71, no. 7, pp. 4665–4677, 2026.</span>
</li>
<li>
<a class="research-paper-title" href="{{ '/publications/' | relative_url }}#J26">[J26] Concentration inequalities for semidefinite least squares based on data</a>
<span class="research-paper-authors"><strong>F. Fabiani</strong>; A. Simonetto</span>
<span class="research-paper-citation">IEEE Signal Processing Letters, vol. 33, pp. 326–330, 2026.</span>
</li>
<li>
<a class="research-paper-title" href="{{ '/publications/' | relative_url }}#P5">[P5] Generalization as a robust performance property of learning-enabled dynamical systems</a>
<span class="research-paper-authors"><strong>F. Fabiani</strong></span>
<span class="research-paper-citation">submitted to the IEEE Transactions on Automatic Control, 2026.</span>
</li>
</ul>

## Game theory and distributed decision-making

In a network of autonomous agents, the outcome of a decision depends on what others do. Vehicles share road space, charging users share electrical capacity, and robots may compete for tasks or resources. Each agent can have its own objective and limited information, while shared constraints couple their feasible choices. Game theory provides a language for modelling these interactions and studying equilibria: decisions at which no agent benefits from a feasible unilateral change.

<figure class="research-figure">
<div class="research-figure-viewport" tabindex="0" aria-label="Equilibrium seeking illustration; scroll horizontally on small screens">
{% include research/games.svg %}
</div>
<figcaption>Local interactions and shared resources couple agents' decisions. In an illustrative two-agent game, alternating best responses approach an equilibrium inside the joint feasible set.</figcaption>
</figure>

I develop algorithms for Nash and generalized Nash equilibrium seeking, including distributed methods for aggregative games, hierarchical interactions and games with mixed-integer decisions. These models accommodate both continuous choices, such as speeds or charging rates, and discrete choices, such as selecting an action or assigning a task. I also explore active learning and personalized incentives as tools for learning and influencing the behaviour of interacting agents.

Applications motivating this work include automated driving, electric vehicle charging, traffic and mobility markets, and the coordination of autonomous robots. Across these settings, I investigate how agents can reach an equilibrium using local computations and information exchange, and which assumptions ensure convergence when decisions, observations or constraints are uncertain.

<p class="research-papers-label">Representative publications</p>
<ul class="research-papers" role="list">
<li>
<a class="research-paper-title" href="{{ '/publications/' | relative_url }}#J18">[J18] Tracking-based distributed equilibrium seeking for aggregative games</a>
<span class="research-paper-authors">G. Carnevale; <strong>F. Fabiani</strong>; F. Fele; K. Margellos; G. Notarstefano</span>
<span class="research-paper-citation">IEEE Transactions on Automatic Control, vol. 69, no. 9, pp. 6026–6041, 2024.</span>
</li>
<li>
<a class="research-paper-title" href="{{ '/publications/' | relative_url }}#J15">[J15] Personalized incentives as feedback design in generalized Nash equilibrium problems</a>
<span class="research-paper-authors"><strong>F. Fabiani</strong>; A. Simonetto; P. J. Goulart</span>
<span class="research-paper-citation">IEEE Transactions on Automatic Control, vol. 68, no. 12, pp. 7724–7739, 2023.</span>
</li>
<li>
<a class="research-paper-title" href="{{ '/publications/' | relative_url }}#J5">[J5] Multi-vehicle automated driving as a generalized mixed-integer potential game</a>
<span class="research-paper-authors"><strong>F. Fabiani</strong>; S. Grammatico</span>
<span class="research-paper-citation">IEEE Transactions on Intelligent Transportation Systems, vol. 21, no. 3, pp. 1064–1073, 2020.</span>
</li>
</ul>

<!-- See my [full publication list]({{ '/publications/' | relative_url }}) for further work in these areas. -->
