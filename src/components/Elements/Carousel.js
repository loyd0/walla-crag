import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const Carousel = ({ images }) => {
    const imagesArray = images.map(image => image.node.fluid)
    const showNav = images && imagesArray.length > 1
    const [currentImage, setCurrentImage] = useState(0)

    return (
        <div className="w-full h-full relative">
            <Img className="h-full z-0 " fluid={imagesArray[currentImage]} />
        { 
            showNav ?
                <div className="w-full h-full z-10 absolute top-0">
                    <div className="flex justify-between h-full text-secondary" >
                            <i 
                            onClick={() => setCurrentImage((currentImage + 1) % imagesArray.length)}
                            className="fa fa-chevron-left text-4xl self-center ml-2 md:ml-12 hover:text-primary hover:cursor-pointer" />
                            <i 
                             onClick={() => setCurrentImage((currentImage + 1) % imagesArray.length)}
                            className="fa fa-chevron-right text-4xl self-center mr-2 md:mr-12 hover:text-primary hover:cursor-pointer" />

                    </div>
                   
             <div className="text-center py-4 absolute bottom-0 w-full">
                        {images && images.map((image, index) => {
                            const activeImage = index === currentImage
                            return <i key={index} className={`ml-2 fa fa-circle hover:text-primary  text-${activeImage ? "primary" : "secondary"} ${activeImage ? "" : "hover:cursor-pointer" }`} />
                        })}
                    </div>

                </div>
            : ""

        }

        </div>
    )
}

Carousel.propTypes = {

}

export default Carousel
