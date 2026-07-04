const { THEME } = require("./theme");

function drawCard(pptx, slide, item) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x: item.x,
    y: item.y,
    w: item.w,
    h: item.h,
    fill: { color: item.fill || THEME.colors.card, transparency: item.transparency ?? 4 },
    line: { color: item.line || THEME.colors.line, transparency: 8, width: 1 },
    radius: item.radius || 0.16,
  });

  if (item.icon) {
    slide.addText(item.icon, {
      x: item.x + 0.18,
      y: item.y + 0.14,
      w: 0.45,
      h: 0.28,
      fontFace: THEME.fonts.title,
      fontSize: 13,
      bold: true,
      color: item.iconColor || THEME.colors.cyan,
      fit: "shrink",
    });
  }

  slide.addText(item.title, {
    x: item.x + (item.icon ? 0.68 : 0.22),
    y: item.y + 0.13,
    w: item.w - (item.icon ? 0.9 : 0.44),
    h: 0.32,
    fontFace: THEME.fonts.title,
    fontSize: item.titleSize || 13,
    bold: true,
    color: item.titleColor || THEME.colors.white,
    fit: "shrink",
  });

  if (item.body) {
    slide.addText(item.body, {
      x: item.x + 0.22,
      y: item.y + 0.52,
      w: item.w - 0.44,
      h: item.h - 0.62,
      fontFace: THEME.fonts.body,
      fontSize: item.bodySize || 8.2,
      color: item.bodyColor || THEME.colors.muted,
      fit: "shrink",
    });
  }
}

module.exports = { drawCard };