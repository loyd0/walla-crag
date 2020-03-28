import moment from 'moment'

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


    getMonthArrays() {
        console.log(moment.months()[this.currentMonth])
        console.log(moment.months()[this.middleMonth])
        console.log(moment.months()[this.maxMonth])
        return [
            {
                month: moment.months()[this.currentMonth],
                dates: Array.from(Array(moment(this.currentMonthYear, "MM/YYYY").daysInMonth())).map(day => Math.random() > 0.5),
            },
            {
                month: moment.months()[this.middleMonth],
                dates: Array.from(Array(moment(this.middleMonthYear, "MM/YYYY").daysInMonth())).map(day => Math.random() > 0.5),
            },
            {
                month: moment.months()[this.maxMonth],
                dates: Array.from(Array(moment(this.maxMonthYear, "MM/YYYY").daysInMonth())).map(day => Math.random() > 0.5)
            },



        ]
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



// Grey out all days before today
// Create arrays for the next two months


// Store a list of days in a month
// Calculate if it is a leap year

// Get the day of the month from the day 
// Calculate the length of the booking
// Mark those days as booked in the month

// Handle range overlaps