function safeText(value) {
  return String(value || "").trim();
}

module.exports = { safeText };
