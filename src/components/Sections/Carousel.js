import React, { useState } from 'react'
// https://github.com/g787543/infinite-react-carousel
import Slider from '../../infinite-react-carousel';


const Content = ({ content }) => {
  return (
    <div
      className="z-10  text-center px-4 py-6 max-w-3xl mx-auto sm:py-12 bg-blue-400 flex-col flex justify-center"
      style={{
        minHeight: 400,
        maxHeight: '100vh',
        backgroundColor: 'rgba(47, 81, 114, 0.4)'
      }}
    >
      <p className="text-center text-xl ">"{content.description.description}"</p>
      <p className="text-center text-lg italic ">{content.title} </p>
    </div>
  )
}

const NextArrow = (props)=> <div {...props} ><i className="fa  fa-chevron-right text-4xl text-secondary hover:text-primary hover:cursor-pointer" /></div>
// const NextArrow = ()=> <div>{"HI"}</div>
const PrevArrow = (props)=> <div {...props}><i className="fa fa-chevron-left text-4xl text-secondary hover:text-primary hover:cursor-pointer" /></div>
// const PrevArrow = ()=> <div>{"BYE"}</div>

const ContentContainer = ({ content }) => {
  const [active, setActive] = useState(0)


  return (
 <Slider 
      dotsClass="z-10 carousel-dots relative bottom-0"             
      className="w-screen min-h-screen z-10"
      dots
      // nextArrow={<NextArrow />}
      // prevArrow={<PrevArrow />}
    >
      {content.map((cont, index) =>
        <div key={cont.title + index}>
          <div className="h-screen flex flex-col justify-center ">
            <Content content={cont} />
          </div>
        </div>
      )}
    </Slider>
   
  )
}


export default ContentContainer
