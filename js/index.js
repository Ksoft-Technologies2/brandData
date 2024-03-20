 const myInput = document.querySelector("#firstInput");
 const mySecondInput = document.querySelector("#secondInput");
 const button = document.querySelector(".btn");

 button.addEventListener("click", () => {
    if(myInput.value == ''){
        alert('Field Empty. Fill in Field');
    }
   else if(mySecondInput.value == ''){
        alert('Field Empty. Fill in Field');
    }
    else if(isNaN(myInput.value)){
        alert('Input A Valid Phone Number');
    }
    else{
        alert('SuccessFully Login To BrandData');
        window.location = '../home.html'
    }
 })