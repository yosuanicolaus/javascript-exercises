const palindromes = function (str) {
    const filtered = str.replace(/[\W_]/g, '');
    const final = filtered.toLowerCase();

    let i = 0;
    let j = final.length - 1;

    while (i < j) {
        if (final[i] == final[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
