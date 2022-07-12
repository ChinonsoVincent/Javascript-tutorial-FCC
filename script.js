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
