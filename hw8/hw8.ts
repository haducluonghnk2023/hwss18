function cachingDecorator(cacheCondition: (args: any[]) => boolean) {
    const cache = new Map<string, any>();

    return function(target: any, propertyName: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            const key = `${propertyName}_${JSON.stringify(args)}`;

            if (cache.has(key) && cacheCondition(args)) {
                console.log(`Lấy kết quả từ cache cho ${key}`);
                return cache.get(key);
            } else {
                const result = originalMethod.apply(this, args);
                cache.set(key, result);
                return result;
            }
        };

        return descriptor;
    };
}

class Example {
    @cachingDecorator((args: any[]) => args.every(arg => typeof arg === 'number'))
    static add(a: number, b: number): number {
        console.log("Thực hiện phép cộng");
        return a + b;
    }
}

// Sử dụng phương thức đã được decorate
console.log(Example.add(2, 3)); // Thực hiện phép cộng
console.log(Example.add(2, 3)); // Lấy kết quả từ cache
console.log(Example.add(2, 4)); // Thực hiện phép cộng mới và lưu vào cache
