const form = document.querySelector(".for");
const mail = document.querySelector(".mail");
const email = document.querySelector("#email");
const send = document.querySelector(".send");
const successMsg = document.querySelector(".success");
const errorMsg = document.querySelector(".error");
const errorIcon = document.querySelector(".error-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateEmail(email.value)) {
    successMsg.textContent = "";
    errorMsg.style.display = "block";
    errorIcon.style.display = "inline";
    mail.style.backgroundColor = "hsl(0, 94%, 66%)";
  } else {
    successMsg.textContent = "Thanks for subscribing";
    successMsg.style.display = "block";
    email.value = "";
  }
});
email.addEventListener("click", () => {
  errorMsg.style.display = "none";
  errorIcon.style.display = "none";
  successMsg.textContent = "";
  mail.style.backgroundColor = "";
});

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
