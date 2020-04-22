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
    for (let movie of movies) {
        if (movieTitle == movie.title){
            console.log(`This movie ${movie.title} was directed by ${movie.director} in year ${movie.year}.`);
        } else {
            console.log(`${movieTitle} wasn't found.`);
        }
        console.log(movie);
    }
}

let findStarWars = findMovies("Star Wars");
// part 6.
// console.log(movie); // this should throw an error! // same for part 7 // undifined for part 10
// console.log(findStarWars); // undefined

//part 7.
let movie = "Thor: Ragnorok"
//part 10.
//var movie = "Thor: Ragnorok"
//part 8.
console.log(movie);


