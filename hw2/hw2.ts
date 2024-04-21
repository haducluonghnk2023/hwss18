function timingDecorator(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const start = performance.now(); // Lấy thời điểm bắt đầu thực thi hàm

        const result = originalMethod.apply(this, args); // Thực thi hàm gốc

        const end = performance.now(); // Lấy thời điểm kết thúc thực thi hàm
        const executionTime = end - start; // Tính toán thời gian thực thi

        console.log(`Tên hàm: ${propertyName}`);
        console.log(`Tham số đầu vào: ${JSON.stringify(args)}`);
        console.log(`Thời gian thực thi: ${executionTime} milliseconds`);
        console.log(`Kết quả trả về: ${result}`);

        return result; // Trả về kết quả của hàm gốc
    };

    return descriptor;
}

class Example1 {
    @timingDecorator
    static someMethod(a: number, b: number): number {
        // Mô phỏng một hàm có thời gian thực thi
        let result = 0;
        for (let i = 0; i < a * b; i++) {
            result += i;
        }
        return result;
    }
}

// Sử dụng phương thức đã được decorate
console.log(Example1.someMethod(1000, 1000));
