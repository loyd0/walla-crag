import Moment from 'moment'
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);
// Get this month


const date = "2020-04-24T00:00+00:00"


const dateISO = new Date(date)


export const getMonth = () => {
    console.log(dateISO)

    console.log(moment(3, "MM").daysInMonth())

    return moment(dateISO)
}
export const isLeapYear = () => {

    return moment(dateISO).isLeapYear()
}
export const currentMonth = () => {
    const now = moment()
    return now.month()

}


// 1. Get the current month
// 2. Find the max month
// 3. Create arrays for max and min for each month
// 4. If month = 1 (feb) check if leap year

const getMaxMonth = (month, year) => {
    if (month === 10) {
        return `0/${year}`
    }
    if (month === 11) {
        return `1/${year}`
    }
    return `${month + 2}/${year}`
}
const getMiddleMonth = (month, year) => {
    if (month === 11) {
        return `0/${year}`
    }
    return `${month + 1}/${year}`
}


const getMonthYear = (month, year) => {
    return `${month}/${year}`
}

const getRelativeMonth = (month) => {
    return (month + 1) % 12
}
const getAbsoluteMonth = (month) => {
    return (month) % 11
}


export class Bookings {

    constructor() {
        this.now = moment()
        this.year = this.now.year()
        // Formatting it to the required 1 index rather than 0 index
        this.currentMonth = getAbsoluteMonth(this.now.month())
        this.middleMonth = getAbsoluteMonth(this.now.month() + 1)
        this.maxMonth = getAbsoluteMonth(this.now.month() + 2)
        this.currentMonthYear = `${getMonthYear(getRelativeMonth(this.currentMonth), this.year)}`
        this.middleMonthYear = `${getMonthYear(getRelativeMonth(this.middleMonth), this.year)}`
        this.maxMonthYear = `${getMonthYear(getRelativeMonth(this.maxMonth), this.year)}`


        this.currentMonthDays = moment(this.currentMonth, "MM/YYYY").daysInMonth()
    }


    getMonthArrays(dates) {
        return [
            {
                month: moment.months()[this.currentMonth],
                monthNum: this.currentMonth,
                dates: Array.from(Array(moment(this.currentMonthYear, "MM/YYYY").daysInMonth())),
            },
            {
                month: moment.months()[this.middleMonth],
                monthNum: this.middleMonth,
                dates: Array.from(Array(moment(this.middleMonthYear, "MM/YYYY").daysInMonth())),
            },
            {
                month: moment.months()[this.maxMonth],
                monthNum: this.maxMonth,
                dates: Array.from(Array(moment(this.maxMonthYear, "MM/YYYY").daysInMonth())).map(day => Math.random() > 0.5)
            },
        ]
    }



    // 1. Remove all dates that are not in the range
    // 2. Create ranges for all bookings
    // 3. Map through each month and create a date for each date to check if it is in the range created.


    createDateRange(bookings) {
        // Creates a range of bookings so that is queryable
        // filters dates from previous years
        const filteredBookings = bookings.filter(booking => {
            return moment(new Date(booking.till)).year() >= this.year 
        })
        const ranges = filteredBookings.map(booking => moment.range(booking.from, booking.till))
        return ranges
    }


    mergeBookingsWithMonths(months, bookings) {
        const ranges = this.createDateRange(bookings)

        // maps the months that are created by the object
        const mergedMonths = months.map(month => {
            const newDates = month.dates.map((dat, index) => { 
                // creates a string of the date from the index (all months are correct in the amount of days they should have)
                const dateString = `${index+1}/${month.monthNum+1}/${this.year}`
                // creates a moment date
                const date = moment(dateString, "D/M/YYYY")
                return { 
                    // sets if that date is booked by looking through all the ranges of dates to determine if the date has been taken
                    // !! might be an issue with tonnes of dates added, so perhaps some level of filtering at a later date would be required 
                    // Currently filters past years
                    booked: ranges.map(range => date.within(range)).filter(range => range === true).length > 0,
                    // if the date is in the past
                    past: date.isAfter(this.now)
                }
            })
            return { ...month, dates: newDates, }
        })
        return mergedMonths
    }
}
