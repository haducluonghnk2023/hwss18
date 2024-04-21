"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function timingDecorator(target, propertyName, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
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
    static someMethod(a, b) {
        // Mô phỏng một hàm có thời gian thực thi
        let result = 0;
        for (let i = 0; i < a * b; i++) {
            result += i;
        }
        return result;
    }
}
__decorate([
    timingDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Example1, "someMethod", null);
// Sử dụng phương thức đã được decorate
console.log(Example1.someMethod(1000, 1000));
