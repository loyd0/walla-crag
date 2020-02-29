import React from 'react'
import Img from 'gatsby-image'


const Section = ({ images, children, overlay, gradient, scrollToId, className, style }) => {
    return (
        <section
            style={style}
            id={scrollToId ? scrollToId : ""}
            className={` min-h-screen flex flex-col justify-center text-center text-secondary h-full relative ${className} `}>
            {gradient || overlay ?
                <div
                    className="absolute h-full w-screen z-10"
                    style={{
                        background: gradient ? 'linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(0,0,4,0.20) 90%, rgba(0,0,0,0.60) 100%)' : `rgba(0,0,0,${overlay})`,

                    }}
                ></div> : ""}
            {images ?
                <Img style={{
                    position: 'absolute',
                }}
                    className="min-h-screen absolute top-0 w-screen h-full"
                    fluid={images.fluid}
                />
                : ""}
            {children}
        </section>
    )
}

Section.propTypes = {

}

export default Section
