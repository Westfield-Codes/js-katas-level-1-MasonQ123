/* Var, Prompt and Alert Katas */

/* COLOR KATAS */

/* No Prompt */
// make a string variable for a color, set it equal to your favorite
var color = "blue";
// alert the message" "My favorite color is " plus the color
alert("My favorite color is "+ color);


/* Prompt */
// make a string variable for color, but prompt the user for their favorite color.
var color = prompt("What is your favorite color?");
// alert color plus " is a nice color!" - note the space in the quotes.
alert(color + " is a nice color!")

/* Var Alert Prompt Conditional */
// make a string variable for color, prompt the user for their favorite
var color = prompt("What is your favorite color?");
// if user enters "black" alert "Black is not really a color." ]
if (color == "black") alert("Black is not really a color.")
// otherwise alert color " is a nice color!"
else alert(color + " is a nice color!");


/* AGE */

/* No Prompt */
// make an integer variable for age, set it equal to your age
var age = 17;
// make a string variable for name, set it to your name
var fname = "Mason";
// alert name is age years old
alert(fname + " is " + age + " years old.");


/* Prompt */
// make an integer variable for age, prompt user for their age
var age = prompt("How old are you?")
// make a string variable for name, prompt user for their name
var fname = prompt("What's your name?")
// alert name is age years old
 alert(fname + " is " + age + " years old.");

/* Prompt with Conditional */
var age = prompt("How old are you?")
// make a string variable for name, prompt user for it
var fname = prompt("What's your name?")
// if age is greater than 16, alert "you don't look that old!"
if (age > 16 ) alert("You don't look that old!");
// otherwise alert name is age years old
else alert(fname + " is " + age + " years old.");

/* ICE CREAM */

/* No Prompt */
// make a string variable for favorite ice cream flavor.
var flavor = "chocolate";
// make an integer variable for number of scoops on the cone.
var scoops = 4;
// alert "You want " scoops "scoops of " flavor
alert("You want " + scoops + " scoops of " + flavor + " flavored ice cream.");

/* Var Alert Prompt */
// make a string variable for favorite ice cream flavor, prompt user for it
var flavor = prompt("Favorite flavor?");
// make an integer variable for number of scoops on the cone, prompt user for it
var scoops = prompt("How many scoops?");
// alert "You want " scoops "scoops of " flavor
alert("You want " + scoops + " scoops of " + flavor + " flavored ice cream.");


/* Var Alert Prompt Conditional */
// make a string variable for favorite ice cream flavor, prompt user for it
var flavor = prompt("What's your favorite ice cream flavor?");
// make an integer variable for number of scoops on the cone, prompt user for it
var scoops = prompt("How many scoops do you want?");
// if scoops is creater than three, alert ("Max 3 scoops!")
if (scoops > 3) alert("Max three scoops!");
// otherwise alert "You want " scoops " scoops of " flavor
else alert("You want " + scoops + " scoops of " + flavor + " flavored ice cream.");


/* PET */


/* No Prompt */
// make a variable for a pet type.
var pet = "pomeranian"
// make a variable for a pet name.
var pname = "Vernon"
// alert "You have a pet type named pet name 
alert("You have a " + pet + " named " + pname);

/* Prompt */
// make a variable for a pet type, prompt user for it
var pet = prompt("What type of pet do you have?");
// make a variable for a pet name, prompt user for it
var pname = prompt("What's their name?")
// alert "You have a pet type named pet name 
alert("You have a " + pet + " named " + pname);

/* Prompt with Conditional */
