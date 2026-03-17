document.addEventListener("DOMContentLoaded", async () => {
  await document.fonts.ready;

  const initialActiveItem = document.querySelector(".accordion-item.active");

  if (initialActiveItem) {
    openItem(initialActiveItem);
    updateAccordionState();
  }
});

const accordion = document.querySelector(".accordion");
const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
  item.addEventListener("click", () => {

    const currentActiveItem = document.querySelector(".accordion-item.active");

    if (item === currentActiveItem) {
      closeItem(item);
      updateAccordionState();
      return;
    }

    if (currentActiveItem) {
      closeItem(currentActiveItem);

      setTimeout(() => {
        openItem(item);
        updateAccordionState();
      }, 500);
    } else {
      openItem(item);
      updateAccordionState();
    }
  });
});

function openItem(item) {

  const button = item.querySelector(".accordion-title");
  const title = item.querySelector(".project-title");
  const content = item.querySelector(".accordion-content");

  if (window.innerWidth > 700) {
    const containerWidth = button.offsetWidth;
    const textWidth = title.offsetWidth;
    const distance = containerWidth - textWidth;

    title.style.transform = `translateX(-${distance}px)`;
  }

  const height = content.scrollHeight;

  item.classList.add("active");
  content.style.height = height + "px";
}

function closeItem(item) {
  const title = item.querySelector(".project-title");
  const content = item.querySelector(".accordion-content");

  title.style.transform = "translateX(0)";
  content.style.height = "0px";

  item.classList.remove("active");
}

function updateAccordionState() {
  const activeItem = document.querySelector(".accordion-item.active");

  if (activeItem) {
    accordion.classList.add("has-active");
  } else {
    accordion.classList.remove("has-active");
  }
}

const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");
const sections = ["about", "experience", "projects", "contact"];

let currentSection = null;

nav.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return;

  const targetId = link.dataset.target;
  if (!targetId) return;

  navLinks.forEach(l => l.classList.remove("active"));
  link.classList.add("active");

  currentSection = targetId;

  if (targetId === "about") {
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

  });
}, {
  threshold: 0.6
});


sections.forEach(id => {
  const section = document.getElementById(id);
  if (section) observer.observe(section);
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 700) {
    document.querySelectorAll(".project-title").forEach(title => {
      title.style.transform = "translateX(0)";
    });
  }
});

const sentinels = document.querySelectorAll(".heading-sentinel");

sentinels.forEach((sentinel) => {
  const heading = sentinel.nextElementSibling;

  const observer = new IntersectionObserver(
    ([entry]) => {
      heading.classList.toggle("stuck", !entry.isIntersecting);
    },
    { threshold: 0 }
  );

  observer.observe(sentinel);
});
