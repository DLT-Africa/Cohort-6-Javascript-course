const searchInput = document.getElementById("search-input");
const noteInput = document.getElementById("note-input");

const saveButton = document.getElementById("save-note");
const exportButton = document.getElementById("export-note");
const darkModeToggle = document.getElementById("toggle-dark-mode");

const noteList = document.getElementById("notes-list");

document.addEventListener("DOMContentLoaded", loadNotes);
saveButton.addEventListener("click", function () {
  let noteText = noteInput.value.trim();

  if (noteText !== "") {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    let newNote = {
      text: noteText,
      timestamp: new Date().toISOString(),
    };

    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNote();
    noteInput.value = "";
  }
});

function loadNotes() {
  displayNote();
}

function displayNote() {
  noteList.innerHTML = "";
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  notes.forEach(addNoteToList);
}

function addNoteToList(note) {
  let li = document.createElement("li");

  li.innerHTML = `
        <strong>${note.text} </strong> <br>
        <small>${formatDate(note.timestamp)}</small>
    `;

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "❌";

  deleteBtn.addEventListener("click", function () {
    deleteNote(note.text);
  });

  li.appendChild(deleteBtn);
  noteList.appendChild(li);
}

function deleteNote(noteText) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes = notes.filter((note) => note.text !== noteText);

  localStorage.setItem("notes", JSON.stringify(notes));
  displayNote();
}

exportButton.addEventListener("click", function () {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  let jsonStr = JSON.stringify(notes, null, 2);
  let blob = new Blob([jsonStr], { type: "application/json" });
  let url = URL.createObjectURL(blob);

  let a = document.createElement("a");
  a.href = url;
  a.download = "notes.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

darkModeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

searchInput.addEventListener("input", function () {
  let searchTerm = searchInput.value.toLowerCase();

  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  let filteredNote = notes.filter((note) => 
    note.text.toLowerCase().includes(searchTerm)
  );

  noteList.innerHTML = "";
  filteredNote.forEach(addNoteToList);
});

function formatDate(timestamp) {
  let date = new Date(timestamp);
  return date.toLocaleString();
}
