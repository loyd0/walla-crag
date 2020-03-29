import React, { useState}  from 'react'
import PropTypes from 'prop-types'

const Day = ({day, past, index}) => {
    const [ show, showAvailability] = useState(false)




    if (!past) return <div
            onMouseEnter={() => showAvailability(true)}
            onMouseLeave={() => showAvailability(false)}
            className={`bg-gray-900 text-gray-700 h-8 w-8 text-center relative self-center`} key={index} > {index + 1}
        </div>
    return (
        <div
            onMouseEnter={() => showAvailability(true)}
            onMouseLeave={() => showAvailability(false)}
            className={`${day  ? "bg-red-900 text-white" : "bg-gray-700 text-green-500"} ${past ? "": "bg-gray-300 text-gray-700"} h-8 w-8 text-center relative self-center cursor-pointer`} key={index} > {index + 1}
            {show ? <div className={`absolute text-xs top-0 text-center px-2 z-10 overflow bg-gray-400 text-white py-2 ${day ? "bg-gray-900 text-red-500": "bg-gray-900 text-green-500"} `} style={{ marginTop: -20, left: -7 }}>{day ? "Booked" : "Free"}</div> : ""}
        </div>
    )
}

Day.propTypes = {

}

export default Day
