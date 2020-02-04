import React, { useState } from 'react'
import CarouselNavigation from '../Elements/CarouselNavigation'
// https://github.com/g787543/infinite-react-carousel
import Slider from 'infinite-react-carousel';


const Content = ({ content }) => {
  return (
    <div
      className="w-screen z-10 w-full text-center w-full px-4 py-6 max-w-3xl mx-auto sm:py-12 bg-blue-400 flex-col flex justify-center"
      style={{
        minHeight: 400,
        maxHeight: '100vh',
        backgroundColor: 'rgba(47, 81, 114, 0.4)'
      }}
    >
      <p className="text-center text-xl ">"{content.description.description}"</p>
      <p className="text-center text-lg italic ">{content.title}
      </p>
    </div>
  )
}

const ContentContainer = ({ content }) => {
  const [active, setActive] = useState(0)


  return (
    <Slider 
    nextArrow={<div><i className="fa fa-chevron-right text-4xl text-secondary hover:text-primary hover:cursor-pointer" /></div>}
    prevArrow={<div><i className="fa fa-chevron-left text-4xl text-secondary hover:text-primary hover:cursor-pointer" /></div>}
    dotsClass="z-10 carousel-dots relative bottom-0" 
    className="w-screen h-screen w-100 z-10" dots>
      {content.map(cont =>
        <div>
          <div className="h-screen flex flex-col justify-center ">
            <Content content={cont} />
          </div>

        </div>

      )}
    </Slider>
  )
}


export default ContentContainer
