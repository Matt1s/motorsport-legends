function animatePrice(elementId, finalValue, duration = 2000) {
  const element = document.getElementById(elementId);
  const startValue = 0;
  const startTime = Date.now();

  function update() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const currentValue = startValue + (finalValue - startValue) * progress;
    element.textContent = currentValue.toFixed(2) + ' Kč';

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  update();
}

// Start animations on page load
window.addEventListener('load', () => {
  animatePrice('goldPrice', 45572.75, 2000, 45252.31);
  animatePrice('silverPrice', 517.83, 2000, 523.98);
});

function animatePrice(elementId, finalValue, duration = 2000, startValue = 0) {
  const element = document.getElementById(elementId);
  const startTime = Date.now();

  function update() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const currentValue = startValue + (finalValue - startValue) * progress;
    element.textContent = currentValue.toFixed(2) + ' Kč';

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  update();
}