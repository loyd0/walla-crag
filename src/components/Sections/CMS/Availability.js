import React from 'react'
import PropTypes from 'prop-types'
import { Month } from '@elements'
import { useStaticQuery, graphql } from 'gatsby'
import {getMonth, currentMonth, Bookings } from '../../../functions/DateUtils'

const Availability = props => {
    const dates = Array.from(Array(30)).map(day => Math.random() > 0.5)
    const {contentfulBookings} = useStaticQuery(graphql`
        query DatesQuery {
        contentfulBookings {
            dates {
                from
                till
            }
        }
    }
`)


    console.log(new Bookings().getMonthArrays())
    const months = new Bookings().getMonthArrays()

    return (
        <div className="flex flex-col sm:flex-row justify-around w-full flex-wrap h-full">
            {
                months.map((month, index) => {
                    return <Month key={index} dates={month.dates} total={months.length} />
                })
            }
        </div>

    )
}

Availability.propTypes = {

}

export default Availability
