//Elements for Object
var resultEl = document.getElementById('result');
var lengthEl = document.getElementById('length');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateBtn = document.querySelector("#generate");
 

// Object for functions
var randomPassword = {
  length: getLength,
  lower: getLower,
  upper: getUpper,
  number: getNumber,
  symbol: getSymbol
};


// Generating Requirements for password
var generatePassword = function (){
  //1st is the pwd at least 8 chars
  var promptLength = window.prompt('How long do you want your password to be? Must be min of 8 and no longer than 128 chars.');
// validate their answer
if (promptLength < 8 && promptLength > 128){
  window.alert ("Created Password Incorrectly! Try Again.");

return generatePassword();
}
var promptlowerCase = window.prompt('Do you want lower Case letters?');
if (promptlowerCase = stringfromCharCode(math.floor(math.random()*26)+97));

}








// Get references to the #generate element

//Generator Functions
function getLength(){
  return
}

function getLower(){
  return String.fromCharCode(math.floor(math.random()*26)+97);
}
function getUpper(){
  return String.fromCharCode(math.floor(math.random()*26)+65);
}
function getNumber(){
  return String.fromCharCode(math.floor(math.random()*10)+48);
}
function getSymbol(){
  var symbols = '!@#$%^&*(){}[]=<>,.';
  return String.fromCharCode(math.floor(math.random())* symbols.length);
}

//Acceptance Criteria




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

}


    
  
  //   document.getElementById("password").value = password;
  

  // passwordText.value = password;




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
