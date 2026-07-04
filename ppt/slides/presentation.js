const pptxgen = require("pptxgenjs");

function createPresentation() {
  const pptx = new pptxgen();

  pptx.layout = "LAYOUT_WIDE";

  pptx.author = "Elisence";
  pptx.company = "Elisence Ltd";
  pptx.subject = "Elisence Global Partnership Deck 2026";
  pptx.title = "Elisence Global Partnership Deck 2026";
  pptx.lang = "en-GB";

  pptx.theme = {
    headFontFace: "Aptos Display",
    bodyFontFace: "Aptos",
    lang: "en-GB",
  };

  pptx.defineLayout({
    name: "ELISENCE_WIDE",
    width: 13.333,
    height: 7.5,
  });

  pptx.layout = "ELISENCE_WIDE";

  return pptx;
}

module.exports = { createPresentation };