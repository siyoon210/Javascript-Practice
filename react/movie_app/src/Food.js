import React from "react"
import PropTypes from "prop-types"

function Food({ fav }) {
    return <h3>I love {fav}.</h3>
}

Food.propTypes = {
    fav: PropTypes.string.isRequired
}

export default Food