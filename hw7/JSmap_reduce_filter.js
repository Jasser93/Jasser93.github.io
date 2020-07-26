// Author: Jasser Dhaouadi 
// Student ID: 610099 
// Lab 7 : Re-implement some exercises from Lab 5 to use map/filter/reduce Array methods instead of for loops

function sum(arr){
	  let sum = 0; 
	  sum = arr.reduce(function(prevVal, elem, i, array){
							return prevVal + elem;
                      }); 
		return sum;
	}
  
function multiply(arr){
let result; 
  result = arr.reduce(function(prevVal, elem, i, array){
						return prevVal * elem;
				  }); 
	return result;

}
  
function reverse(arr){
let result; 
  result = arr.reduce(function(prevVal, elem, i, array){
						return elem + prevVal;
				  }); 
	return result;

}
  
function filterLongWords(arr, size) {
let result;
result = arr.filter(function(elem, i, array){
						return elem.length > size;
			  });
return result;
}
  
// Testing 
console.log(sum([1,5,6])); // 12
console.log(multiply([1,5,6])); // 30
console.log(reverse("abcd".split(""))); // "dcba"
console.log(filterLongWords(['abc','abcde','ab'],2)); //["abc", "abcde"]