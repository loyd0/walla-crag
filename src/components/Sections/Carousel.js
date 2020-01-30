import React, { useState } from 'react'
import CarouselNavigation from '../Elements/CarouselNavigation'

const Content = ({ content }) => {
    return (
        <div
          className=" text-center w-full px-4 py-6 max-w-3xl self-center mx-auto sm:py-12 bg-blue-400 h-full flex-col flex justify-center"
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

const ContentContainer = ({content}) => {
    const [ active, setActive ] = useState(0)
  console.log('content', content)
    return (
        <div className="flex w-full h-64  z-10">
            <CarouselNavigation 
            items={content}
            currentItem={active}
            forwards={(currentItem, items) => setActive((currentItem + 1) % items.length)}
            backwards={(currentItem, items) => setActive((currentItem + 1) % items.length)}
            dotClick={(index) => {setActive(index); console.log('test')} }
            
            />
            <Content content={content[active]} />
        </div>
    )
}


export default ContentContainer
