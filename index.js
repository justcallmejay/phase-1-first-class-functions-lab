//////////////My work//////////////////

// const returnFirstTwoDrivers = function() {
//     const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
//     const driversSpread = [...drivers]
//     const firstTwoDrivers = [];
//     firstTwoDrivers.push(driversSpread[0], driversSpread[1]);
//         return firstTwoDrivers
//     }

// //////

// const returnLastTwoDrivers = function() {
//     const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
//     const driversSpread = [...drivers]
//     const firstTwoDrivers = [];
//     firstTwoDrivers.push(driversSpread[2], driversSpread[3]);
//         return firstTwoDrivers
//     }

// //////

// function selectingDrivers() { 
//     return [returnFirstTwoDrivers(), returnLastTwoDrivers()]
// }

// console.log(selectingDrivers()[0]);
// console.log(selectingDrivers()[1]);
// // console.log(selectingDrivers[1]);

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2)
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//////////////My work//////////////////
// const createFareMultiplier = 
// function fareQuintupler(multiplier) {
//         return multiplier * 5}

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier
    }
}

function fareDoubler(double) {
        return double * 2
    }

function fareTripler(triple) {
    return triple * 3
}

// const selectDifferentDrivers = (drivers, functionDrivers) => {
//     return functionDrivers(drivers)

// }

function selectDifferentDrivers(drivers, functionDrivers) {
    return functionDrivers(drivers)

}
