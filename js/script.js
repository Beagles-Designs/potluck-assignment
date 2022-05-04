// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  if (guest !== "") {
    addToList(guest);
    clearInput();
    updateGuestCount();
  }
});

//Enter Submission Code HEre -> Feedback wanted
document.addEventListener("keydown", function (e) {
  //can I use Guest again with the same const? Removing it doesn't work.
  const guest = guestInput.value;
  const key = e.key;
  if (key === "Enter") {
    if (guest !== "") {
      addToList(guest);
      clearInput();
      updateGuestCount();
    }
  }
});

const addToList = function (guest) {
  let listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const clearInput = function () {
  guestInput.value = "";
};

const updateGuestCount = function () {
  let guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length >= 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potluckItems = [
    "Deviled Eggs",
    "Fruit Salad",
    "Charcuterie",
    "Paella",
    "Potatoes",
    "Soda",
    "Pigs in a Blanket",
    "Meat Skewers",
    "Vegan Something",
    "Cookies",
    "Candy",
    "Alcohol"
  ];
  const allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    let randomPotLuckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotLuckItem = potluckItems[randomPotLuckIndex];
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotLuckItem}`;
    assignedItems.append(listItem);
    potluckItems.splice(randomPotLuckIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
