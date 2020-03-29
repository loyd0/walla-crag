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
        console.log(dates)
        console.log(moment.months()[this.currentMonth])
        console.log(moment.months()[this.middleMonth])
        console.log(moment.months()[this.maxMonth])
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


    createDateRange(bookings) {

        const ranges = bookings.map(booking => moment.range(booking.from, booking.till))
        return ranges
    }


    // 1. Remove all dates that are not in the range
    // 2. Create ranges for all bookings
    // 3. Map through each month and create a date for each date to check if it is in the range created.

    mergeBookingsWithMonths(months, bookings) {
        const ranges = this.createDateRange(bookings)
        const mergedMonths = months.map(month => {
            const newDates = month.dates.map((dat, index) => { 
                const dateString = `${index+1}/${month.monthNum+1}/${this.year}`
                const date = moment(dateString, "D/M/YYYY")
                return { 
                    booked: ranges.map(range => date.within(range)).filter(range => range === true).length > 0,
                    past: date.isAfter(this.now)
                }
            })
            return { ...month, dates: newDates, }
        })
        console.log('mergedMonths', mergedMonths)
        console.log('ranges', ranges)    
        return mergedMonths
    }
   

    // getBookingArrays() {
    //     return getMonthArrays().map(month => {
    //         return {
    //             month: 
    //             dates: month
    //         }
    //     })
    // }


}



// console.log(months)
// const monthsOnShow = months.map(month => month.monthNum)
// console.log(monthsOnShow)

// bookings.map(booked => {

//     const bookingFrom = moment(new Date(booked.from))
//     const bookingTill = moment(new Date(booked.till))
//     const monthBookedFrom = bookingFrom.month()
//     const monthBookedTill = bookingTill.month()
//     const dateRangeFrom = bookingFrom.date()
//     const dateRangeTill = bookingTill.date()
//     console.log(dateRangeFrom, dateRangeTill)
//     // console.log( monthBookedFrom, monthBookedTill)
//     const indexFrom = monthsOnShow.indexOf(monthBookedFrom)
//     const indexTill = monthsOnShow.indexOf(monthBookedTill)
//     if ( indexFrom !== -1 ) {
//      console.log(monthsOnShow[indexFrom])
//     }
// } )






// Grey out all days before today
// Create arrays for the next two months


// Store a list of days in a month
// Calculate if it is a leap year

// Get the day of the month from the day 
// Calculate the length of the booking
// Mark those days as booked in the month

// Handle range overlaps