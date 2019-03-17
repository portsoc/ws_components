import { BasicThing } from "./basicthing.js";
import { BetterThing } from "./betterthing.js";
import { EvenBetterThing } from "./evenbetterthing.js";

// Create an object
const basic = new BasicThing("Portsmouth", "Caen");
const better = new BetterThing("One", "Two", "Three");
const evenbetter = new EvenBetterThing("Harambe", "Doge", "Bill");

// Log it, concatenating it to a string so its toString methdo is invoked.
console.log( "" + basic );

// invoke a method from a parent class
better.groovy();

// check its type
console.log( typeof basic );
console.log( typeof better );
console.log( typeof evenbetter );

console.log( evenbetter.person );

evenbetter.person = "Elvis";

console.log( evenbetter.person );
