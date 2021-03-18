//require dogNames package then use Browserify to bundle up dependencies so it can be used in browser.
const dogNames = require('dog-names');
const { male } = require('./bundle');

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
  male_btn.disabled = true;
  female_btn.disabled = false;
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

