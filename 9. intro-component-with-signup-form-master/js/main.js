const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const passValue = password.value;

  if (firstNameValue === "") {
    setErrorFor(firstName, "Firstname cannot be empty");
  } else {
    setSuccessFor(firstName);
  }

  if (lastNameValue === "") {
    setErrorFor(lastName, "Lastname cannot be empty");
  } else {
    setSuccessFor(lastName);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  if (passValue === "") {
    setErrorFor(password, "Password cannot be empty");
  } else {
    setSuccessFor(password);
  }

  if (
    firstNameValue !== "" &&
    lastNameValue !== "" &&
    emailValue !== "" &&
    isEmail(emailValue) &&
    passValue !== ""
  ) {
    location.reload();
  }
}

function setErrorFor(input, message) {
  const formInput = input.parentElement;
  const label = formInput.querySelector("label");

  label.innerText = message;

  formInput.classList.add("error");
  formInput.classList.remove("success");
}

function setSuccessFor(input) {
  const successForm = input.parentElement;

  successForm.classList.add("success");
  successForm.classList.remove("error");
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
