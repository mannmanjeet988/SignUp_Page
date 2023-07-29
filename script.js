const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmPassword");
const continueBtn = document.getElementById("continue-btn");
const msgTag1 = document.getElementById("errmsg1"); 
const msgTag2 = document.getElementById("errmsg2");          

continueBtn.addEventListener("click" ,(event)=>{
    event.preventDefault();

       nameVal = name.value.trim();
       emailVal =email.value.trim();
       passwordVal = password.value.trim();
       confirmPassVal= confirmPass.value.trim();
       const token = generateAccessToken();
         if(nameVal ==='' || emailVal ==='' || passwordVal==='' || confirmPassVal===''){
            // if any of the input field is empty, show error message
              msgTag1.style.display="block";
         } 
         else{
            if(passwordVal===confirmPassVal){
                // if((localStorage.getItem("users"))){
                //         if(verifyUserExistsAlready(emailVal)){
                //             alert('User Already Exists!')
                //         } else{
                //             saveUserData(nameVal,emailVal,passwordVal);
                //         }
                // } 
                // else{
                //      saveUserData(nameVal,emailVal,passwordVal);
                // }
                saveUserData(nameVal,emailVal,passwordVal,token);
            } 
            else{ 
                alert("OOPs! Password not matching")
                    password.value = '';
                    confirmPassword.value = '';
                }
            }
            
});

// function verifyUserExistsAlready(email){
//     let usersArr = JSON.parse(localStorage.getItem("users"));
//     const existingUser = usersArr.find(user=>user.userEmail=== email);
//     if(existingUser){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

function saveUserData(nameVal,emailVal,passwordVal,token){
    // function to save user information in local storage and then redirect user to sign in page
   let user={
        userName : nameVal,
        userEmail: emailVal,
        userPassword : passwordVal,
        userToken : token,
   }
    let usersArr = JSON.parse(localStorage.getItem("users"));
       if(usersArr === null){
        usersArr =[];         // to contain data of all users
       }
    usersArr.push(user);     // pushing userdata in users array
    localStorage.setItem("usersArr",JSON.stringify(usersArr));   // storing userdata in local storage
    console.log(usersArr);
   
    sessionStorage.setItem('loggedInUser',JSON.stringify(user)); // after storing user data in local storage, redirect user to sign in page
    window.location.href="./SignIn";
}
        
 // function to generate the access token
 function generateAccessToken() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let accessToken = '';
    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      accessToken += characters.charAt(randomIndex);
    }
    return accessToken;
  }

//   const accessToken = generateAccessToken();
//   console.log(accessToken); 