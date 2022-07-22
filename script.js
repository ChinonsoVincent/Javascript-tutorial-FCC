// in-line comments

/* this is

 multi-line comment
 */

/* 
data types and variables
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

/*
escape sequences
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
function welcomeToBooleans() {
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
function testNotEqual(val) {
	if (val != 99) {
		return "Not Equal";
	}
	return "Equal";
}

console.log(testNotEqual(10));

// Comparison with Strict Inequality Operator
function testStrictNotEqual(val) {
	if (val !== 17) {
		return "Not Equal";
	}
	return "Equal";
}

console.log(testStrictNotEqual(10));

// Comparison with the Logical and Operator
function testGreaterThan(val) {
	if (val > 100) {
		return "Over 100";
	}
	if (val > 10) {
		return "Over 10";
	}
	return "10 or under";
}

console.log(testGreaterThan(10));

// Comparison with the Greater Than or Equal to Operator
function testGreaterOrEqual(val) {
	if (val >= 20) {
		return "20 or Over";
	}
	if (val >= 10) {
		return "10 or Over";
	}
	return "Less than 10";
}

console.log(testGreaterOrEqual(10));

// Comparison with the Less Than Operator
function testlessThan(val) {
	if (val < 25) {
		return "Under 25";
	}
	if (val < 55) {
		return "under 55";
	}
	return "55 or Over";
}
console.log(testlessThan(10));

// Comparison with the Less Than or Equal to Operator
function testLessOrEqual(val) {
	if (val <= 12) {
		return "Smaller Than or Equal to 12";
	}
	if (val <= 24) {
		return "Smaller Than or Equal to 24";
	}
	return "More Than 24";
}

console.log(testLessOrEqual(10));

// Comparison with the Logical and Operator
function testLogicalAnd(val) {
	if (val <= 50 && val >= 25) {
		return "Yes";
	}
	return "No";
}

console.log(testLogicalAnd(10));

// Comparison with the Logical or Operator
function testLogicalOr(val) {
	if (val < 10 || val > 20) {
		return "Outside";
	}
	return "Inside";
}

console.log(testLogicalOr(15));

// Else Statements
function testElse(val) {
	var result = "";
	if (val > 5) {
		result = "Bigger than 5";
	} else {
		result = "5 or Smaller";
	}
	return result;
}

console.log(testElse(4));

// Else If Statements
function testElseIf(val) {
	if (val > 10) {
		return "Greater than 10";
	} else if (val < 5) {
		return "Smaller than 5";
	} else {
		return "Between 5 and 10";
	}
}

console.log(testElseIf(7));

//Logical order in If Else Statements
function orderMyLogic(val) {
	if (val < 5) {
		return "Less than 5";
	} else if (val < 10) {
		return "Less than 10";
	} else {
		return "Greater than or Equal to 10";
	}
}

console.log(orderMyLogic(3));

//Chaining If Else Statements
function testSize(num) {
	if (num < 5) {
		return "Tiny";
	} else if (num < 10) {
		return "Small";
	} else if (num < 15) {
		return "Medium";
	} else if (num < 20) {
		return "Large";
	} else {
		return "Huge";
	}
}
console.log(testSize(20));

// Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
	if (strokes == 1) {
		return names[0];
	} else if (strokes <= par - 2) {
		return names[1];
	} else if (strokes == par - 1) {
		return names[2];
	} else if (strokes == par) {
		return names[3];
	} else if (strokes == par + 1) {
		return names[4];
	} else if (strokes == par + 2) {
		return names[5];
	} else if (strokes >= par + 3) {
		return names[6];
	}
}
console.log(golfScore(5, 1));

// Switch Statements
function caseInSwitch(val) {
	var answer = "";
	switch (val) {
		case 1:
			answer = "alpha";
			break;
		case 2:
			answer = "beta";
			break;
		case 3:
			answer = "gamma";
			break;
		case 4:
			answer = "delta";
			break;
	}
	return answer;
}

console.log(caseInSwitch(4));

//Delta Option in Switch Statements
function switchOfStuff(val) {
	var answer = "";
	switch (val) {
		case "a":
			answer = "apple";
			break;
		case "b":
			answer = "bird";
			break;
		case "c":
			answer = "cat";
			break;
		default:
			answer = "stuff";
			break;
	}
	return answer;
}

console.log(switchOfStuff("b"));

// Identifying Identical Options in Switch Statements
function sequentialSizes(val) {
	var answer = "";
	switch (val) {
		case 1:
		case 2:
		case 3:
			answer = "Low";
			break;
		case 4:
		case 5:
		case 6:
			answer = "Mid";
			break;
		case 7:
		case 8:
		case 9:
			answer = "High";
			break;
	}
	return answer;
}

console.log(sequentialSizes(5));

// Replacing the If Else Chains with Switch
function chainToSwitch(val) {
	var answer = "";
	if (val === "bob") {
		answer = "Marley";
	} else if (val === 42) {
		answer = "The answer";
	} else if (val === 1) {
		answer = "There is no #1";
	} else if (val === 99) {
		answer = "Missed by this much!";
	} else if (val === 7) {
		answer = "Ate Nine";
	}
	return answer;
}

console.log(chainToSwitch("bob"));

//switching the above from if else chains to switch
function chainToSwitch(val) {
	var answer = "";
	switch (val) {
		case "bob":
			answer = "Marley";
			break;
		case 42:
			answer = "The answer";
			break;
		case 1:
			answer = "There is no #1";
			break;
		case 99:
			answer = "Missed by this much!";
			break;
		case 7:
			answer = "Ate Nine";
			break;
	}
	return answer;
}

console.log(chainToSwitch("bob"));

// Return a Boolean from a function
function isLess(a, b) {
	return a < b;
}

console.log(isLess(10, 15));

// Returing Early Pattern from Functions
function abTest(a, b) {
	if (a < 0 || b < 0) {
		return undefined;
	}
	return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(-2, 2));

// Counting cards
var count = 0;

function cc(card) {
	switch (card) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count++;
			break;
		case 10:
		case "J":
		case "Q":
		case "K":
		case "A":
			count--;
			break;
	}
	var holdbet = "Hold";
	if (count > 0) {
		holdbet = "Bet";
	}
	return count + " " + holdbet;
}
cc(2);
cc(3);
cc(7);
cc("A");
cc("A");
console.log(cc(4));

// Build JavaScript Objects
var ourDog = {
	name: "Camper",
	legs: 4,
	tails: 1,
	friends: ["everything"],
};

var myDog = {
	name: "Smart",
	legs: 4,
	tails: 1,
	friends: ["None"],
};

// Accessing Object Properties with Dot Notation
var testObj = {
	hat: "ballcap",
	shirt: "jersey",
	shoes: "cleats",
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

console.log(shirtValue);

// Accessing Object Properties with Bracket Notation, used for objects in which the names have spaces
var testObj = {
	"an entree": "hamburger",
	"my side": "vergies",
	"the drink": "water",
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

console.log(drinkValue);

//Accessing Object Properties with Variables
var testObj = {
	12: "Namath",
	16: "Montana",
	19: "Unitas",
};

var playerName = 16;
var player = testObj[playerName];
console.log(player);

// Updating Object Properties
var ourDog = {
	name: "Camper",
	legs: 4,
	tails: 1,
	friends: ["everything"],
};

ourDog.name = "Happy Camper";

var myDog = {
	name: "Smart",
	legs: 4,
	tails: 1,
	friends: ["freeCodeCamp Campers"],
};

myDog.name = "Smart Coder";
console.log(myDog);

//Add New Properties to an Object
var ourDog = {
	name: "Camper",
	legs: 4,
	tails: 1,
	friends: ["everything"],
};

ourDog.bark = "bow-wow";
console.log(ourDog);

var myDog = {
	name: "Smart",
	legs: 4,
	tails: 1,
	friends: ["freeCodeCamp Campers"],
};

myDog["bark"] = "woof";
console.log(myDog);

// Deleting Properties from an Object
var ourDog = {
	name: "Camper",
	legs: 4,
	tails: 1,
	friends: ["everything"],
	bark: "bow-wow",
};
console.log(ourDog);

delete ourDog.bark;
console.log(ourDog);

var myDog = {
	name: "Smart",
	legs: 4,
	tails: 1,
	friends: ["freeCodeCamp Campers"],
	bark: "woof",
};

myDog.tails;

// Using Objects for Lookups
function phoneticsLookup(val) {
	var result = "";
	// Do this instead of the witch below
	var lookup = {
		alpha: "Adams",
		bravo: "Boston",
		charlie: "Chicago",
		delta: "Denver",
		echo: "Easy",
		foxtrot: "Frank",
	};

	/* This way longer
	switch (val) {
		case "alpha":
			result = "Adams";
			break;
		case "bravo":
			result = "Boston";
			break;
		case "charlie":
			result = "Chicago";
			break;
		case "delta":
			result = "Denver";
			break;
		case "echo":
			result = "Easy";
			break;
		case "foxtrot":
			result = "Frank";
			break;
	}
	*/

	result = lookup[val];

	return result;
}

console.log(phoneticsLookup("charlie"));

// Testing Object for Properties
var myObj = {
	gift: "pony",
	pet: "kitten",
	bed: "sleigh",
};

function checkObj(checkProp) {
	if (myObj.hasOwnProperty(checkProp)) {
		return myObj[checkProp];
	} else {
		return "Not Found";
	}
}

console.log(checkObj("gift"));
console.log(checkObj("hello"));

// Manipulating Complex Objects
var myMusic = [
	{
		artist: "Billy Joel",
		title: "piano Man",
		release_year: 1973,
		formats: ["CD", "8T", "LP"],
		gold: true,
	},
	{
		artist: "Beau Carnes",
		title: "Cereal Man",
		release_year: 2003,
		formats: ["YouTube Video"],
	},
];

// Accessing Nested Objects
var myStorage = {
	car: {
		inside: {
			"glove box": "maps",
			"passenger seat": "crumbs",
		},
		outside: {
			trunk: "jack",
		},
	},
};

var globeBoxContents = myStorage.car.inside["glove box"];

console.log(globeBoxContents);

// Accessing Nested Arrays
var myPlants = [
	{
		type: "flowers",
		list: ["rose", "tulip", "dandelion"],
	},
	{
		type: "trees",
		list: ["fir", "pine", "birch"],
	},
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);

// Record Collection
var collection = {
	2548: {
		albumTitle: "Slippery When Wet",
		artist: "Bon Jovi",
		tracks: ["Let It Rock", "You Give Love a Bad Name"],
	},
	2468: {
		albumTitle: "1999",
		artist: "Prince",
		tracks: ["1999", "Little Red Corvette"],
	},
	1245: {
		artist: "Robert Palmer",
		tracks: [],
	},
	5439: {
		albumTitle: "ABBA Gold",
	},
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
	if (value === "") {
		delete collection[id][prop];
	} else if (prop === "tracks") {
		collection[id][prop] = collection[id][prop] || [];
		collection[id][prop].push(value);
	} else {
		collection[id][prop] = value;
	}
	return collection;
}
updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA"));

// Iterate with Loops
var myArray = [];

var i = 0;
while (i < 5) {
	myArray.push(i);
	i++;
}

console.log(myArray);

// Iterate with For Loops
var ourArray = [];

for (var i = 0; i < 5; i++) {
	ourArray.push(i);
}

var myArray = [];
for (var u = 1; u < 6; u++) {
	myArray.push(u);
}
console.log(myArray);

// Iterate Odd Numbers with a For Loops
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
	ourArray.push(i);
}
console.log(ourArray);

var myArray = [];
for (var i = 1; i < 10; i += 2) {
	myArray.push(i);
}
console.log(myArray);

// Count Backwards with a For Loop
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
	ourArray.push(i);
}
console.log(ourArray);

var myArray = [];
for (var i = 9; i > 0; i -= 2) {
	myArray.push(i);
}
console.log(myArray);

// Iterate Through an Array with a For Loops
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
	ourTotal += ourArr[i];
}
console.log(ourTotal);

var myArr = [2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
	total += myArr[i];
}

console.log(total);

// Nesting a For Loop
