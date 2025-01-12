import { BandSiteApi } from "./band-site-api.js";
// Usage Example

const apiKey = "89762a8a-d2d6-4098-a81c-e571e503db5e";
const bandSiteApi = new BandSiteApi(apiKey);
// Get shows
const shows = await bandSiteApi.getShows();
console.log("Shows:", shows);

const format = {
  weekday: 'long', // Monday
  month: 'short',  // Sept
  day: '2-digit',  // 09
  year: 'numeric'  // 2024
};


function displayShows(cards) {
  const cardElement = document.createElement("article");
  cardElement.classList.add("show__display");
  //create div and give 3 label inside that here
  const label1 = document.createElement("label");
  label1.classList.add("label");
  label1.innerText = "Date";
  const pTag1 = document.createElement("p");
  pTag1.classList.add("show__date");
  pTag1.innerText = new Date(cards.date).toLocaleDateString('en-US',format);

  const label2 = document.createElement("label");
  label2.classList.add("label");
  label2.innerText = "Venue";
  const pTag2 = document.createElement("p");
  pTag2.classList.add("show__venue");
  pTag2.innerText = cards.place;

  const label3 = document.createElement("label");
  label3.classList.add("label");
  label3.innerText = "Location";
  const pTag3 = document.createElement("p");
  pTag3.classList.add("show__location");
  pTag3.innerText = cards.location;

  const buttonTag = document.createElement("submit");
  buttonTag.classList.add("show__buy-ticket");
  buttonTag.innerText = "Buy Tickets";

  const divider = document.createElement("hr");
  divider.classList.add("shows-divider");

  cardElement.appendChild(label1);
  cardElement.appendChild(pTag1);
  cardElement.appendChild(divider);
  cardElement.appendChild(label2);
  cardElement.appendChild(pTag2);
  cardElement.appendChild(divider);
  cardElement.appendChild(label3);
  cardElement.appendChild(pTag3);
  cardElement.appendChild(buttonTag);
  cardElement.appendChild(divider);

 
  return cardElement;
}

const renderShows = () => {
  const myShowsEL = document.querySelector(".show");
  myShowsEL.innerHTML = "";
  for (let i = 0; i < shows.length; i++) {
    const card = displayShows(shows[i]);
    myShowsEL.appendChild(card);
  }
};
renderShows();

//for selected show state background color is mercury
function showSelectedState(event){
  const showElement = event.target.closest('.show__display');
  
  if (showElement) {
    showElement.classList.toggle('selected');
  }
}

// Add event listener to each show element
const showElements = document.querySelectorAll('.show__display');
showElements.forEach(show => {
  show.addEventListener('click', showSelectedState);
});