const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");

function checkBirthDateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    console.log(sum);
    console.log(compareValues(sum,luckyNumber.value));
}

function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        console.log("lucky");
    }
    else{
        console.log("unlucky");
    }

    function calculateSum(dob) {
        dob = dob.replaceAll("-","");
        let sum = 0;
        for (let i = 0; i < dob.length; i++) {
            sum = sum + Number(dob.charAt(i));
        }
        return sum;

    }

    checkButton.addEventListener("click", checkBirthDateIsLucky);