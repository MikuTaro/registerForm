const submitBtn = document.getElementById("submitButton");

function func1() {

    // this is the variables that get its data to the elements in the home.html
    const firstName = document.getElementById("firstNameInput");
    const lastName = document.getElementById("lastNameInput");
    const emailAdd = document.getElementById("emailAddInput");
    const userName = document.getElementById("userNameInput");
    const passWord = document.getElementById("passWordInput");
    const confirmPass = document.getElementById("confirmPasswordInput");

    const UserName = "@" + userName.value

    if (passWord.value === confirmPass.value) {
        //this is the json data that gets the data from the variables above
        var data = {
            firstName: firstName.value,
            lastName: lastName.value,
            emailAddress: emailAdd.value,
            userName: UserName,
            password: passWord.value,
            confirmedPassword: confirmPass.value
        }

        // this line of code sends the json data to the backend which is the python flask
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/process_input", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("sent to flask");
        }
        };
        xhr.send(JSON.stringify(data));
    }
    console.log(data)
}

submitBtn.addEventListener('click', func1)