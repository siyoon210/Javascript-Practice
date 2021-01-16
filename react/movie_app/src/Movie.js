import React from "react";
import PropTypes from "prop-types";
import "./App.css";

function Movie({year, title, summary, posterSrc}) {
    return (
        <div class="movie">
            <img src={posterSrc} alt={title} title={title}/>
            <div class="movie__data">
                <h1 class="movie__title">{title}</h1>
                <h2 class="movie__year">{year}</h2>
                <p class="movie__summary">{summary}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired
}

export default Movie;