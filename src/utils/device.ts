export const isTouchDevice =
  navigator.maxTouchPoints > 0 || "ontouchstart" in window;
