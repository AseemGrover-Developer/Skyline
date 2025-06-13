document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");
  const form = document.querySelector(".contact form");

  // Toggle menu on mobile
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInsideMenu = navLinks.contains(event.target);
    const isClickOnToggle = toggleBtn.contains(event.target);
    if (!isClickInsideMenu && !isClickOnToggle) {
      navLinks.classList.remove("active");
    }
  });

  // Close menu when clicking any nav link
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // ✅ Desktop only: Close menu on mouseleave
  navLinks.addEventListener("mouseleave", () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("active");
    }
  });

  // Form submit - show popup
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload
    popup.style.display = "flex";
    form.reset();
  });

  // Close popup
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });
});

