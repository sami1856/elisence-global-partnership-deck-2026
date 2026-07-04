const { THEME } = require("./theme");

function drawHeader(slide, title) {
  slide.addText(title, {
    x: 0.8,
    y: 0.45,
    w: 8.8,
    h: 0.5,
    fontFace: THEME.fonts.title,
    fontSize: THEME.text.title,
    color: THEME.colors.white,
    bold: true,
  });
}

module.exports = { drawHeader };
