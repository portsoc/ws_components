import { BetterThing } from "./betterthing.js";

export class EvenBetterThing extends BetterThing {

  get person() {
    return this.nonsense;
  }

  set person(name) {
    this.nonsense = name;
  }

}
