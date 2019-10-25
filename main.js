var formParent = document.querySelector(".idea-form");
var cardContainerParent = document.querySelector(".empty-section-container");
var titleInput = document.querySelector(".title-input");
var ideaInput = document.querySelector(".body-textarea");
var saveButton =  document.querySelector(".save-btn");
var ideaArray = [];

formParent.addEventListener("click", onFormParentClick);
cardContainerParent.addEventListener("click", onCardParentClick);

function onCardParentClick() {
  console.log(event)
   if (event.target.classList.contains("star-icon")) {
   styleStar(event);
  }
}

function onFormParentClick() {
  instantiateIdea(titleInput.value, ideaInput.value, false);
}


function createCard(newIdea) {
  if (event.target.className === "save-btn" && titleInput.value && ideaInput.value) {
    var cardHtml = `
    <div id="${newIdea.id}" class="card-container">
      <header class="card-header">
        <img class="star-icon" src="${checkStar(newIdea)}" alt="star favorite button">
        <img src="./images/delete.svg" alt="delete button">
      </header>
      <h2 class="idea-title-heading">${newIdea.title}</h2>
      <p class="card-idea-paragraph">${newIdea.body}</p>
      <footer class="card-footer">
        <img src="./images/comment.svg" alt="comment button">
        <p class="card-comment">Comment</p>
      </footer>
    </div>
    `;
    cardContainerParent.insertAdjacentHTML("afterbegin", cardHtml);
    formParent.reset();
  }
}

function instantiateIdea(title, body, star) {
  var idea = new Idea(title, body, star);
  ideaArray.push(idea);
  createCard(idea);
}

// function findIndexOfIdea(event) {
//   var ideaId = parseInt(event.target.classList.contains("card-container").id);
//     for (var i = 0; i < ideaArray.length; i++) {
//       if (ideaArray[i].id === ideaId) {
//         return ideaArray[i];
//       }
//     }
// }

function styleStar(event) {
  var hiddenObj = findIndexOfIdea(event);
    hiddenObj.toggleStar();
    if (hiddenObj.star) {
      event.target.src = "./images/star-active.svg";
    } else {
      event.target.src = "./images/star.svg";
    }
}

function checkStar(newIdea) {
  if (newIdea.favorite) {
    return "./images/star-active.svg"
  } else {
    return "./images/star.svg"
    }
}
