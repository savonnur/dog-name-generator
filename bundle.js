(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//require dogNames package then use Browserify to bundle up dependencies so it can be used in browser.
const dogNames = require('dog-names');

//make variable to get current year
var current_year = new Date().getFullYear();

//set footer copyright with current year variable
document.getElementById("footer").innerHTML = "Savon Nur © " + current_year;

//link to text field for output
var output = document.getElementById("txtOutput");

//disable text field for output people cannot click in it
output.disabled = true;

//links buttons to male and female generate buttons
var generate_male = document.getElementById("generate-btn"); //Male name Generator button
var generate_female = document.getElementById("generate-btn2"); //Female name Generator button

//links buttons to male and female buttons
var male_btn = document.getElementById("male-btn");
var female_btn = document.getElementById("female-btn");

//add click event listeners to buttons
male_btn.addEventListener("click", maleClick);
female_btn.addEventListener("click", femaleClick);
generate_male.addEventListener("click", generateMale);
generate_female.addEventListener("click", generateFemale);

//function for clicking on male button that will make Male name generator button appear
function maleClick(){
	male_btn.disabled = true; //disable button then give disabled css class a color so user knows which button is selected
  female_btn.disabled = false; //undisable other gender button when one is pressed
  document.getElementById("generate_male_button").style.display = "block";
  document.getElementById("generate_female_button").style.display = "none";
}

//function for clicking on female button that will make female name generator button appear
function femaleClick(){
	male_btn.disabled = false;
  female_btn.disabled = true;
  document.getElementById("generate_male_button").style.display = "none";
  document.getElementById("generate_female_button").style.display = "block";
}

//function that will give you a random male dog name
function generateMale(){
  document.getElementById("generate_male_button").focus();
  output.value = dogNames.maleRandom();
}

//function that will give you a random female dog name
function generateFemale(){
  output.value = dogNames.femaleRandom();
};
},{"dog-names":3}],2:[function(require,module,exports){
module.exports=[
	"Bella",
	"Lucy",
	"Daisy",
	"Molly",
	"Lola",
	"Sophie",
	"Sadie",
	"Maggie",
	"Chloe",
	"Bailey",
	"Roxy",
	"Zoey",
	"Lily",
	"Luna",
	"Coco",
	"Stella",
	"Gracie",
	"Abby",
	"Penny",
	"Zoe",
	"Ginger",
	"Ruby",
	"Rosie",
	"Lilly",
	"Ellie",
	"Mia",
	"Sasha",
	"Lulu",
	"Pepper",
	"Nala",
	"Lexi",
	"Lady",
	"Emma",
	"Riley",
	"Dixie",
	"Annie",
	"Maddie",
	"Piper",
	"Princess",
	"Izzy",
	"Maya",
	"Olive",
	"Cookie",
	"Roxie",
	"Angel",
	"Belle",
	"Layla",
	"Missy",
	"Cali",
	"Honey",
	"Millie",
	"Harley",
	"Marley",
	"Holly",
	"Kona",
	"Shelby",
	"Jasmine",
	"Ella",
	"Charlie",
	"Minnie",
	"Willow",
	"Phoebe",
	"Callie",
	"Scout",
	"Katie",
	"Dakota",
	"Sugar",
	"Sandy",
	"Josie",
	"Macy",
	"Trixie",
	"Winnie",
	"Peanut",
	"Mimi",
	"Hazel",
	"Mocha",
	"Cleo",
	"Hannah",
	"Athena",
	"Lacey",
	"Sassy",
	"Lucky",
	"Bonnie",
	"Allie",
	"Brandy",
	"Sydney",
	"Casey",
	"Gigi",
	"Baby",
	"Madison",
	"Heidi",
	"Sally",
	"Shadow",
	"Cocoa",
	"Pebbles",
	"Misty",
	"Nikki",
	"Lexie",
	"Grace",
	"Sierra"
]

},{}],3:[function(require,module,exports){
'use strict';
const uniqueRandomArray = require('unique-random-array');
const femaleDogNames = require('./female-dog-names.json');
const maleDogNames = require('./male-dog-names.json');

const allDogNames = femaleDogNames.reduce(
	(allDogNames, femaleDogName, index) => {
		allDogNames.push(femaleDogName, maleDogNames[index]);
		return allDogNames;
	},
	[]
);

exports.female = femaleDogNames;
exports.male = maleDogNames;
exports.all = allDogNames;

exports.femaleRandom = uniqueRandomArray(femaleDogNames);
exports.maleRandom = uniqueRandomArray(maleDogNames);
exports.allRandom = uniqueRandomArray(allDogNames);

},{"./female-dog-names.json":2,"./male-dog-names.json":4,"unique-random-array":5}],4:[function(require,module,exports){
module.exports=[
	"Max",
	"Buddy",
	"Charlie",
	"Jack",
	"Cooper",
	"Rocky",
	"Toby",
	"Tucker",
	"Jake",
	"Bear",
	"Duke",
	"Teddy",
	"Oliver",
	"Riley",
	"Bailey",
	"Bentley",
	"Milo",
	"Buster",
	"Cody",
	"Dexter",
	"Winston",
	"Murphy",
	"Leo",
	"Lucky",
	"Oscar",
	"Louie",
	"Zeus",
	"Henry",
	"Sam",
	"Harley",
	"Baxter",
	"Gus",
	"Sammy",
	"Jackson",
	"Bruno",
	"Diesel",
	"Jax",
	"Gizmo",
	"Bandit",
	"Rusty",
	"Marley",
	"Jasper",
	"Brody",
	"Roscoe",
	"Hank",
	"Otis",
	"Bo",
	"Joey",
	"Beau",
	"Ollie",
	"Tank",
	"Shadow",
	"Peanut",
	"Hunter",
	"Scout",
	"Blue",
	"Rocco",
	"Simba",
	"Tyson",
	"Ziggy",
	"Boomer",
	"Romeo",
	"Apollo",
	"Ace",
	"Luke",
	"Rex",
	"Finn",
	"Chance",
	"Rudy",
	"Loki",
	"Moose",
	"George",
	"Samson",
	"Coco",
	"Benny",
	"Thor",
	"Rufus",
	"Prince",
	"Chester",
	"Brutus",
	"Scooter",
	"Chico",
	"Spike",
	"Gunner",
	"Sparky",
	"Mickey",
	"Kobe",
	"Chase",
	"Oreo",
	"Frankie",
	"Mac",
	"Benji",
	"Bubba",
	"Champ",
	"Brady",
	"Elvis",
	"Copper",
	"Cash",
	"Archie",
	"Walter"
]

},{}],5:[function(require,module,exports){
'use strict';
const uniqueRandom = require('unique-random');

module.exports = array => {
	const random = uniqueRandom(0, array.length - 1);
	return () => array[random()];
};

},{"unique-random":6}],6:[function(require,module,exports){
'use strict';

module.exports = (minimum, maximum) => {
	let previousValue;
	return function random() {
		const number = Math.floor(
			(Math.random() * (maximum - minimum + 1)) + minimum
		);
		previousValue = number === previousValue && minimum !== maximum ? random() : number;
		return previousValue;
	};
};

},{}]},{},[1]);
