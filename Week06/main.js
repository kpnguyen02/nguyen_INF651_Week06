/* Practice Assignment 4:
//Student ID: 66504826

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Create a function named helloWorld that returns the exact phrase:
// "Hello World!".

//function helloWorld
function helloWorld()
{
	//returns "Hello World!"
	return "Hello World!"
}

// 2) Create a function named greeting that will accept a "name" parameter
// and return the string: "Hello, name." where "name" is replaced
// with whatever value we want to provide when calling the function.

//function greeting
function greeting(name)
{
	//returns "Hello, name." where "name" is replaced with whatever value we want to provide when calling the function.
	return "Hello, " + name + "."
}


// 3) Create a function named divisibleByThree that accepts a "number" parameter
// and will return accurate boolean data depending on the value
// of the "number" parameter. Hint: Try the modulus operator.

//function divisibleByThree
function divisibleByThree(number)
{
	//if number is divisible by 3
	if(number % 3 == 0)
	{
		//returns true
		return true
    }
	//otherwise 
	else
    {
		//returns false
		return false
    }
}



// 4) Create a function named averageAge that accepts 3 parameters:
// num1, num2, and num3. The function should return the average of
// all three numbers, but the parameter num3 is missing, it should
// return the average of num1 and num2. Returned results should be
// rounded to the nearest integer. Hint: Use a Math method to round.


//function averageAge
function averageAge(num1, num2, num3)
{
	//variable to store average
	avg = null
	
	//if num3 is missing
	if(num3 == undefined)
	{
		//calculating average of num1 and num2
		avg = (num1 + num2) / 2
	}
	//if num3 is not missing
	else
    {
		//calculating average of num1, num2 and num3
		avg = (num1 + num2 + num3) / 3
    }
	//returns result rounded to the nearest integer
	return Math.round(avg)
}


// 5) Create a function named leetSpeak that accepts a word
// as a parameter and returns the same word except all of the letter
// e occurances (lower case only) are replaced by the number 3.
// Replace any lower case a with the number 4, too.
// Hints: You will use a loop. You will use conditionals.
// Example: leet is returned as l33t. speak is returned as sp34k.


//function leetSpeak
function leetSpeak(word)
{
	//replacing letter 'a' with 4
	var word = word.replace(/a/g, "4");
	
	//replacing letter 'e' with 3
	var word = word.replace(/e/g, "3");
	
	//returns the modified word
	return word
}
