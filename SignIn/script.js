const fullName = document.getElementById("fullName");
const emailId = document.getElementById("email");
const token = document.getElementById("token");
const password = document.getElementById("password");


let currentUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

fullName.innerText = currentUser.userName;
emailId.innerText = currentUser.userEmail;
password.innerText = currentUser.userPassword;
token.innerText = currentUser.userToken;