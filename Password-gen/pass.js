const passBox = document.querySelector("#password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbols = "~!@#$%^&*()-_=+[]{}\|;:,<>/?.";

const allChars = upperCase + lowerCase + number + symbols;

function genPass(){
    let password = "";
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password += number[Math.floor(Math.random()* number.length)];
    password += symbols[Math.floor(Math.random()* symbols.length)];

    while(lenght > password.length){
        password += allChars[Math.floor(Math.random()* allChars.length)];
    }
    passBox.value = password;
    console.log(password) 
}
function copyPass(){
    passBox.select();
    navigator.clipboard.writeText(passBox.value);

    const notification = document.getElementById("copyNotification");
    notification.style.display = "block";
    notification.classList.add("show");
    setTimeout(() => {
        notification.classList.remove("show");
    }, 2500);
}