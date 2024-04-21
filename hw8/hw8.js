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
function cachingDecorator(cacheCondition) {
    const cache = new Map();
    return function (target, propertyName, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const key = `${propertyName}_${JSON.stringify(args)}`;
            if (cache.has(key) && cacheCondition(args)) {
                console.log(`Lấy kết quả từ cache cho ${key}`);
                return cache.get(key);
            }
            else {
                const result = originalMethod.apply(this, args);
                cache.set(key, result);
                return result;
            }
        };
        return descriptor;
    };
}
class Example {
    static add(a, b) {
        console.log("Thực hiện phép cộng");
        return a + b;
    }
}
__decorate([
    cachingDecorator((args) => args.every(arg => typeof arg === 'number')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Example, "add", null);
// Sử dụng phương thức đã được decorate
console.log(Example.add(2, 3)); // Thực hiện phép cộng
console.log(Example.add(2, 3)); // Lấy kết quả từ cache
console.log(Example.add(2, 4)); // Thực hiện phép cộng mới và lưu vào cache
