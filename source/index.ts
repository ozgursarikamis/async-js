import { doThing, Options, Person } from "./typescript/export-types";

console.log("index.ts");
document.getElementById("main").innerHTML = "typescript 3.8";

const options: Options = { name: "Özgür"};
doThing(options)

let jeremy = new Person("Jeremy Bearimy");
jeremy.greet();

// console.log('jeremy.#name', jeremy.#name);
// Property '#name' is not accessible 
// outside class 'Person' because it has a private identifier.ts(18013)