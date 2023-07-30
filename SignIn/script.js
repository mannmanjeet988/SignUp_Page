const fullName = document.getElementById("fullName");
const emailId = document.getElementById("email");
const token = document.getElementById("token");
const password = document.getElementById("password");
const message = document.getElementById ("success-msg");
const logOutBtn = document.getElementById("logOut-Btn");

let currentUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
fullName.innerText = currentUser.userName;
emailId.innerText = currentUser.userEmail;
password.innerText = currentUser.userPassword;
token.innerText = currentUser.userToken;
message.innerHTML = `Signup Successful!`;

// adding event listener to logout button, clicking on logout button will redirect user to sign up page
logOutBtn.addEventListener("click",(event)=>{
    //event.preventDefault();
   // console.log(event.target); 
    localStorage.removeItem("usersArr");
    window.location.href="../index.html";    
})