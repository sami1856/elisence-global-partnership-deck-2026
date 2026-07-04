const { THEME } = require("./theme");

function drawFooter(slide, text = "Elisence • Confidential") {
  slide.addText(text, {
    x: 0.8,
    y: 7.0,
    w: 11.5,
    h: 0.3,
    fontFace: THEME.fonts.body,
    fontSize: THEME.text.small,
    color: THEME.colors.muted,
    align: "left",
  });
}

module.exports = { drawFooter };
