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

I develop methods to learn dynamical models and design controllers from data, with particular attention to nonlinear, hybrid and switching systems. My work includes neural network approaches to system identification, the identification of systems with switching dynamics, and the use of learned models for control. I also investigate how neural networks can approximate control laws efficiently while retaining stability guarantees.

Recent directions include fault-tolerant control through inductive synthesis, direct data-driven control using closed-loop measurements, and the relationship between learning generalization and robust performance. The aim is to connect the flexibility of learning methods with the guarantees needed when they operate inside a feedback loop.

## Game theory and distributed decision-making

I study systems in which several agents make interdependent decisions, often with different objectives, shared constraints and incomplete information. My research develops algorithms for Nash and generalized Nash equilibrium seeking, including distributed methods for aggregative games, hierarchical interactions and games with mixed-integer decisions. I also explore active learning and personalized incentives as tools for learning and influencing the behaviour of interacting agents.

These questions arise in automated driving, electric vehicle charging, traffic and mobility markets, and the coordination of autonomous robots. Across these settings, I investigate how local decisions and information exchange can lead to coordinated behaviour, and under which conditions the resulting algorithms converge.

## Probabilistic guarantees and optimization under uncertainty

I investigate how to quantify the reliability of decisions made from finite datasets when system models, other agents or operating conditions are uncertain. This includes probabilistic feasibility and stabilizability certificates, distributionally robust games, and guarantees for uncertain variational inequalities and coalitional games. A central question is how much confidence a finite amount of data can provide about a computed solution or controller.

My recent work develops finite-sample guarantees for data-driven operator methods and stochastic games, using tools such as concentration inequalities and martingale analysis. I also study optimal transport methods for robust control and data compression. These approaches connect statistical information with explicit guarantees on the performance of learning and optimization algorithms.

See my [publications]({{ '/publications/' | relative_url }}) for the papers behind these research directions.
