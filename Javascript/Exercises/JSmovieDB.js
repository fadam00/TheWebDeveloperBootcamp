movies = [
	{title: "Terminator 3",
	rating: 4,
	haveWatched: false},

	{title: "Moana",
	rating: 5,
	haveWatched: true},

	{title: "American Gangster",
	rating: 3.5,
	haveWatched: false}
]

movies.forEach(function(movie){
	if(movie.haveWatched === true){
		console.log("You have seen " + movie.title + " - " + movie.rating + " stars.");

	} else if(movie.haveWatched === false){
		console.log("You have not seen " + movie.title + " - " + movie.rating + " stars.")
	};
});