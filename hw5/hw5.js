"use strict";
function combineFunctions(...functions) {
    return function (...args) {
        let result = args;
        for (const fn of functions) {
            result = [fn(...result)];
        }
        return result[0];
    };
}
const addOne = (x) => x + 1;
const double = (x) => x * 2;
const subtractThree = (x) => x - 3;
const combinedFunction = combineFunctions(addOne, double, subtractThree);
console.log(combinedFunction(5)); // Output: ((5 + 1) * 2) - 3 = 7
