import React from 'react'
import PropTypes from 'prop-types'

const Button = ({children, className, secondary}) => {
    return (
        <button className={`px-4 py-2 ${secondary ? "bg-secondary text-primary hover:bg-yellow-300" : "bg-primary text-secondary hover:bg-white hover:text-primary"} ${className}`}>
            { children }
        </button>
    )
}


Button.propTypes = {

}

export default Button
