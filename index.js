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

function id() {
  return "22222222"
}

function fn() {
  return 'Luke';
}

function sn() {
  return 'Linington';
}



function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

function checkObject(obj){
  obj.checked = true;
}

function checkObjectInside(obj){
  
  if (obj.data)
    obj.data.checked = true;
}

function arraySet(arr,i,n){
  if (arr[i] != null){
    arr[i] = n
  }
}

function addAll(arr){
  let result = 0
  for (let i = 0; i<arr.length; i++){
    result += arr[i]
  }
  return result
}

function larger(a,b){
  return (a>b) ? a: b
}

function largest(arr){
  let largest = (arr.length > 0)? arr[0]: null
  for (let i = 0; i<arr.length; i++){
    (arr[i]>largest) ? largest = arr[i] : null; 
  }
  return largest

}

function compare(a,b){ //comparing 2 arrays compares the array references rather than their contents
  return (JSON.stringify(a) == JSON.stringify(b))? true:false 
}

function addToAll(arr,n){
  for (let i = 0; i < arr.length; i++) {
    arr[i] += n;
  }
  return arr
}

let remembered = 0;
function rememberThis(keepsake){
  remembered = keepsake
}

function nArray(n){
  const array = [];
  for (let i = 0; i <n ; i++) {
    array.push(i+1)
    
  }
  return array
}

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
}

function divisors(arr,div){
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]%div == 0) array.push(arr[i]);
    
  }
  return array;
}

