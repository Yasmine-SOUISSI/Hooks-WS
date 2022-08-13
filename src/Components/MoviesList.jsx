import React from "react";
import MoviesCard from "./MoviesCard";
export default function MoviesList({ moviesData, search }) {
    const filteredMovies = JSON.parse(
        sessionStorage.getItem("moviesData")
    ).filter((movie) => {
        return movie.title.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className="d-flex">
            {filteredMovies.map((movie, key) => (
                <MoviesCard key={key} movie={movie} />
            ))}
        </div>
    );
}
