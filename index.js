const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

function returnFirstTwoDrivers(drivers) {
    const returnFirstTwoDrivers = drivers.slice(0, 2);
    return returnFirstTwoDrivers
}

function returnLastTwoDrivers(drivers) {
    const returnLastTwoDrivers = drivers.slice(2);
    return returnLastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier() {
    const fareMultiplier = function (fare) {
        const fareQuintupler = fare * 5
        return fareQuintupler
    }
    return fareMultiplier
}

function fareDoubler(fare) {
    const fareDoubler = fare * 2
    return fareDoubler
}

function fareTripler(fare) {
    const fareTripler = fare * 3
    return fareTripler
}

function selectDifferentDrivers(drivers, decisionFunction) {
    if (decisionFunction === returnFirstTwoDrivers) {
        return drivers.slice(0, 2);
    } else if (decisionFunction === returnLastTwoDrivers) {
        return drivers.slice(2);
    }
}
