
const text = "Ansu Shrestha";
const typingSpan = document.querySelector('.typing');
let idx = 0;
let isDeleting = false;
function type() {
  if (!isDeleting && idx <= text.length) {
    typingSpan.textContent = text.slice(0, idx);
    idx++;
    if (idx > text.length) {
      setTimeout(() => { isDeleting = true; type(); }, 1200);
      return;
    }
    setTimeout(type, 150);
  } else if (isDeleting && idx >= 0) {
    typingSpan.textContent = text.slice(0, idx);
    idx--;
    if (idx < 0) {
      isDeleting = false;
      setTimeout(type, 500);
      return;
    }
    setTimeout(type, 80);
  }
}
type();
