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
function typeCheck(...types) {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
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
    sum(a, b) {
        return a + b;
    }
}
__decorate([
    typeCheck('number', 'number'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Example6.prototype, "sum", null);
const example6 = new Example6();
console.log(example6.sum(1, 2)); // Output: 3
// console.log(example.sum(1, '2')); // Throws an error
