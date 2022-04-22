document.getElementById('login-button').addEventListener('click', function(){
    // get user mail
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //get user password
    const passField = document.getElementById('user-pass')
    const userPass = passField.value;
    
    // check email and pass
    if(userEmail == 'jobaer@gmail.com' && userPass == 'jobaer') {
        window.location.href = 'banking.html';
    }
})
