"use strict";
function addition(a, b) {
    if (typeof a === 'string' && isNaN(parseFloat(a))) {
        return 'Không hợp lệ';
    }
    if (typeof b === 'string' && isNaN(parseFloat(b))) {
        return 'Không hợp lệ';
    }
    return parseFloat(a) + parseFloat(b);
}
function subtraction(a, b) {
    if (typeof a === 'string' && isNaN(parseFloat(a))) {
        return 'Không hợp lệ';
    }
    if (typeof b === 'string' && isNaN(parseFloat(b))) {
        return 'Không hợp lệ';
    }
    return parseFloat(a) - parseFloat(b);
}
function multiplication(a, b) {
    if (typeof a === 'string' && isNaN(parseFloat(a))) {
        return 'Không hợp lệ';
    }
    if (typeof b === 'string' && isNaN(parseFloat(b))) {
        return 'Không hợp lệ';
    }
    return parseFloat(a) * parseFloat(b);
}
function division(a, b) {
    if (typeof a === 'string' && isNaN(parseFloat(a))) {
        return 'Không hợp lệ';
    }
    if (typeof b === 'string' && isNaN(parseFloat(b))) {
        return 'Không hợp lệ';
    }
    if (parseFloat(b) === 0) {
        return 'Không thể chia cho 0';
    }
    return parseFloat(a) / parseFloat(b);
}
// Sử dụng các hàm
console.log(addition(5, 10)); // Kết quả: 15
console.log(subtraction('20', 8)); // Kết quả: 12
console.log(multiplication('7', '4')); // Kết quả: 28
console.log(division(10, '2')); // Kết quả: 5
console.log(division('100', '0')); // Kết quả: Không thể chia cho 0
console.log(addition('abc', 5)); // Kết quả: Không hợp lệ
