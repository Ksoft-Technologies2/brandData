const emailId = document.querySelector("#emailId");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
    if(emailId.value == ''){
        alert('Field Empty. Fill in Field');
    }
    else{
        alert('Password Reseted Successfully, Check email for new password');
        window.location = '../index.html'
    }
})