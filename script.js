const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValidation(emailValue)) {
    email.parentElement.className = "form-control success";
  } else {
    email.parentElement.className = "form-control fail";
  }

  if (passwordValidation(passwordValue)) {
    password.parentElement.className = "form-control success";
  } else {
    password.parentElement.className = "form-control fail";
  }
});

const emailValidation = (email) => {
  const regExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(email);
};

const passwordValidation = (password) => {
  return password.length >= 6;
};
