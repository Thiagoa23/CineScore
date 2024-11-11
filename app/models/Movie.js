class Movie {
  constructor(id, title, primaryGenre, genres, rating, synopsis, imageUrl, releaseDate, director, actors) {
    this.id = id;
    this.title = title;
    this.primaryGenre = primaryGenre;    // Gênero principal do filme
    this.genres = genres;                // Lista de outros gêneros associados
    this.rating = rating;
    this.synopsis = synopsis;
    this.imageUrl = imageUrl;
    this.releaseDate = releaseDate;
    this.director = director;
    this.actors = actors;
  }
}

export default Movie;
