// Assignment code here

var generateBtn = document.querySelector("#generate");

// Variables for password//

var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var symbols = "!@#$%^&*"
var numeric = "1234567890"

// Functions //

function generatePassword() {
  var length = getLength()

  var availableCharacters = ""

  var wouldLikeSymbols = confirm("Would you like symbols in your password?")
  if (wouldLikeSymbols === true)
  availableCharacters = availableCharacters + symbols

  var wouldLikeNumbers  = confirm("Would you like numbers?")
  if (wouldLikeNumbers === true)
  availableCharacters = availableCharacters + numeric

  var wouldLikeLowers = confirm("Would you like lower case characters?")
  if (wouldLikeLowers === true)
  availableCharacters = availableCharacters + lowercase
  
  var wouldLikeUppers = confirm("Would you like upper case characters?")
  if (wouldLikeUppers === true)
  availableCharacters = availableCharacters + uppercase

  var newPassword =""
  for (i= 0 ; 1<length; i++){
    newPassword = availableCharacters[Math.floor(math.random() * availableCharacters.length)]
  }
    return newPassword;
  }

  function getLength() {
  var length = parseInt(prompt("How long would you like your password to be?")) 
  if (isNaN(length)){
    alert("Make sure you enter a number for your length!")
  }
  else if (length < 8 || > 128) {
    alert("Password must be at least 8 characters!")

    else if (NaN(length)){
      alert ("Password must be at least 8 characters and no more than 128!")
      return getLength()
    }
    else{
      return length;
    }
  }


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


  
}
var newPassword = ""


// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

;
