const form = document.querySelector("form");
const required = document.querySelectorAll("[required]");
const passwordField = document.querySelector("#password");
const confirmField = document.querySelector("#confirmPass");
const passWarning = document.querySelector("#passWarning");
const showPassword = document.querySelector("#showPass");
const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (form.checkValidity()) {
    if (passwordField.value === confirmField.value) {
      form.submit();
      passwordField.classList.remove("error");
      confirmField.classList.remove("error");
      passWarning.style.visibility = "hidden";
    } else {
      passwordField.classList.add("error");
      confirmField.classList.add("error");
      passWarning.style.visibility = "visible";
    }
  } else {
    form.reportValidity();
  }
});

showPassword.addEventListener("change", (_) => {
  if (showPassword.checked) {
    passwordField.type = "text";
    confirmField.type = "text";
  } else {
    passwordField.type = "password";
    confirmField.type = "password";
  }
});
