import React from 'react'
import PropTypes from 'prop-types'
import {Month} from '@elements'

const Availability = props => {
    const dates = Array.from(Array(30)).map(day => Math.random() > 0.5)

    const months = [
        Array.from(Array(30)).map(day => Math.random() > 0.5),
        Array.from(Array(30)).map(day => Math.random() > 0.5),
        Array.from(Array(30)).map(day => Math.random() > 0.5)

    ]

    return (
        <div className="flex flex-col sm:flex-row justify-around w-full flex-wrap h-full">
            {
                months.map((month, index) => {
                    return <Month key={index} dates={month} total={months.length} />
                })
            }
        </div>

    )
}

Availability.propTypes = {

}

export default Availability
