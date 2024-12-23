const comments = [
  {
    name: "Victor Pinto",
    date: "11/02/2023",
    comment:
      "This is art.This is inexplicable magic expressed in the purest way,everything that makes up this majestic work deserves reverence.Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Christina Cabrera",
    date: "10/28/2023",
    comment:
      "I feel blessed to have seen them in person.What a show!They were just perfection.if there was one day of my life i could relive, this would be it.What an incredible day.",
  },
  {
    name: "Isaac Tadesse",
    date: "10/20/2023",
    comment:
      "I can't stop listening.every time i hear one of their songs-the vocals-it gives me goosebumps.Shivers straight down my spine.What a beautiful expression of creativity.Can't get enough.",
  },
];

//form Validation
form = document.querySelector(".comment__form");
console.log(form);
fields = document.querySelectorAll(".comment-field");
nameField = document.querySelector(".comment__form-input");
textarea = document.querySelector(".comment__form-textarea");
console.log(fields);


function displayComments(note) {
  const cardElement = document.createElement("article");
  cardElement.classList.add("comment__display");

  const divTag = document.createElement("div");
  divTag.classList.add("comment__row1");

  const imgTag = document.createElement("div");
  imgTag.classList.add("comment__profile-img");

  const h3Tag = document.createElement("h3");
  h3Tag.classList.add("comment__name");
  h3Tag.innerText=note.name;

  const pTag = document.createElement("p");
  pTag.classList.add("comment__date");
  pTag.innerText=note.date;

  const divTag2 = document.createElement("div");
  divTag2.classList.add("comment__description");

  const pTag2 = document.createElement("p");
  pTag2.classList.add("comment__description");
  pTag2.innerText=note.comment;

  const divider = document.createElement("hr");
  divider.classList.add("comment-divider");

  cardElement.appendChild(divTag);
  cardElement.appendChild(divTag2);
  cardElement.appendChild(divider);

  divTag.appendChild(imgTag);
  divTag.appendChild(h3Tag);
  divTag.appendChild(pTag);

  divTag2.appendChild(pTag2);

  console.log(cardElement);
  return cardElement;
}

const renderComments = () => {
  const myCommentEL = document.querySelector(".displayComments");
  myCommentEL.innerHTML = "";
  for (let i = 0; i < comments.length; i++) {
    const card = displayComments(comments[i]);
    myCommentEL.appendChild(card);
    console.log(card);
    console.log(myCommentEL);
  }
};
renderComments();
form.addEventListener("submit", submitHandler);
function submitHandler(e) {
  e.preventDefault();
  let today = new Date().toLocaleDateString();
  let nameVal = e.target.name.value;
  let commentVal = e.target.comment.value;
  console.log(nameVal+"" +commentVal);
  let cardData = {
    name: nameVal,
    comment: commentVal,
    date: today,
  };
  if (nameVal === "") {
    nameField.style.border = "1px solid red";
  } else {
    nameField.style.border = "1px solid black";
  }
  if (commentVal === "") {
    textarea.style.border = "1px solid red";
  } else {
    textarea.style.border = "1px solid black";
  }
  if (nameVal === "" && commentVal === "") {
    fields.forEach((field) => {
      field.style.border = "1px solid red";
    });
  }
  if (nameVal!== "" && commentVal!== "") {
    fields.forEach((field) => {
        field.style.border = "1px solid black";
      });
    comments.unshift(cardData);
    form.reset();
  }
  
  renderComments();
}
