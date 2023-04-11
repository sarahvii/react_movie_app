import React, {useState} from "react";
import MovieList from "../components/MovieList";
import MovieLink from "../components/MovieLink";
import MovieAddForm from "../components/MovieAddForm";

const MovieBox = () => {

    const[movies, setMovies] = useState(
        [
            {
                id: 1,
                title: "Spider-Man: Into the Spider-Verse"
            },
            {
                id: 2,
                title: "Life Itself"
            },
            {
                id: 3,
                title: "Mary Queen of Scots"
            },
            {
                id: 4,
                title: "The Lego Movie 2: The Second Part"
            },
            {
                id: 5,
                title: "Captain Marvel"
            }
        ]
    )

    const addMovie = (submittedMovie) => {
        submittedMovie.id = Date.now();
        const updatedMovies = [...movies, submittedMovie];
        setMovies(updatedMovies);
    }


                return (
                    <div class="movie-header">
                    <>
                        <h1>Upcoming Film Releases for UK</h1>
                        <MovieList movies={movies} />

                        <h2>Add a film:</h2>
                        <MovieAddForm className="form" onAddMovieSubmit={(movie) => addMovie(movie)}/>

                        <MovieLink />
                    </>
                    </div>
                );
}

export default MovieBox;