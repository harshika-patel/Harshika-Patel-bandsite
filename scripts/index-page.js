import { BandSiteApi } from './band-site-api.js';

// Initialize API
const apiKey = "89762a8a-d2d6-4098-a81c-e571e503db5e"; 
const bandSiteApi = new BandSiteApi(apiKey);

// Form and DOM Elements
const form = document.querySelector(".comment__form");
const fields = document.querySelectorAll(".comment-field");
const nameField = document.querySelector(".comment__form-input");
const textarea = document.querySelector(".comment__form-textarea");
const myCommentEL = document.querySelector(".displayComments");

// Function to Create Comment Card
function displayComments(note) {
  const cardElement = document.createElement("article");
  cardElement.classList.add("comment__display");

  const divTag = document.createElement("div");
  divTag.classList.add("comment__row1");

  const imgTag = document.createElement("div");
  imgTag.classList.add("comment__profile-img");
  imgTag.alt = "Avatar";


  const h3Tag = document.createElement("h3");
  h3Tag.classList.add("comment__name");
  h3Tag.innerText = note.name;

  const pTag = document.createElement("p");
  pTag.classList.add("comment__date");
  pTag.innerText = new Date(note.timestamp).toLocaleDateString();

  const divTag2 = document.createElement("div");
  divTag2.classList.add("comment__description");

  const pTag2 = document.createElement("p");
  pTag2.classList.add("comment__description");
  pTag2.innerText = note.comment;
  
  const divTag3 = document.createElement("div");
  divTag3.classList.add("buttons");

  const likeBtn=document.createElement("button");
  likeBtn.classList.add("buttons__like");
  likeBtn.innerText="Like👍👍"
  const deleteBtn=document.createElement("button");
  deleteBtn.classList.add("buttons__delete");
  deleteBtn.innerText="Delete🗑️🗑️"


  const divider = document.createElement("hr");
  divider.classList.add("comment-divider");

  cardElement.appendChild(divTag);
  cardElement.appendChild(divTag2);
  cardElement.appendChild(divTag3);
 
  cardElement.appendChild(divider);

  divTag.appendChild(imgTag);
  divTag.appendChild(h3Tag);
  divTag.appendChild(pTag);
   
  divTag2.appendChild(pTag2);

  divTag3.appendChild(likeBtn);
  divTag3.appendChild(deleteBtn);

 
  return cardElement;
}

// Render Comments from API
const renderComments = async () => {
  try {
    const comments = await bandSiteApi.getComments(); // Fetch comments from API
    myCommentEL.innerHTML = ""; // Clear existing comments
    comments.forEach((comment) => {
      const card = displayComments(comment);
      myCommentEL.appendChild(card);
    });
  } catch (error) {
    console.error("Error rendering comments:", error);
  }
};

// Handle Form Submission
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nameVal = e.target.name.value.trim();
  const commentVal = e.target.comment.value.trim();

  if (!nameVal || !commentVal) {
    // Validation
    fields.forEach((field) => {
      field.style.border = "1px solid red";
    });
    return;
  }

  // Reset validation styles
  fields.forEach((field) => {
    field.style.border = "1px solid black";
  });

  // Post new comment
  const newComment = { name: nameVal, comment: commentVal };
  try {
    await bandSiteApi.postComment(newComment);
    form.reset(); // Reset form fields
    renderComments(); // Refresh comments
  } catch (error) {
    console.error("Error posting comment:", error);
  }
});

// Initial Render
renderComments();
