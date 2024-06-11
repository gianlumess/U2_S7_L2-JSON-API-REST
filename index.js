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

const updateCounter = () => {
  //se già presente il contatore lo ottengo, altrimenti assegno 0
  let counter = parseInt(sessionStorage.getItem("counter")) || 0;

  counter++;

  sessionStorage.setItem("counter", counter);

  document.getElementById("counter").innerText = counter;
};

window.addEventListener("DOMContentLoaded", () => {
  //avvio il counter
  updateCounter();
  //imposto la frequenza di di refresh del counter
  setInterval(updateCounter, 1000);

  //contorlla se in memoria è salvato un valore nella key 'nome-utente'
  const nameStorage = localStorage.getItem("nome-utente");

  if (nameStorage) {
    document.querySelector("p").innerText = `Nome salvato: ${nameStorage}`;
  }
});
