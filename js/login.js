
document.getElementById("btn-submit").addEventListener('click',function(){
    const emailField = document.getElementById("user-email");
    const email = emailField.value.toLowerCase();
    
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value ;

    if(email === 'kawsarahmmed10001@gmail.com' && password === 'siam10001'){
        window.location.href = "bank.html";
    }
    else{
        window.alert("Please input valid email and password")
    }
    
});