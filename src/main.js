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
