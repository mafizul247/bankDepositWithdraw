// console.log('login.js');
// setp number 1
document.getElementById('btn-submit').addEventListener('click', function(){
    //set 2: get the email inside the input field
    // alwys remember to user .value to get text from an input filed
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    // setp 3: get password
    // step 3.1 set id the html
    // sttp 3.2 set the 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password);

    // setp 4: verify email and password and check whether valid user or not
    if(email === 'john@gmail.com' && password === 'john1234'){
        // console.log('Valid User');
        window.location.href = 'bank.html'
    }else{
        // console.log('Invalid User');
        alert('Input valid user id & password')
    }
})