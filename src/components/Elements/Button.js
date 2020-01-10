import React from 'react'
import PropTypes from 'prop-types'

const Button = ({children, className}) => {
    return (
        <button className={`px-4 py-2 bg-blue-900 ${className}`}>
            { children }
        </button>
    )
}


Button.propTypes = {

}

export default Button
