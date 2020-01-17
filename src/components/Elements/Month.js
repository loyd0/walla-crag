import React from 'react'
import PropTypes from 'prop-types'

const Month = ({dates, total}) => {


    return (
        <div className={`w-56 flex flex-wrap items-center my-2 mx-auto`}

        style={{
            minWidth: '14rem',
            maxWidth: '14rem'
        }}
        
        >
            {dates.map((day, index) => {

                return <div className={`${day ? "bg-green-400" : "bg-gray-500"} text-primary h-8 w-8 text-center self-center`}  key={index} > {index + 1} </div>
            })}
        </div>
    )
}

Month.propTypes = {

}

export default Month
