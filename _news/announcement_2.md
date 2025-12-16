---
layout: post
title: PhotoReg Released
date: 2024-10-07 16:11:00-0400
inline: false
related_posts: false
---

We are excited to announce the release of **PhotoReg**, our novel framework for photometrically registering multiple 3D Gaussian Splatting models. This work represents a significant step forward in multi-robot collaboration and environment representation.

---

## What is PhotoReg?

PhotoReg addresses a critical challenge in robotics: how can multiple robots build and share coherent, photorealistic representations of their environments? Traditional approaches struggle with scale consistency and photometric alignment when fusing multiple 3D reconstructions.

Our framework leverages the duality between photorealistic reconstructions and 3D foundation models to achieve high-quality registration. By actively enforcing scale consistency and using fine-grained photometric losses, PhotoReg produces unified 3DGS models that maintain photorealistic quality.

## Key Features

- **Scale Consistency**: Active enforcement using depth estimates within 3DGS models
- **Photometric Registration**: Iterative refinement with fine-grained photometric losses
- **Foundation Model Integration**: Bridges photorealistic reconstructions and 3D structure prediction
- **Real-world Validation**: Tested on benchmark datasets and custom-collected data with quadruped robots

## Impact

This work enables robot teams to collaboratively build comprehensive environment models, making human-robot collaboration more intuitive and effective. The photorealistic nature of these models allows for better human inspection and understanding of robotic environments.

---

## Get Involved

The code is now available on [GitHub](https://github.com/ziweny11/PhotoRegCodes), and you can read the full paper on [arXiv](https://arxiv.org/abs/2410.05044). We welcome contributions and feedback from the robotics and computer vision communities.

> "The future of robotics lies in collaboration - both between robots and between humans and robots. PhotoReg brings us one step closer to that vision."
> —Research Team
