// in-line comments

/* this is

 multi-line comment
 */

/* data types and variables
- strings are texts
-numbers are numbers
- undefined is something that hasn't been defined, maybe a variable that hasn't been set to be anything
- null means nothing, it has been set but it is set to nothing
- boolean means true or false
- symbol is an immutable primitive value that is unique
- object can store a lot ofdifferent key values pairs
*/

// variables are used to store data dynamically, the ways to declare a variable icludes:
var myName = "Vincent"; //can be used through out the program and can be changed

myName = 8;

//the second way is
let ourName = "FreeCodeCamp"; //can only be used within the scope of where you declare that

//the thrid way is
const pi = 3.14; // should never be change

// storing values with assignment operators
var a; //declaring a variable
a = 7; // a is not assigned

var b = 2; //assigning a variable

console.log(a);

//initializing variables with assignment operators
var a = 9;

//uninitialized variables
var a;
var b;
var c;

// Initialized these three variable
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";
console.log(c);

// Case sensitivity in variables
//declaration
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

//Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//adding numbers
var sum = 10 + 10;
console.log(sum);

//substracting numbers
var difference = 45 - 33;
console.log(difference);

//mulitplying numbers
var product = 8 * 10;
console.log(product);

//dividing numbers
var quotient = 66 / 33;
console.log(quotient);

//incrementing numbers, adding 1 to it
var myVar = 87;
myVar = myVar + 1;
// another way of doing it is:
myVar++; // same as myVar = myVar + 1;
console.log(myVar);

//decrementing numbers, substracting 1 to it
var myVar = 11;
myVar--;
console.log(myVar);
//decimal numbers, also referred to as floating numbers or floats
var ourDecimal = 5.7;
var myDecimal = 0.009;
//multiplying and dividing decimals is the same as multiplyinh integers

//finding a remainder
var remainder;
remainder = 11 % 3;
console.log(remainder);

// compound assignment with augumented addition
var a = 3;
a += 12;
//this is the same as a = a + 12;

// compound assignment with augumented substraction
var b = 9;
b -= 12;
//this is the same as b = b - 12;

// compound assignment with augumented multiplication
var c = 9;
c *= 12;
//this is the same as c = c * 12;

// compound assignment with augumented division
var d = 9;
d /= 12;
//this is the same as d = d / 12;

//declare string variables, strings can be put in "" or '' or ``
var firstName = "Vincent";
var lastName = "Nwafili";

//escaping literal quotes in strings
var myStr = 'I am a "double quoted" string inside "double quotes"';
console.log(myStr);

//quoting Strings with Single Quotes
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
//another way is to use back ticks, this enable the use of both single and double quotes inside the string, like below
var myStr = `<a href="http://www.example.com" target='_blank'>Link</a>`;

/*escape sequences
code    output
\'      single quote
\"	    double quote
\\	    backslash
\n	    newline
\r	    carriage return
\t	    tab
\b	    word boundary
\f	    form feed

*/
var myStr = "FirtsLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

//Concatenating Strings with Plus Operator
var ourStr = "I come first. " + "I come second.";
var myStr = "This is the Start. " + "This is the end.";
console.log(myStr);

//Concatenating Strings with the Plus Equals Operator
var ourStr = "I come first. ";
ourStr += "I come second.";

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
console.log(myStr);

//Constructing Strings with Variables
var ourNames = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourNames + ", how are you?";

var myName = "Vincent";
var myStr = "My name is " + myName + " and I am well";
console.log(myStr);

//Appending Variables to Strings
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

var someAdjective = "wworthwhile";
var myStr = "Learning code is ";
myStr += someAdjective;
console.log(myStr);

//Find the Length of a String
var firstNameLength = 0;
var firstName = "Vincent";
firstNameLength = firstName.length;
console.log(firstNameLength);

var lastNameLength = 0;
var lastName = "Nwafili";
lastNameLength = lastName.length;
console.log(lastNameLength);

//Use Bracket Notation to Find the First Character in a String
var firstLetterOfFirstName = "";
var firstName = "Vincent";
firstLetterOfFirstName = firstName[0];

var firstLetterOfLastName = "";
var lastName = "Nwafili";
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

//String Immutability
var myStr = "Jello World";
myStr = "Hello World";

// Bracket Notation to Find the Nth Character in a String
var firstName = "Vincent";
var secondLetterOfFirstName = firstName[1];

var lastName = "Nwafili";
var thirdLetterOfLastName = lastName[2];

// Bracket Notation to Find the Last Character in a String
var firstName = "Vincent";
var lastLetterOfFirstName = firstName[firstName.length - 1];

var lastName = "Nwafili";
var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);

// Bracket Notation to Find Nth to the Last Character in a String
var firstName = "Vincent";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];
console.log(thirdToLastLetterOfFirstName);

var lastName = "Nwafili";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
console.log(secondToLastLetterOfLastName);

//World Blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
	var result = "";
	result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
	return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

//Store Multiple Values in one Variable using JavaScript Arrays
var ourArray = ["John", 23];

var myArray = ["Vincent", 26];

//Nested Arrays
var ourArray = [
	["the universe", 42],
	["everything", 101010],
];

var myArray = [
	["Bulls", 23],
	["White Sox", 45],
];

//Access Array Data with Indexes
var ourArray = [50, 60, 70];
var ourData = ourArray[0]; //equals 50

var myArray = [50, 60, 70];
var myData = myArray[0];
console.log(myData);

// Modify Array Data with Indexes
var ourArray = [18, 64, 99];
ourArray[1] = 45; // ourArray now equals [18,45,99]

var myArray = [18, 64, 99];
myArray[0] = 45;
console.log(myArray);

//Access Multi-Dimmensional Arrays with indexes
var myArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[[10, 11, 12], 13, 14],
];
var myData = myArray[2][1];
console.log(myData);

//Manipulate Arrays with push()
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "Joy"]);

var myArray = [
	["John", 23],
	["cat", 2],
];
myArray.push(["Dog", 3]);

//Manipulate Arrays with pop()
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();

var myArray = [
	["John", 23],
	["cat", 2],
];
var removedFrommyArray = myArray.pop();
console.log(removedFrommyArray);

//Manipulate Arrays with shift()
var ourArray = ["Stimpson", "J", "cat"];
var removedFromOurArray = ourArray.shift();

var myArray = [
	["John", 23],
	["Dog", 3],
];
var removedFrommyArray = myArray.shift();
console.log(removedFrommyArray);

//Manipulate Arrays with unshift()
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");

var myArray = [
	["John", 23],
	["Dog", 3],
];
myArray.shift();
myArray.unshift("Paul", 35);

//shopping list
var myList = [
	["Cereal", 3],
	["milk", 2],
	["Bananas", 3],
	["Juice", 2],
	["Eggs", 12],
];

//Write reusuable codes with Function
function ourReusableFunction() {
	console.log("Heyya, World");
}
ourReusableFunction();

function reusableFunction() {
	console.log("Hi World");
}
reusableFunction();

// Passing Values to Functions with Arguments
function ourFunctionWithArgs(a, b) {
	console.log(a - b);
}
ourFunctionWithArgs(10, 5);

function FunctionWithArgs(a, b) {
	console.log(a + b);
}
FunctionWithArgs(10, 5);

// Global Scope and Functions
var myGlobal = 5; // this is global because it is not within any function

function fun1() {
	var oopsGlobal = 5; //this is a local scope because it is contained in a function
}

function fun2() {
	var output = "";
	if (typeof myGlobal != "undefined") {
		output += "myGlobal: " + oopsGlobal;
	}
	if (typeof oopsGlobal != "undefined") {
		output += "oopsGlobal: " + oopsGlobal;
	}
	console.log(output);
}

//Local Scope and Function
function myLocalScope() {
	var myVar = 5;
	console.log(myVar);
}
myLocalScope();
console.log(myVar);

//Global vs Local Scope in Function
var outerWear = "T-Shirt";
function myOutfit() {
	var outerWear = "Sweater";
	return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

// Return a value from a Function with Return
function minusSeven(num) {
	return num - 7;
}
console.log(minusSeven(10));

function timesFive(num) {
	return num * 5;
}
console.log(timesFive(5));

// Understanding undefined value returned from a function
var sum = 0;
function addThree() {
	sum = sum + 3;
}

function addFive() {
	sum += 5;
}
console.log(addFive()); //undefined

// Assignment with a returned value
var changed = 0;
function change(num) {
	return (num + 5) / 3;
}
changed = console.log(change(10));

var processed = 0;
function processedArg(num) {
	return (num + 3) / 5;
}
processed = processedArg(7);

// Stand In Line
function nextInLine(arr, item) {
	arr.push(item);
	return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Boolean Values
function welcomeToBolleans() {
	return true;
	return false;
}

// Use conditional Logic with if statements
function ourTrueOrFalse(isItTrue) {
	if (isItTrue) {
		return "Yes, it's true";
	}
	return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
	if (wasThatTrue) {
		return "Yes, that was true";
	}
	return "No, that was false";
}

console.log(trueOrFalse(true));

// Comparison with the equality operator
function testEqual(val) {
	if (val == 12) {
		return "Equal";
	}
	return "Not Equal";
}
console.log(testEqual(10));

// Comparison with Strict Equality Operator
function testStrict(val) {
	if (val === 7) {
		return "Equal";
	}
	return "Not Equal";
}
console.log(testStrict(10));

// Practise Comparing Different Values
function compareEquality(a, b) {
	if (a == b) {
		return "Equal";
	}
	return "Not Equal";
}
console.log(compareEquality(10, "10")); // Equal

function compareEquality2(a, b) {
	if (a === b) {
		return "Equal";
	}
	return "Not Equal";
}
console.log(compareEquality2(10, "10")); // Not Equal

// Comparing with the inequality Operator
