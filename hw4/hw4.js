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
function parameterValidator(validationFn) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            if (validationFn(args)) {
                return originalMethod.apply(this, args);
            }
            else {
                throw new Error("Parameter validation failed");
            }
        };
        return descriptor;
    };
}
class Example {
    sum(...numbers) {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }
}
__decorate([
    parameterValidator(args => args.every(arg => typeof arg === 'number')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Example.prototype, "sum", null);
const example = new Example();
console.log(example.sum(1, 2, 3)); // Output: 6
// console.log(example.sum(1, "2", 3)); // Throws an error
