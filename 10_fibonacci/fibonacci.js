const fibonacci = function(num) {
    if (num < 0) {return "OOPS"}

    let fibArr = [0, 1];
    for (let i = 2; i <= +num; i++) {
        fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
    }
    return fibArr[num];
};

console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
