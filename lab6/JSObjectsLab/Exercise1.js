

// Author: Jasser Dhaouadi 


// Exercise 1 
// I made a function on String object that is able to accecpt an array of banned words or only a string of 1 banned word 

var val = new String("This is a long string");
String.prototype.filter = function(arr){
	let splitted = this.split(" ");
  // ---------------------------------------
  // if the passed argument is array of strings
  if(typeof(arr)=="object"){
    for(let i=0; i<arr.length;i++){
      for(let j=0; j<splitted.length;j++){
        if(arr[i] == splitted[j]){
          splitted[j] ="";
        }
      }
    }
  }
  // ---------------------------------------
  // if the passed argument is String
  if(typeof(arr)=="string"){
  	for(let j=0; j<splitted.length;j++){
    	if(arr == splitted[j]){
      	splitted[j] ="";
      }
  	}
  }
  // ---------------------------------------
  let result = "";

  for(let i=0; i<splitted.length;i++){
  	if(splitted[i] != ""){
    	result += splitted[i]+" ";
    }
    
  }

  // Removing the last extra space 
  result= result.substr(0,result.lastIndexOf(" "));
  return result;
}


console.log(val.filter(["is", "string"])); //output: "This a long"

console.log(val.filter("is")); // output: "This a long string"