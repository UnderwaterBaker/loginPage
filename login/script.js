"use strict";

//Imagine this working in the backend.
//Its never a good idea to do this in the browser,
//And un-encrypted to boot.
//Authentication should be done encrypted and server-side.
const arrOfObj = {
  user1: "pass",
  pwumbi: "borbus",
};

const userBox = document.getElementById("userBox");
const passBox = document.getElementById("passBox");
const loginBtn = document.getElementById("loginButton");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (arrOfObj[userBox.value] && passBox.value === arrOfObj[userBox.value]) {
    console.log(`Welcome back ${userBox.value}.`);
  } else {
    console.log(`Username or password not recogonized.`);
  }
});
