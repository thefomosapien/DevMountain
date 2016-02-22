//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';

//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
  if (name === 'Tyler') {
    return true;
  } else {
    return false;
  }
}

//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName() {
  var userName = prompt("Please enter your name");
  return userName;
}

//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
  var newName = getName();
  alert("Welcome, " + newName);
}

//What is the difference between arguments and parameters?

//Parameters are the variables that represent where the value will be inputed while arguments are the actual values being called.

//What are all the falsy values in JavaScript and how do you check if something is falsy?

  //null, undefined, false, 0, "", NAN.

//Create a function called myName that returns your name

function myName() {
  return "Corey";
}

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName());

//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
  return function() {
    return "Corey";
  }
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();
