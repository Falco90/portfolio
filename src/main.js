import './style.css';

import { animate, splitText, stagger } from 'animejs';

splitText('h1', {
  lines: { wrap: 'clip' },
})
  .addEffect(({ lines }) => animate(lines, {
    y: [
      { to: ['100%', '0%'] },
    ],
    duration: 750,
    ease: 'out(3)',
    delay: stagger(200),
  }));

const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
  const button = item.querySelector(".accordion-title");
  button.addEventListener("click", () => {

    const currentActiveItem = document.querySelector(".accordion-item.active");

    if (item == currentActiveItem) {
      closeItem(item);
      return;
    }

    if (currentActiveItem) {
      closeItem(currentActiveItem);

      setTimeout(() => {
        openItem(item);
      }, 500);
    } else {
      openItem(item);
    }
  });
});

function openItem(item) {
  const button = item.querySelector(".accordion-title");
  const title = item.querySelector(".project-title");
  const content = item.querySelector(".accordion-content");

  const containerWidth = button.offsetWidth;
  const textWidth = item.querySelector(".project-title").offsetWidth;
  const distance = containerWidth - textWidth;

  title.style.transform = `translateX(-${distance}px)`;
  content.style.height = content.scrollHeight + "px";
  item.classList.add("active");
}

function closeItem(item) {
  const title = item.querySelector(".project-title");
  const content = item.querySelector(".accordion-content");

  title.style.transform = "translateX(0)";
  content.style.height = "0px";
  item.classList.remove("active");
}

document.getElementById("nav").addEventListener("click", (e) => {
  console.log("clicked");
  const link = e.target.closest("a");

  if (!link) return;

  const targetId = link.dataset.target;
  if (!targetId) return;

  if (targetId == "about") {
    document.getElementById("main").scrollTo({
      top: 0,
      behavior: "smooth"
    });
  } else {
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth"
    });
  }
});


const sections = ["about", "experience", "projects", "contact"];
const navLinks = document.querySelectorAll("#nav a");

let currentSection = null;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const id = entry.target.id;
    if (id === currentSection) return;

    currentSection = id;

    navLinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.dataset.target === id
      );
    });

    animateBloom(id);
  });
}, {
  threshold: 0.6
});

// Observe each section
sections.forEach(id => {
  const section = document.getElementById(id);
  if (section) observer.observe(section);
});
