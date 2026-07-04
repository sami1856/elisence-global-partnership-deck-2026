const path = require("path");
const { drawFooter } = require("../components/footer");

function createCoverSlide(pptx) {
  const slide = pptx.addSlide();

  const coverImage = path.join(
    __dirname,
    "..",
    "..",
    "WhatsApp Image 2026-07-03 at 3.50.06 PM.jpeg"
  );

  slide.addImage({
    path: coverImage,
    x: 0,
    y: 0,
    w: 13.333,
    h: 7.5,
  });

  drawFooter(slide, "Elisence Global Partnership Deck • 2026");

  slide.addNotes(`
Slide 01 — Cover

Purpose:
Open the deck with a premium global partnership message.

Core Message:
Elisence is building the future of connected digital health and inviting strategic partners to help shape that future.

Tone:
Global, premium, confident, partnership-first.
`);
}

module.exports = { createCoverSlide };