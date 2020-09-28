// Assignment Code
var generateBtn = document.querySelector("#generate");
var criteria_1= confirm('UpperCase ?');
var criteria_2= confirm('LowerCase ?');
var criteria_3= confirm('Numbers ?');
var criteria_4= confirm('Symbols ?');



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
passwordText.value = password;

 function generatePassword (){ 
  var generateBtn = document.querySelector("#generate");
  var wantUpper = String.fromCharCode(Math.floor(Math.random()*26)+65);
  var wantLower = String.fromCharCode(Math.floor(Math.random()*26)+97) ;
  var wantNumber = String.fromCharCode(Math.floor(Math.random()*10)+48) ;
  var symbols=' "!#$%&()*+,-./:;<=>?@[\]^_`{|}~ ' ;
  var wantSymbols= symbols[Math.floor(Math.random() * symbols.length)];
   var passwordArray=[];
if(criteria_1){ passwordArray.push(wantUpper); }
if(criteria_2){ passwordArray.push(wantLower); }
if(criteria_3){ passwordArray.push(wantNumber); }
if(criteria_4){ passwordArray.push(wantSymbols); }
return passwordArray.join('');
 }
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
