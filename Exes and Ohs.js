// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    const strToArr = [...str]
    const lettersO = strToArr.filter( letra => letra ==="o" || letra === "O" )
    const lettersX = strToArr.filter( letra => letra === "x" || letra ==="X")
    
    return lettersO.length === lettersX.length ? true : false;
}

