const shows = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco,CA",
  },
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco,CA",
  },
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco,CA",
  },
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco,CA",
  },
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco,CA",
  },
  {
    date:"Mon Sept 09 2024",
    venue:"Ronald Lane",
    location:"San Francisco,CA"},
];
 function displayShows(cards){
    const cardElement = document.createElement("article");
    cardElement.classList.add("show__display");

    const label1=document.createElement("label");
    label1.classList.add("label");
    label1.innerText="Date";
    const pTag1=document.createElement("p");
    pTag1.classList.add("show__date");
    pTag1.innerText=cards.date;

    const label2=document.createElement("label");
    label2.classList.add("label");
    label2.innerText="Venue";
    const pTag2=document.createElement("p");
    pTag2.classList.add("show__venue");
    pTag2.innerText=cards.venue;

    const label3=document.createElement("label");
    label3.classList.add("label");
    label3.innerText="Location";
    const pTag3=document.createElement("p");
    pTag3.classList.add("show__location");
    pTag3.innerText=cards.location;

    const buttonTag=document.createElement("submit");
    buttonTag.classList.add("show__buy-ticket");
    buttonTag.innerText="Buy Tickets";

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
    
    
    console.log(cardElement);
    return cardElement;
    
 }

 const renderShows = () => {
    const myShowsEL = document.querySelector(".show");
    console.log(myShowsEL);
    myShowsEL.innerHTML="";
    for (let i = 0; i < shows.length; i++) {
      const card = displayShows(shows[i]);
      myShowsEL.appendChild(card);
      console.log(card);
      console.log(myShowsEL);
    }
  };
  renderShows();