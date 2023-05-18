const heroNav = document.querySelector(".hero-nav");
const contentContainer = document.querySelector(".content-container");
const albumsContainer = document.querySelector(".albums-container");
const commentContainer = document.querySelector(".comment-container");
const submitButton = document.getElementById("submit-btn");

// Disappear all elements apart from login div
/* heroNav.style.display = "none";
contentContainer.style.display = "none";
albumsContainer.style.display = "none";
commentContainer.style.display = "none"; */

// After the login animation is complete, make every element visible and disappear the login div
/* const container = document.querySelector('.container')
container.addEventListener('animationend', () => {
  container.classList.remove('active');
  heroNav.style.display = "block";
  contentContainer.style.display = "grid";
  albumsContainer.style.display = "flex";
  commentContainer.style.display = "flex";
  container.style.display = "none";
}); */

let animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

let bubblyButtons = document.getElementsByClassName("bubbly-button");

for (let i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}

submitButton.addEventListener("click", () => {
  submitButton.textContent = "Sent!";
});

submitButton.addEventListener("blur", () => {
  submitButton.textContent = "Send";
});

const closeMobileBtn = document.getElementById("close-mobile-menu");
const openMobileBtn = document.getElementById("open-mobile-menu");
const mobileMenu = document.getElementById("hide-mobile");
closeMobileBtn.addEventListener("click", closeMobileMenu);
function closeMobileMenu() {
  mobileMenu.style.display = "none";
}
openMobileBtn.addEventListener("click", openMobileMenu);
function openMobileMenu() {
  mobileMenu.style.display = "block";
}


const donConfirmBtn = document.getElementById("don-confirm-btn");
donConfirmBtn.addEventListener("click", checkDon);
function checkDon() {
  donConfirmBtn.classList.add("clicked");
  donConfirmBtn.textContent = "";
  updateDonationMessage();
}
donConfirmBtn.addEventListener("blur", initialDon);
function initialDon() {
  donConfirmBtn.classList.remove("clicked");
  donConfirmBtn.textContent = "Confirm";
}

const donButtonsContainer = document.getElementById("donation-buttons-container");
let donationMessage = document.createElement("p");
donationMessage.id = "don-message";
donButtonsContainer.appendChild(donationMessage);
const donationMessageNext = document.createElement("p");
donationMessageNext.id = "you-rock";
donationMessageNext.classList.add("hide");
donationMessageNext.textContent = "YOU ROCK!"; 
donButtonsContainer.appendChild(donationMessageNext);
let donationAmount = 0;

const buttonJanus = document.getElementsByClassName("button--janus");
const buttonJanusArray = Array.from(buttonJanus);
buttonJanusArray.forEach(button => {

  button.addEventListener("click", donButtonClicked);
  function donButtonClicked() {
    button.classList.add("clicked-don");
    const spanText = button.querySelector("span").textContent;
    donationAmount += parseInt(spanText);
  }

  button.addEventListener("blur", donButtonUnclicked);
  function donButtonUnclicked() {
    button.classList.remove("clicked-don");
} 
})


const customDonButton = document.getElementsByClassName("custom-don--janus");
const customDonButtonArray = Array.from(customDonButton);

customDonButtonArray.forEach(customButton => {

  customButton.addEventListener("click", customDonBtnClicked);
  function customDonBtnClicked() {
    customButton.classList.add("clicked-don");
  }
});

const customInput = document.getElementById("custom-don-btn");

customInput.addEventListener("blur", customDonBtnUnclicked);
function customDonBtnUnclicked() {
  const customButton = customDonButtonArray[0];
  customButton.classList.remove("clicked-don");
}

customInput.addEventListener("input", () => {
  const amount = parseInt(customInput.value);
  if (!isNaN(amount)) {
    donationAmount += amount;
  }
})



function updateDonationMessage() {
  donationMessage.innerHTML = `Total Of Donations: <span id="don-amount-red">${donationAmount}</span>!`;
  donationMessageNext.classList.remove("hide");
}


const messageInput = document.getElementById('message-input');
const messageDisplay = document.getElementById('message-display-container');

submitButton.addEventListener('click', () => {
  const message = messageInput.value;
  messageInput.value = "";
  console.log(message);
  displayMessage(message);
});

function displayMessage(message) {
  const newMessage = document.createElement('p');
  newMessage.classList.add("displayed-message"); 
  newMessage.textContent = message;
  messageDisplay.appendChild(newMessage);
}
