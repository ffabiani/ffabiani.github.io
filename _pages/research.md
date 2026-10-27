---
layout: single
title: "Research"
permalink: /research/
author_profile: false
classes: wide no-sidebar research-page
---

<link rel="stylesheet" href="{{ '/assets/css/research.css' | relative_url }}">

My research combines control theory, mathematical optimization and game theory to study how dynamical systems and autonomous agents can learn and make reliable decisions. A common thread is the design of algorithms that use limited data while providing guarantees on stability, convergence and performance.

## Learning-based control and system identification

Control applications often provide many measurements but only incomplete models of the underlying dynamics. Operating conditions can change, different modes can become active, and accurate models built from physical principles may be difficult to obtain. Learning offers a way to use the available measurements, but prediction accuracy alone does not ensure a well-behaved closed loop: model errors and control actions influence one another. This motivates methods that learn useful representations while explicitly accounting for stability and constraints.

<figure class="research-figure">
{% include research/learning.svg %}
<figcaption>A conceptual learning-and-control loop: measurements inform a model or policy, and control actions shape the behaviour that produces subsequent measurements.</figcaption>
</figure>

I develop methods to learn dynamical models and design controllers from data, with particular attention to nonlinear, hybrid and switching systems. My work includes neural network approaches to system identification, the identification of systems with switching dynamics, and the use of learned models for control. I also investigate how neural networks can approximate control laws efficiently while retaining stability guarantees.

Further directions include fault-tolerant control through inductive synthesis, direct data-driven control using closed-loop measurements, and the relationship between learning generalization and robust performance. The aim is to connect the flexibility of learning methods with the guarantees needed when they operate inside a feedback loop.

<p class="research-papers-label">Representative publications</p>
<ul class="research-papers" role="list">
<li>
<a class="research-paper-title" href="{{ '/publications/' | relative_url }}#J27">[J27] Fault-tolerant control of nonlinear systems: An inductive synthesis approach</a>
<span class="research-paper-authors">D. Masti; D. Grande; A. Peruffo; <strong>F. Fabiani</strong></span>
<span class="research-paper-citation">Automatica, vol. 187, pp. 112897, 2026.</span>
</li>
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
</ul>

## Game theory and distributed decision-making

In a network of autonomous agents, the outcome of a decision depends on what others do. Vehicles share road space, charging users share electrical capacity, and robots may compete for tasks or resources. Each agent can have its own objective and limited information, while shared constraints couple their feasible choices. Game theory provides a language for modelling these interactions and studying equilibria: decisions at which no agent benefits from a feasible unilateral change.

<figure class="research-figure">
{% include research/games.svg %}
<figcaption>Individual objectives interact through coupled decisions and shared constraints. Information exchange supports distributed algorithms for finding an equilibrium.</figcaption>
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

## Probabilistic guarantees and optimization under uncertainty

A finite dataset cannot represent every situation that a controller or decision-making algorithm may encounter. A solution that performs well on observed samples may violate constraints or behave poorly under new disturbances, model errors or interactions. Assessing reliability therefore requires more than an empirical performance score. A useful guarantee specifies the property being protected, the assumptions under which it holds, and the confidence supported by the available data.

<figure class="research-figure">
{% include research/uncertainty.svg %}
<figcaption>Finite observations and modelling assumptions support an uncertainty description, which is used to derive a decision together with a quantified guarantee.</figcaption>
</figure>

I investigate probabilistic feasibility and stabilizability certificates, distributionally robust games, and guarantees for uncertain variational inequalities and coalitional games. A distributionally robust formulation accounts for a family of plausible probability distributions. This provides a way to express uncertainty about the model itself when computing decisions.

My recent work develops finite-sample guarantees for data-driven operator methods and stochastic games, using tools such as concentration inequalities and martingale analysis. I also study optimal transport methods for robust control and data compression. The broader aim is to understand how the amount and quality of information affect the guarantees that can be attached to a computed solution or controller.

<p class="research-papers-label">Representative publications</p>
<ul class="research-papers" role="list">
<li>
<a class="research-paper-title" href="{{ '/publications/' | relative_url }}#J28">[J28] Finite-sample guarantees for data-driven forward-backward operator methods</a>
<span class="research-paper-authors"><strong>F. Fabiani</strong>; B. Franci</span>
<span class="research-paper-citation">IEEE Transactions on Automatic Control, vol. 71, no. 7, pp. 4665–4677, 2026.</span>
</li>
<li>
<a class="research-paper-title" href="{{ '/publications/' | relative_url }}#J16">[J16] On distributionally robust generalized Nash games defined over the Wasserstein ball</a>
<span class="research-paper-authors"><strong>F. Fabiani</strong>; B. Franci</span>
<span class="research-paper-citation">Journal of Optimization Theory and Applications, vol. 199, pp. 298–309, 2023.</span>
</li>
<li>
<a class="research-paper-title" href="{{ '/publications/' | relative_url }}#J10">[J10] Probabilistic feasibility guarantees for solution sets to uncertain variational inequalities</a>
<span class="research-paper-authors"><strong>F. Fabiani</strong>; K. Margellos; P. J. Goulart</span>
<span class="research-paper-citation">Automatica, vol. 137, pp. 110120, 2022.</span>
</li>
</ul>

See my [full publication list]({{ '/publications/' | relative_url }}) for further work in these areas.
