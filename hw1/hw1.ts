function logInfo(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Tên hàm: ${propertyName}`);
        console.log(`Tham số đầu vào: ${JSON.stringify(args)}`);

        const result = originalMethod.apply(this, args);
        console.log(`Kết quả trả về: ${result}`);

        return result;
    };

    return descriptor;
}

class Calculator {
    @logInfo
    static addition(a: number, b: number): number {
        return a + b;
    }

    @logInfo
    static subtraction(a: number, b: number): number {
        return a - b;
    }
}

// Sử dụng các phép toán đã được decorate
console.log(Calculator.addition(5, 10)); // Kết quả: 15
console.log(Calculator.subtraction(20, 8)); // Kết quả: 12
