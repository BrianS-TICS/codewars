// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let sumado = 0;
    if (arr) {
        sumado = arr.reduce((suma, elemento) => {
            if (elemento > 0) {
                suma = suma + elemento;
            }
            return suma;
        }, 0);
    }
    return sumado;
}