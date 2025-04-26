function validateform() {
    let email = document.querySelector('input[type="email"]').value;
    let password = document.querySelector('input[type="password"]').value


    if (email === "") {
        alert('Enter email');
        return false;
    }
    else if (!email.includes('@')) {
        alert('Incorrect email format');
        return false;
    }
    if (password === "") {
        alert('Enter Password');
        return false;
    }
    else if (password.length < 6) {
        alert('Password must be of atleast 6 characters');
        return false;
    }
    return true;
}
