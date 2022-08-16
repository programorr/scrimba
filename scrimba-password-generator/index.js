const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const charactersOnly = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const charWithNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const charWithSpecChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let passwordLength = 15;

const leftPassword = document.getElementById("left-password");
const rightPassword = document.getElementById("right-password");
let lengthPassword = document.getElementById("length-password");
let resetLengthBtn = document.getElementById("reset-length");
let toggleSpecChar = document.getElementById("includeSpecChar");
let toggleNumbers = document.getElementById("includeNumbers");
toggleSpecChar.checked = false;
toggleNumbers.checked = false;
resetLengthBtn.value = false;
leftPassword.value = "";
rightPassword.value = "";

function passwordInput() {
    // console.log("Length Box Clicked!");
    // console.log(lengthPassword.value);
    if (lengthPassword.value == ""){
        lengthPassword.style.border = "2px dashed red";
        passwordLength = 15;
        return passwordLength;
    } else {
        passwordLength = lengthPassword.value;
        lengthPassword.style.border = "2px solid var(--green)";
        resetLengthBtn.value = true;
        resetLengthBtn.style.background = "white";
        resetLengthBtn.style.color = "var(--night-background)";
        return passwordLength;
    }
}

function resetLength() {
    console.log(resetLengthBtn.value);
    resetLengthBtn.value = false;
    console.log(resetLengthBtn.value);
    resetLengthBtn.style.background = "var(--night-light-blue)";
    resetLengthBtn.style.color = "var(--grey)";
    resetLengthBtn.style.fontWeight = "normal";
    resetLengthBtn.style.border = "none"
    passwordLength = 15;
    lengthPassword.value = "";
    lengthPassword.style.border = "2px solid var(--night-blue)";
}

function includeSpecChar(){
    console.log("special character toggle switched!");
    if (toggleSpecChar.checked === false) {
        toggleSpecChar.checked = true;
        console.log(toggleSpecChar.checked);
        toggleSpecChar.style.color = "var(--green)";
    } else {
        toggleSpecChar.checked = false;
        console.log(toggleSpecChar.checked);
        toggleSpecChar.style.color = "var(--white)";
    }

}

function removeNumbers(){
    console.log("number toggle switched!");
    if (toggleNumbers.checked === false) {
        toggleNumbers.checked = true;
        console.log(toggleNumbers.checked);
        toggleNumbers.style.color = "var(--green)";
    } else {
        toggleNumbers.checked = false;
        console.log(toggleNumbers.checked);
        toggleNumbers.style.color = "var(--white)";
    }
}

function generatePassword() {
    console.log("button clicked!");
    if (toggleNumbers.checked === false && toggleSpecChar.checked === false) {
        generateType(characters);
    } else if (toggleNumbers.checked === true && toggleSpecChar.checked === true){
        generateType(charactersOnly);
    } else if ( toggleNumbers.checked === false && toggleSpecChar.checked === true){
        console.log("Characters with Numbers")
        generateType(charWithNumbers);
    } else if ( toggleNumbers.checked === true && toggleSpecChar.checked === false){
        console.log("Characters and Special Characters");
        generateType(charWithSpecChar);
    }

}

function generateType(type) {
    let newLeftPassword = "";
    let newRightPassword = "";
    for (let i = 0; i < passwordLength; i++){
        let randomIndex = Math.floor( Math.random() * type.length);
        //console.log(randomIndex);
        newLeftPassword += type[randomIndex];
    }
    for (let i = 0; i < passwordLength; i++){
        let randomIndex = Math.floor( Math.random() * type.length);
        //console.log(randomIndex);
        newRightPassword += type[randomIndex];
    }

    leftPassword.value = newLeftPassword;
    rightPassword.value = newRightPassword;
}

