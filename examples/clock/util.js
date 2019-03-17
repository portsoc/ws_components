export function e(parent, name, attrs = {}) {
    const e = document.createElement(name);
    Object.entries(attrs).forEach( ([a, b]) => e.setAttribute(a, b) );
    parent.appendChild(e);
    return e;
}
