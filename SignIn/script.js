const fullName = document.getElementById("fullName");
const emailId = document.getElementById("email");
const token = document.getElementById("token");
const password = document.getElementById("password");
const message = document.getElementById ("success-msg");
const logOutBtn = document.getElementById("logOut-Btn");

let currentUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
//let usersArr = JSON.parse(sessionStorage.getItem('usersArr'));

fullName.innerText = currentUser.userName;
emailId.innerText = currentUser.userEmail;
password.innerText = currentUser.userPassword;
token.innerText = currentUser.userToken;
message.innerHTML = `Signup Successful!`;

logOutBtn.addEventListener("click",(event)=>{
    //event.preventDefault();
   // console.log(event.target);
    window.location.href="../index.html";
    localStorage.removeItem("usersArr");
})