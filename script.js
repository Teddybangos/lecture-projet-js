let books =[
    { id: 1, title: 'The Power of Habit', author: 'Charles Duhigg' },
    { id: 2, title: 'Atomic Habits', author: 'James Clear' },
    { id: 3, title: 'The Alchemist', author: 'Paulo Coelho' },
    
  
    
]

const bookCountElement = document.querySelector('.bookCount');
const table = document.querySelector('.table');
const tblBody = document.createElement('tbody');


//Fonction pour afficher le nombre de livres
function setbookCount(count){
    bookCountElement.innerHTML = count;
}


//Ajouter un livre
function createTable(){
  for(let index = 0; index < 3; index++){
    let row = document.createElement('tr');

    //Creer le bouton de suppression
    let buttonCell = document.createElement('td');
    let deleteButton = document.createElement('button');
    let buttonText = document.createTextNode('Supprimer');
    deleteButton.setAttribute('class', 'deleteButton');
    deleteButton.appendChild(buttonText);

    


    for (let element = 0; element < books.length; element++){

      // Ajouter les td
        const cell = document.createElement('td');
        const cellText = document.createTextNode(Object.values(
          books[index])[element]
          );
        deleteButton.setAttribute('id', books[index].id);
        buttonCell.appendChild(deleteButton);
        cell.appendChild(cellText);
        row.appendChild(cell);
        row.appendChild(buttonCell);
        row.setAttribute('id', books[index].id);


    }
    tblBody.appendChild(row);
  }
  table.appendChild(tblBody);
  document.body.appendChild(table);
}
createTable();
let deleteButton = document.querySelectorAll('.deleteButton');

deleteButton.forEach(function(button){
  button.addEventListener('click', function(){
    const id = this.getAttribute('id');
    let row = document.getElementById(id);
    row.parentNode.removeChild(row);

    // enlever l'element supprimé du tableau
let filteredBooks = books.filter((book) => book.id !== id);
books = filteredBooks;
setbookCount(books.length);
  });
})
let modal = document.getElementById('bookModal');
let modalButton = document.getElementById('addBookModalButton');
let close= document.querySelector('.close');

modalButton.onclick = function() {  
  modal.style.display = "block";
}

close.onclick = function() {  
    modal.style.display = "none";
  }

  window.onclick = function(event){
    if (event.target == modal) {  
      modal.style.display = "none";
    }
  }

// ajouter un livre
let addBookButton = document.querySelector('.addBookButton');
addBookButton.onclick = function(event){
  event.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const id = books.length + 1;
  if(!title || !author){
    alert('Veuillez remplir tous les champs');
    return;
  }
const newBook = {id, title, author};
books.push(newBook);
setbookCount(books.length);
 let row = document.createElement('tr');

 let cell0 = row.insertCell(0);
 const cell0Text = document.createTextNode(id);
 cell0.appendChild(cell0Text);
 row.appendChild(cell0);

 let cell1 = row.insertCell(1);
 const cell1Text = document.createTextNode(title);
 cell1.appendChild(cell1Text);
 row.appendChild(cell1);

  let cell2 = row.insertCell(2);
  const cell2Text = document.createTextNode(author);
  cell2.appendChild(cell2Text);
  row.appendChild(cell2); 
  //Creer le bouton de suppression
  let buttonCell = document.createElement('td');
  let deleteButton = document.createElement('button');
  let buttonText = document.createTextNode('Supprimer');
  deleteButton.setAttribute('class', 'deleteButton');
  deleteButton.appendChild(buttonText);
  buttonCell.appendChild(deleteButton);
  row.appendChild(buttonCell);

  row.setAttribute('id', id);
  tblBody.appendChild(row);
  table.appendChild(tblBody);
  document.body.appendChild(table);

  // vider les inputs
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';

}
  setbookCount(books.length);