export class BasicThing {
  constructor(stuff, nonsense) {
    this.stuff = stuff;
    this.nonsense = nonsense;
  }

  groovy() {
    console.log('groovy');
  }

  toString() {
    return `${this.stuff} ${this.nonsense}`;
  }
}
