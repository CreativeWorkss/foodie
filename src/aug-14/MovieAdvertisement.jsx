import React from "react";
import "./MovieAdvertisement.css";

function MovieAdvertisement() {
  // Change this URL to your Movie React application URL
  const movieWebsite = "http://localhost:5174";

  const movies = [
    {
      id: 1,
      title: "Mission Impossible",
      genre: "Action, Thriller",
      poster: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
      movieUrl: "http://localhost:5174/movie/1",
    },

    {
      id: 2,
      title: "Kantara",
      genre: "Drama, Thriller",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/84/Kantara_poster.jpeg",
      movieUrl: "http://localhost:5174/movie/2",
    },

    {
      id: 3,
      title: "Interstellar",
      genre: "Sci-Fi, Adventure",
      poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      movieUrl: "http://localhost:5174/movie/3",
    },
  ];

  const openMovieWebsite = () => {
    window.open(movieWebsite, "_blank");
  };

  const openMovie = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="movie-ad">
      {/* Top Section */}

      <div className="movie-ad-top">
        <div className="movie-icons">
          <span>🎬</span>
          <span>🍿</span>
        </div>

        <h1>MOVIE</h1>

        <h2>with</h2>

        <h1>DINNER</h1>

        <div className="perfect-night">THE PERFECT NIGHT!</div>

        <p className="movie-description">
          Enjoy a movie & delicious dinner together.
        </p>
      </div>

      {/* Food Section */}

      <div className="movie-food">
        <span className="food-emoji">🥤</span>

        <span className="food-emoji big">🍿</span>

        <span className="food-emoji">🍔</span>

        <span className="food-emoji">🍟</span>
      </div>

      {/* Main Booking Button */}

      <button className="book-ticket-btn" onClick={openMovieWebsite}>
        🎟 BOOK TICKETS NOW
      </button>

      {/* Benefits */}

      <div className="movie-benefits">
        <div>
          <span>🎬</span>
          <p>Great Movies</p>
        </div>

        <div>
          <span>🍴</span>
          <p>Tasty Food</p>
        </div>

        <div>
          <span>🎟</span>
          <p>Easy Booking</p>
        </div>
      </div>

      {/* Now Playing */}

      <div className="now-playing">
        <span></span>

        <h3>NOW PLAYING</h3>

        <span></span>
      </div>

      {/* Movie List */}

      <div className="movie-list">
        {movies.map((movie) => {
          return (
            <div className="movie-item" key={movie.id}>
              <img
                className="movie-poster"
                src={movie.poster}
                alt={movie.title}
              />

              <h4>{movie.title}</h4>

              <p>{movie.genre}</p>

              <button onClick={() => openMovie(movie.movieUrl)}>
                BOOK NOW
              </button>
            </div>
          );
        })}
      </div>

      {/* Footer */}

      <div className="movie-ad-footer" onClick={openMovieWebsite}>
        <span>🎬</span>

        <div>
          <p>Book your tickets on</p>

          <strong>My Movie App</strong>
        </div>

        <span>→</span>
      </div>
    </div>
  );
}

export default MovieAdvertisement;
