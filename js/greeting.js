// const form = document.querySelector(".js-form"),
//   input = form.querySelector("input"),
//   greeting = document.querySelector(".js-greetings");
const nameInput = document.querySelector(".js-name");
const USER_LS = "currentUser";

function printInput(value) {
  nameInput.innerHTML = "";
  const title = document.createElement("span");
  title.className = "name__title";
  title.innerText = `Hello ${value} 😊`;
  console.log(value);
  nameInput.appendChild(title);
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const input = form.querySelector("input");
  const value = input.value;
  localStorage.setItem(USER_LS, value);
  printInput(value);
}

function makeInput() {
  const input = document.createElement("input");
  input.placeholder = "What is your name?";
  input.type = "text";
  input.className = "name__input";
  const nameForm = document.createElement("form");
  nameForm.addEventListener("submit", handleSubmit);
  nameForm.appendChild(input);
  nameInput.appendChild(nameForm);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser == null) {
    makeInput();
  } else {
    printInput(currentUser);
  }
}

function init() {
  loadName();
}

init();
// const USER_LS = "currentUser",
// SHOWING_CN = "showing";

// function saveName(text) {
//   localStorage.setItem(USER_LS, text);
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   const currentValue = input.value;
//   paintGreeting(currentValue);
//   saveName(currentValue);
// }

// function paintGreeting(text) {
//   form.classList.remove(SHOWING_CN);
//   greeting.classList.add(SHOWING_CN);
//   greeting.innerText = `Hello ${text}`;
// }

// function askForName() {
//   form.classList.add(SHOWING_CN);
//   form.addEventListener("submit", handleSubmit);
// }

// function loadName() {
//   const currentUser = localStorage.getItem(USER_LS);
//   if (currentUser === null) {
//     askForName();
//   } else {
//     paintGreeting(currentUser);
//   }
// }

// function init() {
//   loadName();
// }

// init();
