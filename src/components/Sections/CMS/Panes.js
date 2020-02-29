import React from 'react'
import { Link } from '@elements'
import Img from 'gatsby-image'

const Panes = ({ parts: { ContentfulPanel }}) => {
    return (
        <div className="flex md:flex-row flex-col min-h-screen">
            {ContentfulPanel.map((pane, index) => {
                return <div key={pane.title + index} className={`md:h-screen lg:w-1/${ContentfulPanel.length} w-full bg-blue-${index + 2}00 h-full flex flex-col justify-center relative flex-grow` }>
                    <Link
                        className="text-white text-xl md:text-2xl font-bold z-10 py-10"
                        linkTo={pane.linksTo}>
                        <div
                            style={{ border: 'white 5px solid' }}
                            className=" md:h-56 md:w-56 h-48 w-48 mx-auto flex flex-col justify-center text-center px-4 hover:bg-transparent">
                            {pane.title}
                        </div>
                    </Link>
                    <Img fluid={pane.backgroundImage.fluid} 
                    alt={pane.backgroundImage.title}
                    style={{ position: 'absolute'}} className="z-0 h-full w-full"
                    />
                </div>
            })
            }
        </div>)

}


export default Panes
