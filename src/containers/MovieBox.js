import React, {useState} from "react";
import MovieList from "../components/MovieList";
import MovieLink from "../components/MovieLink";

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

                return (
                    <>
                        <h1>Upcoming Film Releases for UK</h1>
                        <MovieList movies={movies} />
                        <MovieLink />
                    </>
                );
}

export default MovieBox;