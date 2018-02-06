class Thing {

    constructor(stuff, nonsense) {
        this.stuff = stuff;
        this.nonsense = nonsense;
    }

    groovy() {
      console.log("groovy");
    }

    toString() {
        return `${this.stuff} ${this.nonsense}`;
    }

}

class BetterThing extends Thing {


    constructor(stuff, nonsense, other) {
        super(stuff, nonsense);
        this.other = other;
    }


    toString() {
        return `${this.other} ${super.toString()}`;
    }


}


// Create an object
const myThing = new BetterThing("Rich", "Jacek", "Matt");

// Log it, concatenating it to a string so its toString methdo is invoked.
console.log( "" + myThing );

// invoke a method from the parent class
myThing.groovy();

// check its type
console.log( typeof myThing );

// export the subclass for use elsewhere
module.exports = BetterThing;
