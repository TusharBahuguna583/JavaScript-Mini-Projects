const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
  attachEventListeners();
}

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

function attachEventListeners() {
  const inputBoxes = document.querySelectorAll(".input-box");

  inputBoxes.forEach((box) => {
    box.onkeyup = () => {
      updateStorage();
    };
  });
}

createBtn.addEventListener("click", () => {
  const noteDiv = document.createElement("div");
  noteDiv.className = "note";

  const inputBox = document.createElement("p");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");

  const img = document.createElement("img");
  img.src = "images/delete.png";
  img.className = "delete-btn";

  noteDiv.appendChild(inputBox);
  noteDiv.appendChild(img);
  notesContainer.appendChild(noteDiv);

  updateStorage();
  attachEventListeners();
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    updateStorage();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.execCommand("insertLineBreak");
    e.preventDefault();
  }
});

showNotes();
