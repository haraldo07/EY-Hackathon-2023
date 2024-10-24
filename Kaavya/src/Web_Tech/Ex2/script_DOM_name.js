function validateform(){
    const username = document.validation.username.value;
    const email = document.validation.email.value;
    const password = document.validation.password.value;
    const cpassword = document.validation.cpassword.value;
    const phone = document.validation.phone.value;

    //validate username
    const userregex=/^[a-zA-Z0-9]{3,20}$/;
    if(!userregex.test(username)){
        alert("Username should contain only alphanumeric characters and be between 3 and 20 characters long.");
        return false;
    }

    //validate email
    const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailregex.test(email)){
        alert("E-mail address should be in the format name@example.com");
        return false;
    }

    //validate password
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passwordregex.test(password)){
        alert("Password should be at least 8 characters long, containing at least one uppercase letter, one lowercase letter, one number, and one special character (e.g., @, #, $)");
        return false;
    }

    //match passwords
    if(password!=cpassword){
        alert("Passwords doesn't match");
        return false;
    }

    //validate phone
    const phoneregex=/^\+91\s\d{10}$/;
    if(!phoneregex.test(phone)){
        alert("Phone number should be in the format +91 1234567890");
        return false;
    }

    //successful register
    alert("User registered successfully");
    return true;
}