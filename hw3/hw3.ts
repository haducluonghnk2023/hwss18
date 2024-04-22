function cachingDecorator(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const cache: { [key: string]: any } = {};

    descriptor.value = function(...args: any[]) {
        const key = JSON.stringify(args);
        
        if (cache.hasOwnProperty(key)) {
            console.log(`Lấy kết quả từ cache cho ${key}`);
            return cache[key];
        } else {
            const result = originalMethod.apply(this, args);
            cache[key] = result;
            return result;
        }
    };

    return descriptor;
}

class Example2 {
    @cachingDecorator
    static add(a: number, b: number): number {
        console.log("Thực hiện phép cộng");
        return a + b;
    }
}


console.log(Example2.add(2, 3)); // Thực hiện phép cộng
console.log(Example2.add(2, 3)); // Lấy kết quả từ cache
console.log(Example2.add(2, 4)); // Thực hiện phép cộng mới và lưu vào cache
