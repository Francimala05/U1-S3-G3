document.getElementById("add-btn").addEventListener("click", function () {
    const input = document.getElementById("todo-input");
    const todoText = input.value.trim();
  
    if (todoText !== "") {
      addTodoItem(todoText);
      input.value = ""; // Pulisce il campo di input
    } else {
      alert("Inserisci un’attività prima di aggiungerla!");
    }
  });
  
  function addTodoItem(text) {
    const list = document.getElementById("todo-list");
  
    // Crea un nuovo elemento <li>
    const todoItem = document.createElement("li");
    const todoSpan = document.createElement("span");
    todoSpan.textContent = text;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Elimina";
    deleteBtn.classList.add("delete-btn");
  
    // Gestisci la rimozione dell'attività
    deleteBtn.addEventListener("click", function () {
      list.removeChild(todoItem);
    });
  
    // Aggiungi il testo e il pulsante Elimina all'elemento <li>
    todoItem.appendChild(todoSpan);
    todoItem.appendChild(deleteBtn);
  
    // Aggiungi il nuovo elemento <li> alla lista
    list.appendChild(todoItem);
  }