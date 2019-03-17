import { BasicThing } from "./basicthing.js";

export class BetterThing extends BasicThing {

    constructor(stuff, nonsense, other) {
        super(stuff, nonsense);
        this.other = other;
    }


    toString() {
        return `${this.other} ${super.toString()}`;
    }
}
