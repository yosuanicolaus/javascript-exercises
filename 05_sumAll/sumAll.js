const sumAll = function(start, end) {

    if (start < 0 || end < 0 || typeof start !== `number` || typeof end !== `number`) return `ERROR`;

    let sum = 0;

    if (start > end){
        // swap the variable so that start is always lower
        end = [start, start = end][0];
    }

    for (start; start <= end; start++){
        sum += start;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
