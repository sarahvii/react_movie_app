import React from "react";
import Movie from "./Movie";

const MovieList = ({movies}) => {

    const movieNodes = movies.map(movie => {
        return (
            <Movie title={movie.title} key={movie.id} />
        );
    });
    return (
        <div class="movie-list">
        <>
            {movieNodes}
        </>
        </div>
    )
}

export default MovieList