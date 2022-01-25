const removeFromArray = function() {
    let array = arguments[0];
    for (let u=1; u<arguments.length; u++){
        for (let i=0; i<array.length; i++){
            if (array[i] === arguments[u]){
                array.splice(i, 1);
                i--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
