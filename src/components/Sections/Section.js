import React, {useRef, useState, useEffect} from 'react'
import Img from 'gatsby-image'


const Section = ({images, children, overlay, gradient}) => {

    const [ sectionHeight, setSectionHeight ] = useState('100vh')

    const sectionRef = useRef(0)

    useEffect(() => {
        setSectionHeight(sectionRef.current.clientHeight)
        return () => {
        };
    }, [sectionRef])
    return (
        <section 
            ref={sectionRef}
            className="min-h-screen flex flex-col justify-center text-center text-secondary">
           
            {gradient || overlay ?
                <div 
                    className="absolute min-h-screen w-screen z-10"
                    style={{
                        background: gradient ? 'linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(0,0,4,0.20) 90%, rgba(0,0,0,0.60) 100%)' : `rgba(0,0,0,${overlay})`,
                        height: sectionHeight,

                    }}
            />: ""}
            {children}
            <Img style={{ height: sectionHeight}} className="min-h-screen" fluid={images[0].node.fluid} />
        </section>
    )
}

Section.propTypes = {

}

export default Section
