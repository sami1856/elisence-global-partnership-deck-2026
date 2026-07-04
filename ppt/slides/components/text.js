const { THEME } = require("./theme");

function drawLeadText(slide, text, options = {}) {
  slide.addText(text, {
    x: options.x ?? 0.8,
    y: options.y ?? 1.12,
    w: options.w ?? 11.7,
    h: options.h ?? 0.55,
    fontFace: THEME.fonts.body,
    fontSize: options.fontSize ?? 16,
    color: options.color || THEME.colors.muted,
    fit: "shrink",
  });
}

function drawSmallLabel(slide, text, options = {}) {
  slide.addText(text, {
    x: options.x ?? 0.8,
    y: options.y ?? 0.3,
    w: options.w ?? 4,
    h: options.h ?? 0.25,
    fontFace: THEME.fonts.body,
    fontSize: options.fontSize ?? 8,
    color: options.color || THEME.colors.muted,
    bold: options.bold ?? false,
    fit: "shrink",
  });
}

module.exports = { drawLeadText, drawSmallLabel };