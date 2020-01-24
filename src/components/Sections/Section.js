import React, {useRef, useState, useEffect} from 'react'
import Img from 'gatsby-image'


const Section = ({images, children, overlay, gradient, scrollToId, className}) => {

    const [ sectionHeight, setSectionHeight ] = useState('100vh')
// console.log(images)
    const sectionRef = useRef(0)

    useEffect(() => {
        setSectionHeight(sectionRef.current.clientHeight)
        return () => {
        };
    }, [sectionRef])
    return (
        <section 
            ref={sectionRef}
            id={scrollToId ? scrollToId : ""} 
            className={` min-h-screen flex flex-col justify-center text-center text-secondary h-full relative ${className} `}>
            {gradient || overlay ?
                <div 
                    className="absolute min-h-screen w-screen z-10"
                    style={{
                        background: gradient ? 'linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(0,0,4,0.20) 90%, rgba(0,0,0,0.60) 100%)' : `rgba(0,0,0,${overlay})`,
                        height: sectionHeight,

                    }}
            ></div>: ""}
             { images ? <Img style={{ position: 'absolute', height: sectionHeight }} className="min-h-screen absolute top-0 w-screen" fluid={images.fluid} /> : ""  }

            {children}
                    
           
        </section>
    )
}

Section.propTypes = {

}

export default Section
