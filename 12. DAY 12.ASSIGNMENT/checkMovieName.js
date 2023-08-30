function searchMovie() {
  let movies = ["RRR", "KGF", "ROBOT", "URI"];

  let findYourMovie = "URIa";

  let foundTheMovie = false;
  let item;
  for (var i = 0; i < movies.length; i++) {
    item = movies[i];
    if (findYourMovie == item) {
      foundTheMovie = true;
    }
  }

  if (foundTheMovie == true) {
    console.log("your movie is available");
  } else {
    console.log("error no movies found !");
  }
}
searchMovie();
