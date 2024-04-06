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
