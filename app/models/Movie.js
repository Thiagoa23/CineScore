class Movie {
  constructor({ id, name, primaryGenre, otherGenres, rating, synopsis, imageUrl, releaseDate, director, actors, comments }) {
    this.id = id;
    this.name = name;
    this.primaryGenre = primaryGenre;    // Gênero principal
    this.otherGenres = otherGenres;      // Lista de outros gêneros
    this.rating = rating;
    this.synopsis = synopsis;
    this.imageUrl = imageUrl;
    this.releaseDate = releaseDate;
    this.director = director;
    this.actors = actors;
    this.comments = comments;
  }
}

export default Movie;
