function fun(e) {
   const name = document.querySelector('.name').value
   const password = document.querySelector('.pass1').value;
   const confirmPassword = document.querySelector('.pass2').value;
   const email = document.querySelector('.email').value;
   const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  

    const passwordError=document.querySelector('.pass1 + .error')
    const matchError=document.querySelector('.pass2 + .error')
    const mail=document.querySelector('.email + .error')
    const naming = document.querySelector('.name + .error')

    passwordError.textContent = '';
    matchError.textContent = '';
    mail.textContent = '';
    naming.textContent=''
   
    if (name === "") {
        naming.textContent = "please enter name";
      
    }if (password.length < 8) {
        passwordError.textContent = "it should be greater than eight";
       
    }
   
    if (password === "") {
        passwordError.textContent = "please enter password";
      
    }else if (password.length < 8) {
        passwordError.textContent = "it should be greater than eight";
       
    }else if(password!=confirmPassword)
        {
            matchError.textContent="password not matching"
    } 
    
    if(!email.match(mailformat)){
        mail.textContent="Enter the valid mail"
    }
    
    if (password && confirmPassword && email.match(mailformat)) {
        window.alert("Submitted");
    }
}


const number = 3
const numberr = 3
if (number > 3)
{
    console.log("if 1")
}
if (number > 2)
{
    console.log("if 2")
}
if (numberr < 4)
{
    console.log("else 1")
}else if(numberr < 6){
         console.log("else 2")
}
/* 
function fun(e) {
    const password = document.querySelector('.pass1').value;
    const confirmPassword = document.querySelector('.pass2').value;
    const email = document.querySelector('.email').value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var passwordError = document.querySelector('.pass1 + .error');
    var matchError = document.querySelector('.pass2 + .error');
    var mailError = document.querySelector('.email + .error');

    // Reset error messages
    passwordError.textContent = '';
    matchError.textContent = '';
    mailError.textContent = '';

    if (password === "") {
        passwordError.textContent = "Please enter a password";
    } else if (password.length < 8) {
        passwordError.textContent = "Password should be at least 8 characters long";
    }

    if (password !== confirmPassword) {
        matchError.textContent = "Passwords do not match";
    }

    if (!email.match(mailformat)) {
        mailError.textContent = "Enter a valid email address";
    }

    // Check if all fields pass validation before submitting
    if (passwordError.textContent === '' && matchError.textContent === '' && mailError.textContent === '') {
        window.alert("Submitted");
    }
} 
 */