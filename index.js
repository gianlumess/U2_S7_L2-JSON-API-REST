const saveBtn = document.getElementById("saveButton");
const deleteBtn = document.getElementById("deleteButton");
const form = document.querySelector("form");

form.onsubmit = (event) => {
  event.preventDefault();
};

const saveName = () => {
  const name = document.getElementById("event-name").value;
  console.log(name);
  if (name) {
    localStorage.setItem("nome-utente", name);
    document.querySelector("p").innerText = `Ultimo nome salvato: ${name}`;
  }
};

const deleteName = () => {
  localStorage.removeItem("nome-utente");
  document.querySelector("p").innerText = "";
};

window.addEventListener("DOMContentLoaded", () => {
  const nameStorage = localStorage.getItem("nome-utente");

  if (nameStorage) {
    document.querySelector("p").innerText = `Nome salvato: ${nameStorage}`;
  }
});
