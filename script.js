// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Check for saved theme or prefered scheme
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark" || (!currentTheme && prefersDarkScheme.matches)) {
  document.body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const theme = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";
  localStorage.setItem("theme", theme);
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const navLinks = document.querySelector(".nav-links");

mobileMenuToggle.addEventListener("click", () => {
  mobileMenuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Scroll Progress Indicator
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {
  const windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  progressBar.style.width = scrolled + "%";
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Active Navigation Link
const sections = document.querySelectorAll("section");
const navLinksElements = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinksElements.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

// Form Submission
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");
const submitBtn = document.getElementById("submitBtn");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Show loading state
  submitBtn.classList.add("btn-loading");
  submitBtn.disabled = true;

  // Simulate form submission
  setTimeout(() => {
    // Reset form
    contactForm.reset();

    // Show success message
    formSuccess.style.display = "block";

    // Reset button
    submitBtn.classList.remove("btn-loading");
    submitBtn.disabled = false;

    // Hide success message after 5 seconds
    setTimeout(() => {
      formSuccess.style.display = "none";
    }, 5000);
  }, 1500);
});

// Work Item Click Animation
document.querySelectorAll(".work-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    // Prevent default if it's a placeholder link
    if (item.getAttribute("href") === "#") {
      e.preventDefault();

      // Add click animation
      item.style.transform = "scale(0.98)";

      setTimeout(() => {
        item.style.transform = "";
      }, 200);

      // Show a message (in a real site this would navigate)
      alert(
        "In a real implementation, this would navigate to a detailed case study page.",
      );
    }
  });
});

// Lazy Loading for Images (if added in the future)
const images = document.querySelectorAll("img");

if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Reduced Motion Preference
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (reduceMotion.matches) {
  document.documentElement.style.setProperty("--animation-speed", "0.01ms");
}

// Initialize animations on page load
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
