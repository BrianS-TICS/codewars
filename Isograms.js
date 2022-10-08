// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str){
   let i, j;
   const stringMinuscula = str.toLowerCase();
  
   for(i = 0; i < stringMinuscula.length; ++i) {
     
     for(j = i + 1; j < stringMinuscula.length; ++j) {
       
       if(stringMinuscula[i] === stringMinuscula[j]) {
         return false;
       }
       
     }
   }
   return true;
}