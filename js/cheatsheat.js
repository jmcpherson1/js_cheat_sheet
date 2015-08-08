//VARIABLES - a variable is simply a container for a value//////////

//String:
"Hello World!"

//Number: (all numbers in JS are floats)
var x=5

//Array: List (can include any data types; numbers do not need quotations)
var week ['m', 't', 'w', 'th', 'f', 's', 'sun']

//Booleans: True, False
var isNight=true;


//DEBUGGING (alerts, comments, the console)////////////
//Alerts: pop up when page loads
alert("Hello World"); 

//Comments: render onto the page
document.getElementById("monitor").innerHTML = "Hi there! :)";

//Console: Access Browser>View>Javascript Console (Cmd+Opt+J)
console.log("Hello World");


//DIFFERENT DATA TYPES


//ARRAYS
//Polymorphic: array that contains different data types
var array=["Al", -6, "true", ["t", "th"]];

//Multidimensional:
var array2=[ ["m", "t"]; ["w", "th"]; ["f", "s"] ["sun"] ];

	// declare your mult-dimensional array
	var cars = [ ["Porsche", "Camero"], ["Camry", "Prius"] ];
	// access the first array inside, then the first item inside that array
	console.log(cars[0][0]);
	//will return
	> "Porsche"

	var week = [ weekdays, weekend ];
	console.log( week[0][3] );
	> "Thursday"

//TESTING - use a boolean to return true or false
"stingone" === "sting two";
>false //using 3 equals signs instead of two also checks the object type

"5"===5;   //Is 5 and 5 the same data type? Then: Is 5 equal to 5?
>true

"stringone"!=="string two"; //Test is two strings are NOT equal
>true

5 > 10;	  //Test if one number is greater than another
>false 

//IF statement: allows to run code only if a certain test evaluates to true
if(5>10){
	console.log("You'll never see this in the console because 5 is not greater than 10");	
}

if(5<10){
	console.log("But you'll definitely see this");
}

  //Another Example:
var z = 6;
if( z < 10 ){
	alert("The value of z is " + z + " and it's less than 10");
}else{
	alert( z + " is not greater than 10");
}
if( z < 10 ){
	alert( "The value of z is " + z + " and it's less than 7");
}else{
	alert( z + " is not greater than 10");
}

//LOGIC

//Functions