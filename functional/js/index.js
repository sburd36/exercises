//TODO: tell VSCode to do development-time type checking
//@ts-check
//TODO: put the runtime interpreter into strict mode
"use strict";

//FILTERING
/**
 * Returns true if rain === true
 * @param {WeatherRecord} record 
 * @returns boolean
 */
function isRainy(record) {
    return record.rain === true;
}

//this is essentially what the .filter()
//method on arrays does
function filter(array, predicate) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            output.push(array[i]);
        }
    }
    return output;
}

function not(predicate) {
    return function(record) {
        return !predicate(record);
    }
}

function isWarm(record) {
    return record.tempMax >= 60;
}

let rainyDays = WEATHER.filter(isRainy);
//console.log(rainyDays)
let dryDays = WEATHER.filter(not(isRainy));
//can't do this
//let dryDays = WEATHER.filter(!isRainy);
//console.log(dryDays);
let warmDays = WEATHER.filter(isWarm);
let coldDays = WEATHER.filter(not(isWarm));

console.log("there were %d rainy days and %d dry days", rainyDays.length, dryDays.length);

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

function descending(comparator) {
    return function(record1, record2) {
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