export class Clock extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'closed' });

    const e = document.createElement('link');
    e.setAttribute('rel', 'stylesheet');
    e.setAttribute('type', 'text/css');
    e.setAttribute('href', 'clock/clock.css');

    const p = document.createElement('span');

    shadow.append(e, p);

    window.setInterval(() => {
      p.textContent = new Date().toLocaleTimeString();
    }, 1000);
  }
}

customElements.define('my-clock', Clock);
