const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const outputBox = document.querySelector("#output-box");

function checkBirthDateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    console.log(compareValues(sum,luckyNumber.value))
}

function compareValues(sum,luckyNumber) {
    if (sum % luckyNumber === 0) {
        outputBox.innerText = "your birthday is lucky 🥳";
    }
    else{
        outputBox.innerText= "your birthday is unlucky 😢. Work hard and create your own luck ";
    }
}

function calculateSum(dob) {
    dob = dob.replaceAll("-","");
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;

}

checkButton.addEventListener("click",checkBirthDateIsLucky);