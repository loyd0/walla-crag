import React from 'react'
import PropTypes from 'prop-types'

import { Link } from '@elements'

import Placeholder from '../../images/route.png'

const Card = ({ linkTo, img, className, style, title, desc, icons, light }) => {
    return (
        <Link linkTo={linkTo}
            className={`  ${className}`}
        >
            <div
                className={`text-center pt-6 pb-2 ${ light ? "card-light" : "card" } px-2 mx-auto`}
                style={style}
            >
                <img className="mx-auto mb-2 w-12" src={img ? img.src : Placeholder} alt={img ? img.alt : "Placeholder"} />
                <h3 className="text-xl md:text-xl">{title} </h3>
                <p className="md:px-8 text-sm mb-0">{desc} </p>
                <p className="mb-0"> {icons.map(icon => <span>{icon} <br /></span>)} </p>
            </div>
        </Link>
    )
}

Card.propTypes = {

}

export default Card
