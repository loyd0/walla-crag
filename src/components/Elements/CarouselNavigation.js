import React from 'react'
import PropTypes from 'prop-types'

const CarouselNavigation = ({items, currentItem, dotClick, forwards, backwards}) => {

    return (
        <div className="w-full h-full z-10 absolute top-0">
                    <div className="flex justify-between h-full text-secondary" >
                            <i 
                            onClick={() => backwards(currentItem, items)}
                            className="fa fa-chevron-left text-4xl self-center ml-2 md:ml-12 hover:text-primary hover:cursor-pointer" 
                            />
                            <i 
                                onClick={() => forwards(currentItem, items)}
                                className="fa fa-chevron-right text-4xl self-center mr-2 md:mr-12 hover:text-primary hover:cursor-pointer" 
                            />
                    </div>
                   
             <div className="text-center py-4 absolute bottom-0 w-full z-40">
                        {items && items.map((item, index) => {
                            const activeItem = index === currentItem
                            return <i 
                                key={index} 
                                className={`ml-2 fa fa-circle hover:text-primary  text-${activeItem ? "primary" : "secondary"} ${activeItem ? "" : "hover:cursor-pointer" }`} 
                                onClick={()=> dotClick(index)}
                            />
                        })}
                    </div>

                </div>
    )
}

CarouselNavigation.propTypes = {

}

export default CarouselNavigation
