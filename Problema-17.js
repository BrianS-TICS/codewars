// Complete the solution so that it reverses the string passed into it.

// 'world'  => 'dlrow'
// 'word'   => 'drow'

function solution(str) {
    let arr = [];
    let resultado = "";
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }
    console.log(resultado)
    for (let i = (arr.length - 1); i >= 0; i--) {
        resultado = resultado + arr[i]
    }

    return resultado;
}