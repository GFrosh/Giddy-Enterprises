const button = document.querySelector("button");

function confirmPassword(entry1, entry2) {
    if (entry1 === entry2) {
        //All good!//
    }
    else {
        alert("Passwords do not match, input passwords again!")
    }
}

function getInfo(argument) {
    let fname = document.getElementById('firstname').value;
    let lname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let pw = document.getElementById('password').value;
    let cpw = document.getElementById('confirmPassword').value;
    
    let userInfo = {
        fn: fname,
        ln: lname,
        e: email,
        ph: phone,
        p: pw,
        cp: cpw
    }
    
    console.log(userInfo);
    
    
    confirmPassword(pw, cpw);
}

button.onclick = getInfo;