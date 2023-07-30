const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmPassword");
const continueBtn = document.getElementById("continue-btn");
const msgTag1 = document.getElementById("errmsg1");
const msgTag2 = document.getElementById("errmsg2");
const profileBtn = document.getElementById("profile-btn");

// adding event listener to continue button
continueBtn.addEventListener("click", (event) => {
  event.preventDefault();

  nameVal = name.value.trim();
  emailVal = email.value.trim();
  passwordVal = password.value.trim();
  confirmPassVal = confirmPass.value.trim();
  const token = generateAccessToken();
  if (
    nameVal === "" ||
    emailVal === "" ||
    passwordVal === "" ||
    confirmPassVal === ""
  ) {
    // if any of the input field is empty, show error message
    msgTag1.style.display = "block";
  } 
  else {
    // if password and confirm password match, save user data in local storage
      if (passwordVal === confirmPassVal) {
        saveUserData(nameVal, emailVal, passwordVal, token);
      } else {
      // if password and confirm password does not match, show alert to user
        if (passwordVal !== confirmPassVal) {
          alert("OOPS! Password not matching");
          password.value = "";
          confirmPassword.value = "";
        }
     }
  }
});

function saveUserData(nameVal, emailVal, passwordVal, token) {
  // function to save user information in local storage and then redirect user to sign in page
  let user = {
    userName: nameVal,
    userEmail: emailVal,
    userPassword: passwordVal,
    userToken: token,
  };
  let usersArr = JSON.parse(localStorage.getItem("users"));
  if (usersArr === null) {
    usersArr = []; // creating userArr array to save user data
  }
  usersArr.push(user); // pushing userdata in usersArr array
  localStorage.setItem("usersArr", JSON.stringify(usersArr)); // storing userdata in local storage
  console.log(usersArr);

  sessionStorage.setItem("loggedInUser", JSON.stringify(user)); // after storing user data in local storage, redirect user to sign in page
  window.location.href = "./SignIn";
}

// function to generate the access token
function generateAccessToken() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let accessToken = "";
  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    accessToken += characters.charAt(randomIndex);
  }
  return accessToken;
}

// Disable user manually navigating to profile page 
profileBtn.addEventListener("click", (event) => {
  alert(
    "Dear User! You are not signed in. Please sign up to see profile details"
  );
});

// Disable navigating back to sign Up page (using the browser's "Previous" buttonw)without using  Log out button
function disableBack() {
  window.history.forward();
}
setTimeout("disableBack()", 0);
window.onunload = function () {
  null;
};
