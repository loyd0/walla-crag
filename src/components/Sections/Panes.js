import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@elements'
import Img from 'gatsby-image'

const Panes = ({ panes }) => {


    return (
        <div className="flex md:flex-row flex-col min-h-screen">
            {panes.map((pane, index) => {
                return <div key={pane.text + index} className={`md:h-screen lg:w-1/${panes.length} w-full bg-blue-${index + 2}00 h-full flex flex-col justify-center relative flex-grow` }>
                    <Link
                        className="text-white text-xl md:text-2xl font-bold z-10"
                        linkTo={pane.linkTo}>
                        <div
                            style={{ border: 'white 5px solid' }}
                            className=" md:h-56 md:w-56 h-48 w-48 mx-auto flex flex-col justify-center px-4 hover:bg-transparent">
                            {pane.text}
                        </div>
                    </Link>
                    <Img fluid={pane.img[0].node.fluid} 
                    style={{ position: 'absolute'}} className="z-0 h-full w-full"

                    
                    />


                </div>
            })
            }
        </div>)

}

Panes.propTypes = {

}

export default Panes
