const { THEME } = require("./theme");

function drawBackground(pptx, slide) {
  slide.background = {
    color: THEME.colors.deepNavy,
  };
}

module.exports = { drawBackground };
