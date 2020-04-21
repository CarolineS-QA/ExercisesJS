let quote = ["I","am","your","friend"];
let yourIndex = quote.findIndex(function (element){
    return element == "your";
});
console.log("Index at: " + yourIndex);

quote.pop(); //removes friend
quote.push("father"); //adds father!

console.log(quote);

quote.unshift("Luke"); //adds Luke
console.log(quote);

let wrongWord = "Luke";
lukeIsHere = quote.find(function (element){
    return wrongWord;
});
// instead of if statements use mapping in the find.(function)

if (lukeIsHere == wrongWord) {
    lukeIsHere = true;
} else {
    lukeIsHere = false;
}

// console.log("LukeIsHere is: " + lukeIsHere);
let lukeIsAt;

if (lukeIsHere == true){
    lukeIsAt = quote.findIndex(function (element){
    return element == wrongWord;
    })
    quote[lukeIsAt] = "No";
}

// let myOutput = quote.join(" ") + "!";
// console.log(myOutput);

let output = "";
//solution
for (let i = 0, j = quote.length; i < j; i++) {
    if (i === j - 1) {
        output += quote[i] + '!';
    } else if (quote[i] === 'No') {
        output += quote[i] + ', ';
    } else {
        output += quote[i] + ' '
    }
}

// for (let i = 0; i < quote.length; i++){
//     if (i == quote.length) {
//         output += quote[i] + "!"
//     } if (quote[i] === "No") {
//         output += quote[i] + ", "
//     } else {
//         output += quote[i] + " "
//     }

// }

console.log(output);
