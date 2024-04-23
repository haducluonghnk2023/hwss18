function typeCheck(...types: string[]) {
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            if (types.length !== args.length) {
                throw new Error(`Incorrect number of arguments provided for ${key}`);
            }

            for (let i = 0; i < args.length; i++) {
                if (typeof args[i] !== types[i]) {
                    throw new Error(`Argument ${i + 1} for ${key} must be of type ${types[i]}`);
                }
            }

            return originalMethod.apply(this, args);
        };

        return descriptor;
    };
}
class Example6 {
    @typeCheck('number', 'number')
    sum(a: number, b: number) {
        return a + b;
    }
}

const example6 = new Example6();
console.log(example6.sum(1, 2)); // Output: 3
// console.log(example.sum(1, '2')); // Throws an error
