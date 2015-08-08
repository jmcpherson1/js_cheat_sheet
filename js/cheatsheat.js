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

//TESTING - use a boolean to return true or false
"stingone" === "sting two";
>false //using 3 equals signs instead of two also checks the object type

"5"===5;   //Is 5 and 5 the same data type? Then: Is 5 equal to 5?
>true

5!==5;   //5 is NOT equaled to 5
>false



//Logic

//Functions