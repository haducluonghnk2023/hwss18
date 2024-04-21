"use strict";
function add(a, b) {
    if (typeof a === 'string' && isNaN(parseFloat(a))) {
        return 'Không hợp lệ';
    }
    if (typeof b === 'string' && isNaN(parseFloat(b))) {
        return 'Không hợp lệ';
    }
    return parseFloat(a) + parseFloat(b);
}
function sub(a, b) {
    if (typeof a === 'string' && isNaN(parseFloat(a))) {
        return 'Không hợp lệ';
    }
    if (typeof b === 'string' && isNaN(parseFloat(b))) {
        return 'Không hợp lệ';
    }
    return parseFloat(a) - parseFloat(b);
}
function multi(a, b) {
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
console.log(add(5, 10)); // Kết quả: 15
console.log(sub('20', 8)); // Kết quả: 12
console.log(multi('7', '4')); // Kết quả: 28
console.log(division(10, '2')); // Kết quả: 5
console.log(division('100', '0')); // Kết quả: Không thể chia cho 0
console.log(add('abc', 5)); // Kết quả: Không hợp lệ
