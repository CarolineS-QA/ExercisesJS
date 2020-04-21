// part 1.
let darthVader = {allegiance: "Empire", weapon: "Red lightsaber", sith: true}

// part 2.
console.log(darthVader.allegiance);
console.log(darthVader.weapon);
console.log(darthVader.sith);
console.log(darthVader.jedi);
console.log(darthVader.length); // length? number of properties

// part 3.

let darthVaderChildren = {children: 2, childNames: ['Luke', 'Leia']}
Object.assign(darthVader, darthVaderChildren)
console.log("Number of children: " + darthVader.children, "\nFirst: " + darthVader.childNames[0]);

// part 4.
console.log("\nDarth Vader's properties");
for (let key in darthVader) {
    console.log(key + ": " + darthVader[key]);
}

console.log("--------");

//part 5.
darthVader.allegiance = "The light side";
console.log("\n Darth Vader's allegience has been changed.");
console.log(darthVader);

delete darthVader.children;
console.log("\n Number of children have been deleted.");
console.log(darthVader);

console.log("\n Deconstruction");
let {allegiance, weapon, sith, childNames} = darthVader;
console.log(allegiance);
console.log(weapon);
console.log(sith);
console.log(childNames);

console.log("\n Darth Vader object cleared.");
darthVader = {};
console.log(darthVader);