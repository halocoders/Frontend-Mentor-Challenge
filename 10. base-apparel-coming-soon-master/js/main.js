const form = document.querySelector("[data-form]");
const input = document.querySelector("[data-input]");
const submitBtn = document.querySelector("[data-button]");

const validateEmail = (e) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value === "" || !emailRegex.test(input.value)) {
    form.classList.add("invalid");
    e.preventDefault();
  } else {
    form.submit;
  }
};

submitBtn.addEventListener("click", validateEmail);
