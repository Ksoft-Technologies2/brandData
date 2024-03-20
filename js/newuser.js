const myInput = document.querySelector("#firstInput");
const mySecondInput = document.querySelector("#secondInput");
const myThirdInput = document.querySelector("#thirdInput");
const myFourthInput = document.querySelector("#fourthInput");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
    if(myInput.value == ''){
        alert('Field Empty. Fill in Field');
    }
   else if(mySecondInput.value == ''){
        alert('Field Empty. Fill in Field');
    }
   else if(myThirdInput.value == ''){
        alert('Field Empty. Fill in Field');
    }
   else if(myFourthInput.value == ''){
        alert('Field Empty. Fill in Field');
    }
    else if(isNaN(mySecondInput.value)){
        alert('Input A Valid Phone Number');
    }
    else{
        alert('Account Created SuccessFully');
        window.location = '../home.html'
    }
})