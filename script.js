console.log("Script loaded");
const rewatchText = document.getElementById('rewatchText');
// We assume the hero section is 100vh tall
const heroHeight = window.innerHeight;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  console.log("Scroll event fired, scrollY:", scrollY);
  
  // Calculate progress from 0 (top) to 1 (after scrolling 100vh)
  const progress = Math.min(scrollY / heroHeight, 1);
  console.log("Progress:", progress);
  
  // Interpolate left value:
  // progress = 0 → left = 50% (center)
  // progress = 1 → left = 25% (center of left half)
  const newLeft = 50 - (25 * progress);
  console.log("newLeft:", newLeft);
  
  // Update the element's left property
  rewatchText.style.left = newLeft + '%';
});
