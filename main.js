function password_match(e) {
    if(password.value !== confirm_password.value) {
        password.style.borderColor = "red";
        confirm_password.style.borderColor = "red";
        password.setCustomValidity("Passwords don't match");
    } else {
        password.style.borderColor = "#E5E7EB";
        confirm_password.style.borderColor = "#E5E7EB";
        password.setCustomValidity("");
    }
    console.log(password.validity);
}

const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");

password.addEventListener("change", password_match)
confirm_password.addEventListener("change", password_match)