// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
    let bool = false;
    // Calcula promedio sumando los elementos del array y dividiendo entre su longitud
    const promedio = (classPoints.reduce((suma, elemento) => suma + elemento) / classPoints.length)

    if (yourPoints > promedio) {
        bool = true;
    }

    return bool;
}