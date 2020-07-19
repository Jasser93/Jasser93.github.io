// Author: Jasser Dhaouadi 



// Exercise 4


// REMARK: in order to run the code, please don't forget to comment out the section that is not used in testing
// for example: if you want to run the section of "object prototype approach", comment out the section of "function constructor approach"


// --- > object prototype approach
const Person = {
	name: "Peter",
	age: "25",
	greeting: function() {
  		console.log("Greetings, my name is " + this.name +" and I am "+ this.age +" years old.");
	},		
	salute: function(){
				console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
	}

};

const student = Object.create(Person);
student.major ="Math";
student.greeting = function() {
					console.log( "Greetings, my name is " + this.name +" and I am studying "+ this.major) ;
				};

student.greeting(); // Output: "Greetings, my name is Peter and I am studying Math"
student.salute();  // output: "Good morning!, and in case I dont see you, good afternoon, good evening and good night!" 


const Professor = Object.create(Person);
Professor.department ="Computer Science";
Professor.salute = function() {
					console.log( "Good day, my name is " + this.name +" and I am in the "+ this.department + " department.") ;
					};

Professor.greeting(); // Output: "Greetings, my name is Peter and I am 25 years old."
Professor.salute(); // output: "Good day, my name is Peter and I am in the Computer Science department."



// --------------------------------------------------------------------------------------------------------------------------

// --- > function constructor approach


function Person() {
	this.name = "Peter";
	this.age = "25";
	this.greeting = function() {
  		console.log( "Greetings, my name is " + this.name +" and I am "+ this.age +" years old.");
	};		
	this.salute = function(){
		console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
	};

};

const student = new Person();
student.major ="Math";
student.greeting = function() {
					console.log( "Greetings, my name is " + this.name +" and I am studying "+ this.major) ;
				};

student.greeting(); // Output: "Greetings, my name is Peter and I am studying Math"
student.salute();  // output: "Good morning!, and in case I dont see you, good afternoon, good evening and good night!" 


const Professor = new Person();
Professor.department ="Computer Science";
Professor.salute = function() {
				console.log( "Good day, my name is " + this.name +" and I am in the "+ this.department + " department.") ;
			};

Professor.greeting(); // Output: "Greetings, my name is Peter and I am 25 years old."
Professor.salute(); // output: "Good day, my name is Peter and I am in the Computer Science department."



















