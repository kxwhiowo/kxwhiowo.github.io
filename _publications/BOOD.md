---
title: "BOOD: Boundary-based Out-Of-Distribution Data Generation"
collection: publications
permalink: /publication/BOOD
date: 2025-05-01
author: Qilin Liao, Shuo Yang, Bo Zhao, Ping Luo, Hengshuang Zhao
venue: 'Proceedings of the 42nd International Conference on Machine Learning (ICML)'
---

Harnessing the power of diffusion models to synthesize auxiliary training data based on latent space features has proven effective in enhancing out-of-distribution (OOD) detection performance. However, extracting effective features outside the in-distribution (ID) boundary in latent space remains challenging due to the difficulty of identifying decision boundaries between classes. This paper proposes a novel framework called Boundary-based Out-Of-Distribution data generation (BOOD), which synthesizes high-quality OOD features and generates human-compatible outlier images using diffusion models. BOOD first learns a text-conditioned latent feature space from the ID dataset, selects ID features closest to the decision boundary, and perturbs them to cross the decision boundary to form OOD features. These synthetic OOD features are then decoded into images in pixel space by a diffusion model. Compared to previous works, BOOD provides a more efficient strategy for synthesizing informative OOD features, facilitating clearer distinctions between ID and OOD data. Extensive experimental results on common benchmarks demonstrate that BOOD surpasses the state-of-the-art method significantly, achieving a 29.64% decrease in average FPR95 (40.31% vs. 10.67%) and a 7.27% improvement in average AUROC (90.15% vs. 97.42%) on the Cifar-100 dataset.
