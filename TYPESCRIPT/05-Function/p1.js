function a() {
    alert("THis is a default function");
}
a();
function add(x, y) {
    console.log("X = ", x);
    console.log("Y = ", y);
}
add("Angular", "React");
var sum = function (x, y) {
    return x + y;
};
console.log("SUM = ", sum(10, 20));
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applyDiscount(100)); // 95
function applyDiscount1(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applyDiscount1(100)); // 95
function getTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log("getTotal() = ", getTotal()); // 0
console.log("getTotal(10, 20) = ", getTotal(10, 20)); // 30
console.log("getTotal(10, 20, 30) = ", getTotal(10, 20, 30)); // 60
// FUNCTION OVERLOADING
function add1(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    else if (typeof a === 'number' && typeof b === 'string') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'number') {
        return a + b;
    }
}
console.log("ADD1 = ", add1(10, 20));
console.log("ADD1 = ", add1("10", "20"));
console.log("ADD1 = ", add1(10, "20"));
console.log("ADD1 = ", add1("10", 20));
function add2(a, b) {
    return a + b;
}
console.log("ADD2 Number = ", add2(10, 20));
console.log("ADD2 String = ", add2("10", "20"));
console.log("ADD2 Any = ", add2("true", "false"));
