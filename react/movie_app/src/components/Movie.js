import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"
import {Link} from "react-router-dom";

function Movie({year, title, summary, posterSrc, genres}) {
    return (
        <Link
            to={{
                pathname: "/movie-detail",
                state: {
                    year,
                    title,
                    summary,
                    posterSrc,
                    genres
                }
            }}
        >
            <div className="movie">
                <img src={posterSrc} alt={title} title={title}/>
                <div className="movie__data">
                    <h1 className="movie__title">{title}</h1>
                    <h2 className="movie__year">{year}</h2>
                    <ul className="movie__genres">
                        {genres.map((genre, index) =>
                            <li key={index} className="genres__genre">
                                {genre}
                            </li>
                        )}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;