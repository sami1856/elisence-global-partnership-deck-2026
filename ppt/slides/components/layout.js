function gridPosition(index, options = {}) {
  const cols = options.cols ?? 3;
  const startX = options.startX ?? 0.8;
  const startY = options.startY ?? 2.75;
  const gapX = options.gapX ?? 4.0;
  const gapY = options.gapY ?? 1.5;

  const col = index % cols;
  const row = Math.floor(index / cols);

  return {
    x: startX + col * gapX,
    y: startY + row * gapY,
  };
}

module.exports = { gridPosition };