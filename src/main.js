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

document.getElementById("nav").addEventListener("click", (e) => {
  console.log("clicked");
  const link = e.target.closest("a");

  if (!link) return;

  const targetId = link.dataset.target;
  if (!targetId) return;

  if (targetId == "about") {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  } else {
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth"
    });
  }
});
