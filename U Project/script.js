document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  // Toggle menu on click
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

  // Optional: close menu when any nav link is clicked
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});
