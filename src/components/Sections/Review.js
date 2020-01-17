import React, { useState } from 'react'
import PropTypes from 'prop-types'

const reviews = [{
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Some dude"
  }, {
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Some dude"
  }]

const ReviewSlide = ({ review }) => {
    return (
        <div
          className=" z-10 text-center w-full px-4 py-6 max-w-3xl self-center mx-auto sm:py-12 bg-blue-400 h-full"
          style={{
            minHeight: 400,
            backgroundColor: 'rgba(47, 81, 114, 0.4)'
          }}
        >
          <p className="text-center text-xl ">{review.text}
        </p>
          <p className="text-center text-lg ">{review.name}
        </p>


        </div>
    )
}


const ReviewContainer = () => {
    const [ active, setActive ] = useState(0)

    return (
        <div className="flex w-full h-64">
            <ReviewSlide review={reviews[active]} />
        </div>
    )
}

ReviewContainer.propTypes = {

}

export default ReviewContainer
