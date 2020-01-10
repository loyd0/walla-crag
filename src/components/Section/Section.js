import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import {Button} from "@elements"


const Section = ({images}) => {
    console.log(images)
    return (
        <section className="min-h-screen flex flex-col justify-center text-center text-white">
            <div className="absolute z-10 text-center w-full">
                <h1 className="border-b-4 border-white inline-block font-bold ">Your Escape in the Lakes</h1>
                <h2 className="">A peaceful retreat in the center of Keswick</h2>
                <Button className="mt-4"> Discover Walla</Button>
            </div>
        
           <Img className="min-h-screen" fluid={images[0].node.fluid}/>
          
        </section>
    )
}

Section.propTypes = {

}

export default Section
