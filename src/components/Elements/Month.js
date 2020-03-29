import React from 'react'
import PropTypes from 'prop-types'
import Day from './Day'

const Month = ({dates, month, total}) => {

    return (
        <div>
         <h4>{month}</h4>
        <div className={`w-56 flex flex-wrap items-center my-2 mx-auto`}

        style={{
            minWidth: '14rem',
            maxWidth: '14rem'
        }}
        
        >
           
            {dates.map((day, index) => {
                return <Day key={index} day={day.booked} past={day.past} index={index} />
            })}
   
        </div>

        </div>
    )
}

Month.propTypes = {

}

export default Month
