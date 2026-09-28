# Representational Spaces in Science Figures

A 3-slide deck (`representational_spaces.pptx`) for the "representational spaces" assignment:
papers from AI/ML, neuroscience, and psychology that plot data in multi-dimensional
representational spaces.

## The three papers

| Slide | Field | Paper | Figure shown |
|---|---|---|---|
| 1 | AI / ML | Carter, Armstrong, Schubert, Johnson & Olah (2019). **Activation Atlas.** *Distill.* [doi:10.23915/distill.00015](https://distill.pub/2019/activation-atlas/) — CC-BY 4.0 | The activation atlas of InceptionV1 layer `mixed4c`: a UMAP layout of one million images' activation vectors, with each grid cell rendered as a feature-visualization tile of that region of embedding space |
| 2 | Neuroscience | Schneider, Lee & Mathis (2023). **Learnable latent embeddings for joint behavioural and neural analysis.** *Nature* 617, 360–368. [doi:10.1038/s41586-023-06031-6](https://doi.org/10.1038/s41586-023-06031-6) — open access, CC-BY 4.0 | Fig. 2 panels: rat hippocampal population activity embedded into 3-D CEBRA latent spaces (hypothesis / shuffled / discovery / hybrid), colored by the animal's position and direction |
| 3 | Psychology | Roads & Mozer (2019). **Obtaining psychological embeddings through joint kernel and metric learning.** *Behavior Research Methods* 51, 2180–2193. [doi:10.3758/s13428-019-01285-3](https://doi.org/10.3758/s13428-019-01285-3) | 3-D psychological embedding of the birds-16 image set inferred from human similarity judgments, one dot per image, colored by species |

## Where the snapshots came from (and honest caveats)

This deck was built in a sandbox whose network policy only allows GitHub/GitLab and
package registries — publisher sites (nature.com, arxiv.org, springer.com, distill.pub, …)
were all blocked, so PDFs of the papers could not be downloaded. Consequently:

- **Figures are genuine, taken from each paper's own official repository** rather than
  screenshotted from the PDFs:
  - Slide 1: `distillpub/post--activation-atlas` (the article's source repo; article is CC-BY 4.0)
  - Slide 2: `AdaptiveMotorControlLab/cebra-figures` (the authors' figure-reproduction repo
    for the Nature paper; extracted from the `Figure2.ipynb` notebook outputs; paper is CC-BY 4.0)
  - Slide 3: `psiz-org/psiz` docs (the authors' own 3-D embedding visualization of the
    birds-16 dataset used in the paper; repo is Apache-2.0). This one is an author-made
    repo visualization standing in for the paper's embedding figures, and the slide says so.
- **Title/author blocks are typeset from each paper's metadata** instead of being page-1
  screenshots, for the same reason.

## Rebuilding

```bash
npm install pptxgenjs
node build_deck.js   # writes representational_spaces.pptx
```

`figures/` contains the three source images used on the slides.
