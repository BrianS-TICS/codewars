// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// complete the function
function solution(string) {
    const strArr = [... string];
    let strNew = ''; 
    strArr.forEach( elemento => elemento.toUpperCase() === elemento ? strNew += " "+elemento : strNew += elemento)
    return strNew;
  }