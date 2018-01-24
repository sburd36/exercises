//TODO: tell VSCode to do development-time type checking
//@ts-check
//TODO: put the runtime interpreter into strict mode
"use strict";

//FILTERING
/**
 * Returns true if record.rain === true
 * @param {WeatherRecord} record 
 * @returns boolean
 */
function isRainy(record) {
    return record.rain === true;
}

/**
 * Arrays have a built-in .filter() method, but
 * if you want to understand what that method does,
 * read this code. This function does exactly what
 * Array.filter() does. Note how the basic filtering
 * algorithm is separated from the predicate function
 * that tests each element in the array. We can provide
 * different predicate functions depending on what sort
 * of filtering we wnat to achieve.
 * @param {Array} array 
 * @param {function(*)} predicate 
 * @returns {Array}
 */
function filter(array, predicate) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            output.push(array[i]);
        }
    }
    return output;
}

/**
 * Returns a new predicate function that calls
 * the predicate function passed as the `predicate`
 * parameter, and then reverse the result. If
 * `predicate()` returns true, the returned function
 * returns false, or vice-versa.
 * @param {function(WeatherRecord)} predicate - an existing
 * predicate function that will be invoked for each array element
 * @returns {function(WeatherRecord)} - a new predicate function
 * that you can pass to the Array.filter() method
 */
function not(predicate) {
    //return a new predicate function that...
    return function(record) {
        //invokes the function passed as the
        //predicate parameter, and negates
        //the result
        return !predicate(record);
    }
}

/**
 * Returns the result of record.tempMap >= 60
 * @param {WeatherRecord} record 
 * @returns {boolean}
 */
function isWarm(record) {
    return record.tempMax >= 60;
}

//use our isRainy function to filter the WEATHER
//array to get only the ones where .rain === true
let rainyDays = WEATHER.filter(isRainy);
//console.log(rainyDays)

//combine not with isRainy to create a new predicate
//function that filters for records where .rain !== true
let dryDays = WEATHER.filter(not(isRainy));
//console.log(dryDays);

//who says that it always rains in Seattle?
console.log("there were %d rainy days and %d dry days", rainyDays.length, dryDays.length);

/* can't do this--isRainy is a *reference* to the
function with that name, similar to how a parameter
is just a reference to the data that was passed
to that parameter. The expression `isRainy` evaluates
to a function reference: it does not *invoke* the 
function. So we can't use ! to reverse the return
value, as we aren't invoking the function yet.
*/
//let dryDays = WEATHER.filter(!isRainy);

//use isWarm to filter for days where tempMax >= 60
let warmDays = WEATHER.filter(isWarm);
//again use not(), but this time wrap isWarm to
//filter for days where tempMax < 60
let coldDays = WEATHER.filter(not(isWarm));

//SORTING
/**
 * Returns positive number if record1 > record2
 * zero if record1 === record2
 * negative if record1 < record2
 * @param {WeatherRecord} record1 
 * @param {WeatherRecord} record2 
 * @returns {number}
 */
function byTempMax(record1, record2) {
    return record1.tempMax - record2.tempMax;
}

/**
 * Returns a new comparator function that will invoke
 * the function passed as `comparator` and then return
 * the negation of the result to the caller. This effectively
 * sorts the array elements in descending rather than 
 * ascending order.
 * @param {function(WeatherRecord,WeatherRecord)} comparator 
 * @returns {function(WeatherRecord,WeatherRecord)}
 */
function descending(comparator) {
    //return a new comparator function that...
    return function(record1, record2) {
        //invokes the original comparator function
        //and returns the negation of the result
        return -comparator(record1, record2);
    }
}

let rainyByTemp = rainyDays.sort(byTempMax);
console.log(rainyByTemp.slice(0,10));
let rainyByTempDesc = rainyDays.sort(descending(byTempMax));
console.log(rainyByTempDesc.slice(0,10));

//MAPPING
function pluckTempMax(record) {
    return record.tempMax;
}

function map(array, transformer) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(transformer(array[i]));
    }
    return output;
}

let warmestRainyDays = rainyByTempDesc.slice(0,10);
let warmestRainyTemps = warmestRainyDays.map(pluckTempMax);
console.log(warmestRainyTemps);

//JOINING
console.log(warmestRainyTemps.join(","));

let x = WEATHER.filter(isRainy)
    .sort(descending(byTempMax))
    .slice(0,10)
    .map(pluckTempMax)
    .join(",");

console.log(x);

//REDUCING

function reduceSumTempMax(acc, record) {
    return acc + record.tempMax;
}
let sumTempMax = WEATHER.reduce(reduceSumTempMax, 0);
console.log("average tempMax was %d", sumTempMax / WEATHER.length);