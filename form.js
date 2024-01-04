const signUpCont = document.querySelector(".signUp-cont");
const loginCont = document.querySelector(".login-Cont");
const SignUpName = document.getElementById("name");
const SignUpEmail = document.getElementById("email");
const SignupUsername = document.getElementById("username");
const SignupPassword = document.getElementById("password");
const usernameInput = document.getElementById("login-username");
const passwordInput = document.getElementById("login-password");
const emailInput = document.getElementById("login-email");
const TopError = document.getElementById("TopError");
const signupBtn = document.getElementById("signupBtn");
const Back = document.querySelector(".fa-arrow-left");

Back.addEventListener("click", function () {
  window.location.href = "./index.html";
});

const toggleForms = () => {
  signUpCont.style.display =
    signUpCont.style.display === "none" ? "block" : "none";
  loginCont.style.display =
    loginCont.style.display === "none" ? "block" : "none";
};

// signupBtn.addEventListener("click", function(event) {
//     event.preventDefault();
//     form.submit();
//   });

const form = document.getElementById("signup-form");
form.addEventListener("submit", function (event) {
  let isValid = true;
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

  const Name = SignUpName.value;
  const Email = SignUpEmail.value;
  const Username = SignupUsername.value;
  const Password = SignupPassword.value;

  // Perform validation
  if (
    Name.trim() === "" ||
    Email.trim() === "" ||
    Username.trim() === "" ||
    Password.trim() === ""
  ) {
    TopError.innerHTML = "please Fill in all field";
    TopError.style.display = "block";
    isValid = false;
  } else {
    TopError.style.display = "none";
  }
  SignUpName.addEventListener("focusout", function () {
    SignUpName.classList.remove("inputError");
  });
  SignUpName.addEventListener("focusin", function () {
    if (Name.trim() === "") {
      SignUpName.classList.add("inputError");
      SignUpName.placeholder = "Name is required";
      isValid = false;
    } else if (!nameRegex.test(Name)) {
      SignUpName.classList.add("error");
      SignUpName.placeholder = "Invalid characters in name";
      isValid = false;
    } else {
      SignUpName.classList.remove("inputError");
    }
  });

  SignUpEmail.addEventListener("focusout", function () {
    SignUpEmail.classList.remove("inputError");
  });
  SignUpEmail.addEventListener("focusin", function () {
    if (Email.trim() === "") {
      SignUpEmail.classList.add("inputError");
      SignUpEmail.placeholder = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(Email)) {
      SignUpEmail.classList.add("error");
      SignUpEmail.placeholder = "Invalid characters in email";
      isValid = false;
    } else {
      SignUpEmail.classList.remove("inputError");
    }
  });
  SignupUsername.addEventListener("focusout", function () {
    SignupUsername.classList.remove("inputError");
  });
  SignupUsername.addEventListener("focusin", function () {
    if (Username.trim() === "") {
      SignupUsername.classList.add("inputError");
      SignupUsername.placeholder = "UserName is Required";
      isValid = false;
    } else if (Username.length < 6) {
      SignupUsername.classList.add("inputError");
      SignupUsername.placeholder = "UserName is Short";
      isValid = false;
    } else {
      SignupUsername.classList.remove("inputError");
    }
  });

  SignupPassword.addEventListener("focusout", function () {
    SignupPassword.classList.remove("inputError");
  });
  SignupPassword.addEventListener("focusin", function () {
    if (Password.trim() === "") {
      SignupPassword.classList.add("inputError");
      SignupPassword.placeholder = "PassWord is Required";
      isValid = false;
    } else if (Password.length < 6) {
      SignupPassword.classList.add("inputError");
      SignupPassword.placeholder = "PassWord is short";
      isValid = false;
    } else {
      SignupPassword.classList.remove("inputError");
    }
  });

  localStorage.setItem("Email", Email);
  localStorage.setItem("Username", Username);
  localStorage.setItem("Password", Password);

  SignUpEmail.value = "";
  SignupUsername.value = "";
  SignupPassword.value = "";

  if (!isValid) {
    event.preventDefault();
    return false;
  }
  interChange(event);
  return true;
});
function interChange(event) {
  event.preventDefault();
  signUpCont.style.display = "none";
  loginCont.style.display = "flex";
  TopError.innerHTML =
    "SignUp Successful" + '<i class="fa-solid fa-circle-check"></i>';
  TopError.style.display = "block";
  TopError.style.color = "green";
}

const loginVal = (event) => {
  event.preventDefault();

  const Username = usernameInput.value;
  const Email = emailInput.value;
  const password = passwordInput.value;

  if (Username.trim() === "" || password.trim() === "") {
    TopError.innerHTML = "please Fill in all field";
    TopError.style.display = "block";
    return false;
  } else {
    TopError.style.display = "none";
  }

  const storedPassword = localStorage.getItem("Password");
  const storedEmail = localStorage.getItem("Email");
  const storedUsername = localStorage.getItem("Username");

  if (
    Email === storedEmail &&
    Username === storedUsername &&
    password === storedPassword
  ) {
    usernameInput.value = "";
    passwordInput.value = "";

    myFunc();
    window.location.href = "./indexx.html";
  } else {
    TopError.innerHTML = "Invalid UserName or PassWord";
  }
};
function myFunc() {
  TopError.innerHTML =
    "Login Successful" + '<i class="fa-solid fa-circle-check"></i>';
  TopError.style.display = "block";
  TopError.style.color = "green";
}
