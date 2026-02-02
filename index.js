/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';
// Change the id method in index.js to return your student ID.
function id() {
  return "22222222"
}
// Change the fn method in index.js to return your first name. 
function fn() {
  return 'Luke';
}
//Change the sn method in index.js to return your surname (family name).
function sn() {
  return 'Linington';
}


//Create an add function that accepts two parameters called a and b, and returns their sum.
function add(a, b) {
  return a + b;
}

//Create a subtract function that accepts two parameters, a and b, and subtracts b from a and returns the result. 
function subtract(a, b) {
  return a - b;
}

//Create a checkObject function that accepts an object called obj as a parameter and sets the object's property `checked` to `true`. 
function checkObject(obj){
  obj.checked = true;
}
//Create a `checkObjectInside` function that accepts an object called `obj` as a parameter and if that object has an object value in its `data` property, it sets *that* inner object's property `checked` to `true`. 
function checkObjectInside(obj){
  
  if (obj.data)
    obj.data.checked = true;
}

//Create an arraySet function that accepts three parameters `arr`, `i` and `n`. The first one is an array and the second one an index. The function should place the value of the third parameter into the array at an index specified by the second parameter, if (and only if) such an index is already in the array. Note that your function does not need to return a value because the array is modified directly. 
function arraySet(arr,i,n){
  if (arr[i] != null){
    arr[i] = n
  }
}

// Create a function `addAll` that accepts an array `arr` as a single parameter. Assuming an array of numbers is passed, return the result of adding all those numbers. 
function addAll(arr){
  let result = 0
  for (let i = 0; i<arr.length; i++){
    result += arr[i]
  }

  //for (const num of arr){
  //  total += num;
  //}
  return result
  //return arr.reduce((sum,n) => sum+n,0)  '=>' creates a temporary function. Reduce happens at the os level
}

//Create a function called `larger` that accepts two numbers `a` and `b`, and returns the larger. 
function larger(a,b){
  return (a>b) ? a: b //the brackets are unnecessary
}
//Create a function called `largest` that accepts an array `arr` of numbers and returns the largest number in the array. 
function largest(arr){
  let largest = (arr.length > 0)? arr[0]: null
  for (let i = 0; i<arr.length; i++){
    (arr[i]>largest) ? largest = arr[i] : null; 
  }
  return largest
  //return Math.max(...arr); does the same as the code above
  //... breaks the array elements as individual structures and passes them as individual parameters


}
//Create a function called compare that accepts two arrays of numbers (`a` and `b`) and compares the contents. It should return true if the arrays are identical and false otherwise. 
function compare(a,b){ //comparing 2 arrays compares the array references rather than their contents
  return (JSON.stringify(a) == JSON.stringify(b))? true:false 
  //do this with 3 equals signs rather than 2, also no need for the true:false
}

//Create a function `addToAll` that accepts an array `arr` and a number `n` as parameters. Assuming an array of numbers is passed, return the same array with the second parameter added to each number within the array - such that ([1,2,3], 1) should return [2,3,4]. 
function addToAll(arr,n){
  for (let i = 0; i < arr.length; i++) {
    arr[i] += n;
  }
  return arr
}

//Create a function `rememberThis` with one parameter `keepsake` which should be stored in a global variable called 'remembered' (which you need to declare). Each subsequent call to rememberThis should overwrite the value of 'remembered'. Rerun

let remembered = 0;
function rememberThis(keepsake){
  remembered = keepsake
}
//Write a function `nArray` that takes a parameter `n` and returns an array with `n` numbers. The numbers in the array should increase from 1 to `n`. 
function nArray(n){
  const array = [];
  for (let i = 0; i <n ; i++) {
    array.push(i+1)
    
  }
  return array
}

// Create a function `addAllOpt` that sums an array (`arr`). If the array is not present or empty, return 0 

function addAllOpt(arr){
  if (arr == null || arr.length == 0){
    return 0;
  }
  else{
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
       total += arr[i];
      
    }
    return total;
  }
  //if (!arr || !arr.length) return 0;
  //return addAll(arr);
}

//Write a function `divisors` that takes takes two parameters `arr` and `div`, an array of numbers and a divisor. Return a new array containing only the numbers in the first array that are exactly divisible by the second parameter. 
function divisors(arr,div){
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]%div == 0) array.push(arr[i]);
    
  }
  return array;
  //return arr.filter((num)=> !(num % div));
}
//Write a function `multiples` that takes two parameters `n` and `m`. It should return a new array of length `n` where the numbers inserted increase from 1*m to n*m. 
function multiples(n,m){
  let array = [];
  for (let i = 1; i < n+1; i++) {
    array.push(i*m);
    
  }
  return array;
}

