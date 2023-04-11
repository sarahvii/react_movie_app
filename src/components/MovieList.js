import React from "react";
import Movie from "./Movie";

const MovieList = ({movies}) => {

    const movieNodes = movies.map(movie => {
        return (
            <Movie title={movie.title} key={movie.id}>{movie.title}</Movie>
        );
    });
    return (
        <>
            {movieNodes}
        </>
    )
}

export default MovieList