// =====================================================
// BUAN - main.js v1.0
// =====================================================

// Uppdaterar årtal automatiskt om ett element med id="year" finns
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Mjuk scroll för interna länkar
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// Fade-in animation
const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("visible");

    }

  });

}, {

  threshold:0.15

});

document.querySelectorAll("section").forEach(section => {

  section.classList.add("fade-section");

  observer.observe(section);

});
