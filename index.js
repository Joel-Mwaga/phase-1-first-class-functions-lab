// Code your solution in this file!
function returnFirstTwoDrivers() {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(0, 2)
}
function returnLastTwoDrivers() {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier
    }
}
function fareDoubler(fare) {
    return fare * 2
}
function fareTripler(fare) {
    return fare * 3
}
function selectDifferentDrivers(drivers, fn) {
    return fn(drivers)
}