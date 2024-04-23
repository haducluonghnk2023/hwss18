function parameterValidator(validationFn: (args: any[]) => boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            if (validationFn(args)) {
                return originalMethod.apply(this, args);
            } else {
                throw new Error("Parameter validation failed");
            }
        };

        return descriptor;
    };
}
class Example {
    @parameterValidator(args => args.every(arg => typeof arg === 'number'))
    sum(...numbers: number[]) {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }
}

const example = new Example();
console.log(example.sum(1, 2, 3)); // Output: 6
// console.log(example.sum(1, "2", 3)); // Throws an error
