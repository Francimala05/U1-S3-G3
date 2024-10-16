
//RICHIAMARE LE FUNZIONI IN ALTO 

const handleSubmit = function (event) {  //assegnamo un nome alla funzione e diamogli la variabile event
  event.preventDefault()    // .preventDefault comando per evitare al click il refresh della pagina all'invio del form

  addTask()                 //richiamo funzione in basso 
  attachComplete()         //richiamo funzione in basso
  attachDelete()          //richiamo funzione in basso
}



const addTask = function () {                       //dichiarazione della prima funzione per aggiungere la task
  let tasks = document.querySelector('#tasks')            //creazione variabile tasks e con il selector si va a prendere il div vuoto tramite id
  let inputField = document.querySelector('#newTask input') //creazione variabile che fa riferimento al div che racchiude il form e l'input come parametro e relazione padre-figlio
  
//il newTask qui presente è una variabile uguale ad apici che creano un div dandogli unsa classe task e uno span con un altro id, 
//anche con un inputField.value che prenderà i dati  richiamati con ${} sennò sarebbero arancioni.  Proprio qui andremo ad inserire gli elementi. 


//è proprio come un modello di inserimenento 
  let newTask = `                                                        
      <div class="task">
          <span id="taskname">
              ${inputField.value}    
          </span>
          <button class="delete">
              <i class="far fa-trash-alt"></i>
          </button>
      </div>
  `
  //inseriamo gli elementi del new tasks ( presi dall'input fields) e verranno inseriti nel div vuoto(tasks)
  tasks.innerHTML += newTask  //innerHTML fa riferimento a tutto il documento, è generico e accede a tutto il documento. Viene effettuata una somma tra i value
  inputField.value = ''       //creazione dinamico del valore nell'area
}

const attachComplete = function () { 
  let allTasks = document.querySelectorAll('.task')   //creazione variabile che va a richiamare tutti gli elementi tasks all interno del div tasks tramite queryselectorAll e quindi diventa un array da ciclare
  for (let i = 0; i < allTasks.length; i++) {          //ciclo for counter per allTasks con indice. 
    allTasks[i].addEventListener('click', function () { //tutti gli elementi della collezione alla fine aggiungono la funzione .addEventListener(evento,funzione) che aggiungono l'evento
      this.classList.toggle('completed')                //il this è una parola chiave che fa riferimento alla funzione precedente, il classList prende la classe. l toggle sbarra la parola una volta eseguita un operazione.
          })
  }
}

const attachDelete = function () {                       //creazione variabile che va a richiamare tutti gli elementi  da eliminare
  let allDeleteButtons = document.querySelectorAll('.delete')  //questa funzione comprende una variabile che prende tutti gli elementi dalla classe delete.
  for (let i = 0; i < allDeleteButtons.length; i++) {   //ciclo for counter per allDeleteButtons con indice.
    allDeleteButtons[i].addEventListener('click', function () {  //tutti gli elementi della collezione alla fine aggiungono la funzione .addEventListener(evento,funzione) che aggiungono l'evento
      this.parentNode.remove()       //quindi ora si aggiunge il metodo remuve() che rimuove la parola. E va anche sopra di un elemento grazie anche alla i
    })
  }
}

window.onload = function () {                     //è il caricamento pagina 
  let form = document.querySelector('form')       //si crea il form e scatta la funzione
  form.addEventListener('submit', handleSubmit)       //si ascolta l'evento con i due parametri
}
