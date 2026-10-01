// Smooth reveal animations
const revealItems = document.querySelectorAll(".story-card, .intro, .closing");

revealItems.forEach(item => item.classList.add("reveal"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealItems.forEach(item => observer.observe(item));

// Soft falling petals
const petals = document.querySelector(".petals");

function createPetal() {
  const petal = document.createElement("span");
  petal.className = "petal";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.setProperty("--drift", (Math.random() * 180 - 90) + "px");
  petal.style.animationDuration = (7 + Math.random() * 7) + "s";
  petal.style.opacity = (0.25 + Math.random() * 0.4).toFixed(2);
  petals.appendChild(petal);

  setTimeout(() => petal.remove(), 15000);
}

setInterval(createPetal, 900);
