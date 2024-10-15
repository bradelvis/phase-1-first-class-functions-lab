// Code your solution in this file!
// 1. Return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// Test the function
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // => ['Antonia', 'Nuru']

// 2. Return the last two drivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// Test the function
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // => ['Amari', 'Mo']

// 3. Create an array containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Create a higher-order function that returns a multiplier function
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

// 5. Create fareDoubler function
const fareDoubler = createFareMultiplier(2);

// Test fareDoubler
console.log(fareDoubler(100)); // => 200

// 6. Create fareTripler function
const fareTripler = createFareMultiplier(3);

// Test fareTripler
console.log(fareTripler(100)); // => 300

// 7. Function to select different drivers based on the given function
const selectDifferentDrivers = function(drivers, selectorFunction) {
    return selectorFunction(drivers);
};

// Test selectDifferentDrivers
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); // => ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); // => ['Amari', 'Mo']
