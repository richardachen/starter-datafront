/* ---------------------------------------------------------
  The logic of the compare function is as follows.

  if (compareFunction(a,b) < 0) a comes first, a lower index
  if (compareFunction(a,b) > 0) b comes first, b lower index
  if (compareFunction(a,b) === 0) leave a and b unchanged
  --------------------------------------------------------- */

function compare(a, b) {
    // write the callback 
    return a-b;
}
  
var numbers = [4,2,5,1,3];

numbers.sort(compare);
console.log(numbers);