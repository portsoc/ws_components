import { e } from './util.js';

export class Clock extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({
      mode: 'open',
    });

    e(shadow, 'link', {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'clock/clock.css',
    });

    const p = e(shadow, 'span');

    window.setInterval(() => {
      p.textContent = new Date().toLocaleTimeString();
    }, 1000);
  }
}

customElements.define('my-clock', Clock);
