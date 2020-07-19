// Author: Jasser Dhaouadi 



// Exercise 3


// REMARK: in order to run the code, please don't forget to comment out the section that is not used in testing
// for example: if you want to run the section of "function constructor", comment out the section of "Object.create()" 


// function constructor
function Person(teacherName) {
	this.name = teacherName;

}

const teacher = new Person('Peter');

Person.prototype.teach = function(subject) {
	console.log( this.name + " is now teaching " + subject);
}

teacher.teach("Math"); // Output: "Peter is now teaching Math"


// -------------------------------------------------
// Object.create() 
const Person = {
	name: "unknown"

};

const teacher = Object.create(Person);
teacher.name = "Peter";
teacher.teach = function (subject) {
	console.log( this.name + " is now teaching " + subject);
};
teacher.teach("Math");// Output: "Peter is now teaching Math"