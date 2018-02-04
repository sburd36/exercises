//@ts-check
"use strict";

//The following define a type that describes the properties
//on each record in the data/yob1997.json array. Your functions
//will be passed an array of these

/**
 * @typedef NameRecord
 * @property {string} name
 * @property {string} sex
 * @property {number} count
 */


/**
 * Returns all records from nameRecordsArray where the 
 * `.name` property starts with the value of the `name` 
 * parameter. Since we're using ES6 features, feel free 
 * to use the built-in `.startsWith()` method on strings!
 * @param {NameRecord[]} nameRecordsArray
 * @param {string} name
 * @returns {NameRecord[]}
 */
function getRecordsWithNamePrefix(nameRecordsArray, name) {
    //TODO: implement this according to the comments above
    //HINT: use .filter() with a lambda function!
    //https://drstearns.github.io/tutorials/es6/#seclambdafunctions
}

/**
 * Returns the just the name from the record that has the
 * largest `.count` property.
 * @param {NameRecord[]} nameRecordsArray 
 * @returns {string}
 */
function getNameWithMaxCount(nameRecordsArray) {
    //TODO: implement this according to the comments above
    //HINT: use .reduce() with a lambda function!
    //https://drstearns.github.io/tutorials/es6/#seclambdafunctions
    
}

/**
 * Returns an array of strings containing the most popular
 * baby names from `nameRecordsArray` given a particular `sex`
 * to filter by, and a particular maximum number of results
 * to return. Array should be ordered by the `.count` property
 * descending. For example, if `sex` is set to `F` and `max`
 * is set to 10, you should return the 10 female baby names
 * from the `nameRecordsArray` with the largest `.count` values,
 * ordered by count descending.
 * @param {NameRecord[]} nameRecordsArray 
 * @param {string} sex
 * @param {number} max 
 * @returns {string[]}
 */
function getMostPopularNames(nameRecordsArray, sex, max) {
    //TODO: implement this according to the comments above
    //HINT: use .filter(), .sort(), .slice(), and .map() 
    //and pass lambda functions to each of those operations!
    //https://drstearns.github.io/tutorials/es6/#seclambdafunctions


}





/* DO NOT MODIFY ANYTHING AFTER THIS 
These statements are necessary to make the functions
above importable by the Jest testing framework.
*/
//@ts-ignore
if (module && module.exports) {
    //@ts-ignore
    module.exports = {
        getRecordsWithNamePrefix,
        getNameWithMaxCount,
        getMostPopularNames,
    };
}
