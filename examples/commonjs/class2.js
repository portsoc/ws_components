const BetterThing = require("./class1.js");

class EvenBetterThing extends BetterThing {

    get person() {
      return this.nonsense;
    }

    set person(name) {
      this.nonsense = name;
    }


}

const myThing = new EvenBetterThing("Rich", "Jacek", "Matt");

console.log( "" + myThing );

console.log( myThing.person );

myThing.person = "Elvis";

console.log( "" + myThing );
