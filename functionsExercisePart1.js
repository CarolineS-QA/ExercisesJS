const movies = [{
    "title": "Jaws",
    "director": "Steven Spielberg",
    "year": "1975"
},
{
    "title": "Star Wars",
    "director": "George Lucas",
    "year": "1977"
},
{
    "title": "Avengers: Infinity War",
    "director": "Anthony and Joe Russo",
    "year": "2018"
},
{
    "title": "Top Gun",
    "director": "Tony Scott",
    "year": "1986"
},
{
    "title": "Justice League",
    "director": "Zack Snyder",
    "year": "2017"
}
];
// Don’t edit the code above this comment 
// Part 1

function findMovies(movieTitle) {
    for (let i of movies) {
        if (movieTitle == i.title){
            console.log(`This movie ${i.title} was directed by ${i.director} in year ${i.year}.`);
        } else {
            console.log(`${movieTitle} wasn't found.`);
        }
        // console.log(i);
    }
    // console.log(i); // this is out of scope, throwing an error
}

let findStarWars = findMovies("Star Wars");
// part 6.
// console.log(movie); // this should throw an error! // same for part 7 // undefined for part 10 due to hoisting
// console.log(findStarWars); // undefined

//part 7.
let movie = "Thor: Ragnorok"
//part 10.
//var movie = "Thor: Ragnorok"

//part 8.
// console.log(movie);

// part 12.
findMovies(movie);

