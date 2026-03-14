
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
function openModal() {
  document.getElementById("mealModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("mealModal").style.display = "none";
}

function openSecureModal() {
  document.getElementById("secureModal").style.display = "flex";
}

function closeSecureModal() {
  document.getElementById("secureModal").style.display = "none";
}

function openAIModal() {
  document.getElementById("aiModal").style.display = "flex";
}

function closeAIModal() {
  document.getElementById("aiModal").style.display = "none";
}

function openCancerModal() {
  document.getElementById("cancerModal").style.display = "flex";
}

function closeCancerModal() {
  document.getElementById("cancerModal").style.display = "none";
}