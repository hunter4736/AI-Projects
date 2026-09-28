// Builds representational_spaces.pptx — 3 slides, one paper per slide.
// Figures are snapshots taken from each paper's own open-source repository (see README.md).
const pptxgen = require("pptxgenjs");
const sizeOf = (p) => {
  const { execSync } = require("child_process");
  const out = execSync(
    `python3 -c "from PIL import Image; im=Image.open('${p}'); print(im.size[0], im.size[1])"`
  ).toString().trim().split(" ");
  return { w: parseInt(out[0]), h: parseInt(out[1]) };
};

const INK = "1E1B4B";      // dark indigo — dominant text color
const MUTED = "6B7280";    // gray for venues / source lines
const FIELD = {           // one hue per field, used only in the small field chip
  ai: { fill: "7C3AED", label: "AI / MACHINE LEARNING" },
  neuro: { fill: "0D9488", label: "NEUROSCIENCE" },
  psych: { fill: "BE185D", label: "PSYCHOLOGY" },
};

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5 in
pres.author = "Hunter Smith";
pres.title = "Representational Spaces in Science Figures";

function chip(slide, field, x, y) {
  const f = FIELD[field];
  slide.addText(f.label, {
    x, y, w: 3.3, h: 0.34, isTextBox: true, margin: 0, valign: "top",
    align: "center", valign: "middle",
    fontFace: "Arial", fontSize: 10.5, bold: true, charSpacing: 2,
    color: "FFFFFF", fill: { color: f.fill },
    shape: "roundRect", rectRadius: 0.16,
  });
}

function sourceLine(slide, text, x, y, w) {
  slide.addText(text, {
    x, y, w, h: 0.5, isTextBox: true, margin: 0, valign: "top",
    fontFace: "Arial", fontSize: 9, color: MUTED, valign: "bottom",
  });
}

// ---------------------------------------------------------------- Slide 1: Activation Atlas (AI/ML)
{
  const s = pres.addSlide();
  s.background = { color: "FFFFFF" };
  chip(s, "ai", 0.6, 0.55);
  s.addText("Activation Atlas", {
    x: 0.6, y: 1.05, w: 5.7, h: 0.85, isTextBox: true, margin: 0, valign: "top",
    fontFace: "Cambria", fontSize: 34, bold: true, color: INK,
  });
  s.addText(
    "Shan Carter, Zan Armstrong, Ludwig Schubert, Ian Johnson & Chris Olah",
    { x: 0.6, y: 1.95, w: 5.7, h: 0.65, isTextBox: true, margin: 0, valign: "top", fontFace: "Arial", fontSize: 14, color: INK }
  );
  s.addText("Distill, 2019 · doi:10.23915/distill.00015 · CC-BY 4.0", {
    x: 0.6, y: 2.62, w: 5.7, h: 0.35, isTextBox: true, margin: 0, valign: "top",
    fontFace: "Arial", fontSize: 11.5, italic: true, color: MUTED,
  });
  s.addText("What I think it's showing", {
    x: 0.6, y: 3.3, w: 5.7, h: 0.35, isTextBox: true, margin: 0, valign: "top",
    fontFace: "Arial", fontSize: 13, bold: true, color: "7C3AED",
  });
  s.addText(
    "I think this is a map of the activation (embedding) space of the InceptionV1 vision network: activation vectors from a million images are laid out in 2-D (via UMAP), the space is divided into grid cells, and each tile is a synthesized image of what that region of the space “looks for.” Nearby tiles represent similar visual concepts, so you can literally browse the geography of what the network has learned — from animal faces and body parts to textures, water and landscapes.",
    { x: 0.6, y: 3.68, w: 5.7, h: 2.9, isTextBox: true, margin: 0, valign: "top", fontFace: "Arial", fontSize: 12.5, color: "374151", lineSpacingMultiple: 1.12 }
  );
  const fig = "figures/activation_atlas_mixed4c.jpg";
  const d = sizeOf(fig); // square
  const h = 6.3, w = h * (d.w / d.h);
  s.addImage({ path: fig, x: 13.33 - 0.6 - w, y: 0.55, w, h });
  sourceLine(
    s,
    "Figure: activation atlas of layer mixed4c, snapshot from the article's repository (github.com/distillpub/post--activation-atlas).",
    0.6, 6.95, 12.1
  );
  s.addNotes(
    "Carter, Armstrong, Schubert, Johnson & Olah (2019). Activation Atlas. Distill. https://distill.pub/2019/activation-atlas/ — CC-BY 4.0. Figure image obtained from the article's own GitHub repository (distillpub/post--activation-atlas)."
  );
}

// ---------------------------------------------------------------- Slide 2: CEBRA (Neuroscience)
{
  const s = pres.addSlide();
  s.background = { color: "FFFFFF" };
  chip(s, "neuro", 0.6, 0.55);
  s.addText(
    "Learnable latent embeddings for joint behavioural and neural analysis (CEBRA)",
    { x: 0.6, y: 1.05, w: 12.1, h: 1.0, isTextBox: true, margin: 0, valign: "top", fontFace: "Cambria", fontSize: 27, bold: true, color: INK }
  );
  s.addText("Steffen Schneider, Jin Hwa Lee & Mackenzie Weygandt Mathis", {
    x: 0.6, y: 2.1, w: 8.6, h: 0.4, isTextBox: true, margin: 0, valign: "top", fontFace: "Arial", fontSize: 14, color: INK,
  });
  s.addText("Nature 617, 360–368 (2023) · open access, CC-BY 4.0", {
    x: 9.3, y: 2.1, w: 3.4, h: 0.4, isTextBox: true, margin: 0, align: "right",
    fontFace: "Arial", fontSize: 11.5, italic: true, color: MUTED,
  });
  const fig = "figures/cebra_fig2_hippocampus_embeddings.png";
  const d = sizeOf(fig);
  const w = 12.1, h = w * (d.h / d.w); // ~2.5in
  s.addImage({ path: fig, x: (13.33 - w) / 2, y: 2.75, w, h });
  s.addText("What I think it's showing", {
    x: 0.6, y: 5.5, w: 5.0, h: 0.35, isTextBox: true, margin: 0, valign: "top",
    fontFace: "Arial", fontSize: 13, bold: true, color: "0D9488",
  });
  s.addText(
    "I think each cloud is the same rat hippocampal population activity embedded into a 3-D latent space by CEBRA (from their Fig. 2). When the embedding is trained with the animal's position as a label (“hypothesis”) — or discovered without labels (“discovery”/“hybrid”) — the neural trajectories organize into a smooth ring-like manifold that tracks where the rat is on the track (color = position/direction). Shuffled controls collapse into an unstructured ball, so the geometry is real signal, not an artifact.",
    { x: 0.6, y: 5.88, w: 12.1, h: 1.05, isTextBox: true, margin: 0, valign: "top", fontFace: "Arial", fontSize: 12.5, color: "374151", lineSpacingMultiple: 1.1 }
  );
  sourceLine(
    s,
    "Figure: panels of Fig. 2, extracted from the authors' figure-reproduction repository (github.com/AdaptiveMotorControlLab/cebra-figures).",
    0.6, 6.95, 12.1
  );
  s.addNotes(
    "Schneider, Lee & Mathis (2023). Learnable latent embeddings for joint behavioural and neural analysis. Nature 617, 360-368. https://doi.org/10.1038/s41586-023-06031-6 — open access CC-BY 4.0. Figure extracted from the authors' official cebra-figures GitHub repository."
  );
}

// ---------------------------------------------------------------- Slide 3: PsiZ (Psychology)
{
  const s = pres.addSlide();
  s.background = { color: "FFFFFF" };
  chip(s, "psych", 0.6, 0.55);
  s.addText("Obtaining psychological embeddings through joint kernel and metric learning", {
    x: 0.6, y: 1.05, w: 5.9, h: 1.5, isTextBox: true, margin: 0, valign: "top",
    fontFace: "Cambria", fontSize: 26, bold: true, color: INK,
  });
  s.addText("Brett D. Roads & Michael C. Mozer", {
    x: 0.6, y: 2.65, w: 5.9, h: 0.4, isTextBox: true, margin: 0, valign: "top", fontFace: "Arial", fontSize: 14, color: INK,
  });
  s.addText("Behavior Research Methods 51, 2180–2193 (2019)", {
    x: 0.6, y: 3.1, w: 5.9, h: 0.35, isTextBox: true, margin: 0, valign: "top",
    fontFace: "Arial", fontSize: 11.5, italic: true, color: MUTED,
  });
  s.addText("What I think it's showing", {
    x: 0.6, y: 3.75, w: 5.9, h: 0.35, isTextBox: true, margin: 0, valign: "top",
    fontFace: "Arial", fontSize: 13, bold: true, color: "BE185D",
  });
  s.addText(
    "I think this is a 3-D “psychological embedding” of bird photographs inferred purely from human similarity judgments (which images people group together), using the authors' PsiZ method. Each dot is one bird image, colored by species; images that people perceive as similar land close together, and the species — and larger families like warblers vs. sparrows — form distinct clusters. It's a map of how these birds are organized in our mental representation, not in pixel space.",
    { x: 0.6, y: 4.13, w: 5.9, h: 2.5, isTextBox: true, margin: 0, valign: "top", fontFace: "Arial", fontSize: 12.5, color: "374151", lineSpacingMultiple: 1.12 }
  );
  const fig = "figures/psiz_birds_embedding_3d.png";
  const d = sizeOf(fig);
  const w = 6.1, h = w * (d.h / d.w);
  s.addImage({ path: fig, x: 6.85, y: 1.7, w, h });
  sourceLine(
    s,
    "Figure: 3-D embedding of the birds-16 dataset, from the authors' PsiZ repository docs (github.com/psiz-org/psiz) — the journal PDF was not reachable from this sandbox, so this author-made visualization stands in for the paper's embedding figures.",
    0.6, 6.85, 12.1
  );
  s.addNotes(
    "Roads & Mozer (2019). Obtaining psychological embeddings through joint kernel and metric learning. Behavior Research Methods 51, 2180-2193. https://doi.org/10.3758/s13428-019-01285-3. Visualization from the authors' psiz repository documentation (Apache-2.0)."
  );
}

pres.writeFile({ fileName: "representational_spaces.pptx" }).then(() => console.log("written"));
