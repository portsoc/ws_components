class Melt extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.totalMoved=0;
    if (!this.hasAttribute('jiggle')) this.jiggle = this.noJiggle;
    this.blend = this.hasAttribute('blend');
    this.src = this.getAttribute('src') || false;

    this.stepBound = this.step.bind(this);

    // create shadow dom and a canvas and attach the two together
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext("2d");
    this.shadow = this.attachShadow({
      mode: 'open'
    });
    this.shadow.appendChild(this.canvas);


    if (this.src) {
      console.log(this.src);
      let img = new Image();
      let obj = this;

      //drawing of the test image - img1
      img.onload = function() {
        console.log("LOADED" + img);
        // nb 'this' here is the image, so we need obj bounf to this previously
        obj.canvas.setAttribute("width", this.width);
        obj.canvas.setAttribute("height", this.height);
        obj.ctx.drawImage(this, 0, 0, this.width, this.height);
        obj.w = this.width;
        obj.h = this.height;
        console.log(obj);
        window.requestAnimationFrame(obj.stepBound);
      }
      img.src = this.src;
    } else {
      this.w = this.getAttribute('width') || 300;
      this.h = this.getAttribute('height') || 300;
      this.drawBalls();
      window.requestAnimationFrame(this.stepBound);
    }
  }

  drawBalls() {
    this.ctx.globalAlpha = 1;
    this.canvas.setAttribute("width", this.w);
    this.canvas.setAttribute("height", this.h);

    for (let i = 0; i < 100; i++) {
      this.circle(
        Math.random() * this.w,
        Math.random() * this.h,
        Math.random() * this.w / 10,
        this.randomColour()
      );
    }
  }

  xyToArr(x, y) {
    return (y * this.w + x) * 4;
  }

  jiggle(x) {
    const shiftProbability = 1/8;
    const r = Math.random();
    if (r < shiftProbability && x > 0) x -= 1;
    if (r >= 1 - shiftProbability && x < this.w - 1) x += 1;
    return x;
  }

  noJiggle(x) {
    return x;
  }

  randomByte() {
    return Math.floor(255 * Math.random());
  }

  randomColour() {
    return `rgb(${this.randomByte()},${this.randomByte()},${this.randomByte()})`;
  }

  circle(x, y, r, col) {
    x += 0.5;
    y += 0.5;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.arc(x, y, r, 0, 2 * Math.PI);
    this.ctx.closePath;
    this.ctx.fillStyle = col;
    this.ctx.fill();
  }

  setcols(x, y, cols) {
    const red = y * (w * 4) + x * 4;
    return [red, red + 1, red + 2, red + 3];
  }

  swapPixels(data, a, b) {
    const tmp = [
      data.data[b],
      data.data[b + 1],
      data.data[b + 2],
      data.data[b + 3],
    ];
    data.data[b] = data.data[a];
    data.data[b + 1] = data.data[a + 1];
    data.data[b + 2] = data.data[a + 2];
    data.data[b + 3] = data.data[a + 3];
    data.data[a] = tmp[0];
    data.data[a + 1] = tmp[1];
    data.data[a + 2] = tmp[2];
    data.data[a + 3] = tmp[3];
  }

  nudge(data, a, b) {
    if (data.data[a] > data.data[b]) {
      data.data[a]--;
      data.data[b]++;
    }
  }

  mergePixels(data, a, b) {
    this.nudge(data, a, b);
    this.nudge(data, a+1, b+1);
    this.nudge(data, a+2, b+2);
    this.nudge(data, a+3, b+3);
  }


  step(timestamp) {
    let data = this.ctx.getImageData(0, 0, this.w, this.h);
    let moved = 0;

    // loop from the bottom to the top
    // moving the upper pixel down if it is
    // non transparent and the pixel below is transparent.
    for (let y = this.h-2; y >= 0; y--) {
      for (let x = this.w-1; x >= 0; x--) {
        const above = this.xyToArr(x, y);
        const below = this.xyToArr(this.jiggle(x), y+1);
        if (data.data[below + 3] == 0 && data.data[above + 3] != 0) {
          moved++;
          this.swapPixels(data, above, below)
        }
        if (this.blend) {
          this.mergePixels(data, above, below)
        }
      }
    }
    if (moved > 0) {
      this.ctx.putImageData(data, 0, 0, 0, 0, this.w, this.h);
      window.requestAnimationFrame(this.stepBound);
      this.totalMoved += moved;
    } else {
      console.log(`Image collapsed after ${this.totalMoved} moves.`)
    }
  }


}

customElements.define('img-melt', Melt);
