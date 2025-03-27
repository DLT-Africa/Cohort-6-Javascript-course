const form = document.getElementById("form");
const passwordEl1 = document.getElementById("password1")
const passwordEl2 = document.getElementById("password2")
const messageContainer = document.querySelector(".message-container")
const message = document.getElementById("message");


let isValid = false;
let passwordMatch = false;


const validateForm = () => {


    // using constraint API

    isValid = form.checkValidity()

    if (!isValid) {
        message.textContent = "please fill out all fields"
        message.style.color = "red"
        messageContainer.style.borderColor = "red"
        return;
    }

    // check to see if pwd match

    if(passwordEl1.value === passwordEl2.value) {
        passwordMatch = true
        passwordEl1.style.borderColor = "green !important"
        passwordEl2.style.borderColor = "green !important"
    } else{
        passwordMatch = false
        message.textContent = "Make sure password match"
        message.style.color = "red"
        messageContainer.style.borderColor = "red"
        passwordEl1.style.borderColor = "green !important"
        passwordEl2.style.borderColor = "green !important"
        return;
    }

    // if the form valid and the password match
    if(isValid && passwordMatch) {
        message.textContent = "Successfully Registered!"
        message.style.color = "green"
        messageContainer.style.borderColor = "green"
    }
}

const storeFormData = () => {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        // password: form.password.value
    }

    console.log(user);
}

const processFormData = (e) => {
    e.preventDefault()

    validateForm()

    // Submit data if is Valid

    if(isValid && passwordMatch){
        storeFormData()
        form.reset()
    }
}

form.addEventListener("submit", processFormData);