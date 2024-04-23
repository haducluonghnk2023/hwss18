function combineFunctions(...functions: Function[]): Function {
    return function(...args: any[]) {
        let result = args;
        for (const fn of functions) {
            result = [fn(...result)];
        }
        return result[0];
    };
}
const addOne = (x: number) => x + 1;
const double = (x: number) => x * 2;
const subtractThree = (x: number) => x - 3;

const combinedFunction = combineFunctions(addOne, double, subtractThree);

console.log(combinedFunction(5)); // Output: ((5 + 1) * 2) - 3 = 7
