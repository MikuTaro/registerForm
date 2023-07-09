const submitBtn = document.getElementById("submitButton");

function func1() {
    const firstName = document.getElementById("firstNameInput");
    const lastName = document.getElementById("lastNameInput");
    const emailAdd = document.getElementById("emailAddInput");
    const userName = document.getElementById("userNameInput");
    const passWord = document.getElementById("passWordInput");
    const confirmPass = document.getElementById("confirmPasswordInput");

    const UserName = "@" + userName.value

    if (passWord.value === confirmPass.value) {
        var data = {
            firstName: firstName.value,
            lastName: lastName.value,
            emailAddress: emailAdd.value,
            userName: UserName,
            password: passWord.value,
            confirmedPassword: confirmPass.value
        }

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