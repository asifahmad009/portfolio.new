window.addEventListener("scroll", () => {
  document.querySelectorAll(".section").forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight * 0.8) {
          section.style.opacity = 1;
          section.style.transform = "translateY(0)";
      }
  });
});

console.log("Welcome to Asif Ahmad's immersive portfolio!");
// JavaScript for showing/hiding form on scroll
let lastScrollY = window.scrollY;
const form = document.getElementById("corner-form");

window.addEventListener("scroll", () => {
    // Check if the user has scrolled down
    if (window.scrollY > lastScrollY) {
        form.style.opacity = "0"; // Hide the form when scrolling down
    } else {
        form.style.opacity = "1"; // Show the form when scrolling up
    }
    // Update the last scroll position
    lastScrollY = window.scrollY;
});
// JavaScript to fade out the page on scroll
window.addEventListener("scroll", () => {
  // Set the scroll threshold where opacity should be 0 (e.g., when reaching the bottom)
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  // Calculate opacity based on scroll position
  let opacity = 1 - window.scrollY / maxScroll;

  // Set minimum opacity to prevent complete invisibility if needed
  opacity = Math.max(opacity, 0.8); // You can adjust to a minimum like 0.1 for visibility

  // Apply the calculated opacity to the body
  document.body.style.opacity = opacity;
});
// JavaScript for hiding and showing sections on scroll
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const header = document.getElementById("header-section");
  const about = document.getElementById("about-section");
  const skills = document.getElementById("skills-section");
  const projects = document.getElementById("projects-section");

  // Define scroll threshold for when sections should hide
  const hideThreshold = 200; // Adjust based on your layout

  // Hide header, about, and skills sections when scrolled past threshold
  if (scrollY > hideThreshold) {
      
     
  } else {
   
   
  }

  // Trigger zoom-in effect for projects section when scrolled near its position
  const projectsTop = projects.getBoundingClientRect().top + window.scrollY;
  if (scrollY > projectsTop - window.innerHeight + 100) { // Adjust for desired trigger point
      projects.classList.add("visible");
  }
});
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      card.style.transform = `rotateY(${x * 10}deg) rotateX(${y * -10}deg)`;
  });
  card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
});
window.addEventListener("scroll", () => {
  document.querySelectorAll(".section-background").forEach((bg, index) => {
      const speed = 0.2 + index * 0.05;
      bg.style.transform = `translateY(${window.scrollY * speed}px)`;
  });
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add("visible");
      } else {
          entry.target.classList.remove("visible");
      }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-in").forEach((element) => {
  observer.observe(element);
});
const typingText = document.getElementById("typing-text");
const text = "Contact me for work;)";
let index = 0;

function type() {
    typingText.innerHTML = text.slice(0, index);
    index++;
    if (index <= text.length) {
        setTimeout(type, 100);
    }
}

type();
let angle = 0;
const carousel = document.querySelector(".carousel");

setInterval(() => {
    angle += 45; // Adjust rotation angle as needed
    carousel.style.transform = `rotateY(${angle}deg)`;
}, 2000); // Adjust rotation speed as needed
// Optional: Pause slide animation on hover
const toolContainer = document.querySelector('.tool-container');

toolContainer.addEventListener('mouseenter', () => {
    toolContainer.style.animationPlayState = 'paused';
});

toolContainer.addEventListener('mouseleave', () => {
    toolContainer.style.animationPlayState = 'running';
});
window.addEventListener("scroll", () => {
    const educationItems = document.querySelectorAll(".education-item");

    educationItems.forEach(item => {
        const img = item.querySelector(".scroll-image");
        const rect = item.getBoundingClientRect();

        // Calculate position for parallax effect
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            img.style.transform = `scale(1.2) translateY(-${rect.top * 0.1}px)`;
            img.style.opacity = 1;
        } else {
            img.style.transform = `scale(1.1)`;
            img.style.opacity = 0.7;
        }
    });
});
