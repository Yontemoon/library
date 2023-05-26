const addButton = document.querySelector('#addButton');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');
let getForm = document.getElementById("getForm");

const library = document.getElementById("library");
const childLibrary = library.querySelectorAll("#parent > .childLibrary")
const titleRow = document.getElementById('titleRow');
const authorRow = document.getElementById('authorRow');
const pagesRow = document.getElementById('pagesRow');
const readRow = document.getElementById('readRow');
const buttonRow = document.getElementById('buttonRow');


const titleLib =document.getElementById("titleLib");


getForm.addEventListener('submit', function(e){
    e.preventDefault();
    let title = document.getElementById('bookTitle').value;
    let author = document.getElementById('bookAuthor').value;
    let pages = document.getElementById('bookPages').value;
    let read = document.querySelector('input[name="yesNo"]:checked').value;
    addBooktoLibrary(title, author, pages, read);
})


let myLibrary = [ 
    {title: 'Mindhunter', author: "John Douglas", pages: 234, read: "Yes"},
    {title: 'Tinker Tailor Soldier Spy', author: "John le Carre", pages: 355, read: "No"},
    {title: 'Don Quixote', author: "Miguel de Cervantes", pages: 900, read: "No"}
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBooktoLibrary(title, author, pages, read) {
    // let libraryContent = "";
    let titleContent = "";
    let authorContent = "";
    let pagesContent = "";
    let readContent = "";
    let buttonContent = "";
    const getObject = new Book(title, author, pages, read);
    let numberOfBooks = myLibrary.push(getObject); //Returns the length of myLibrary
    for (let i = 0; i < numberOfBooks; i++) {
        titleContent += `<p class=row${i}>Title: ` + myLibrary[i].title + "</p>";
        authorContent += `<p class=row${i}>Author: ` + myLibrary[i].author + "</p>";
        pagesContent += `<p class=row${i}>Pages: ` + myLibrary[i].pages + "</p>";
        readContent += `<p class=row${i} id=row${i}>Read: ` + myLibrary[i].read + `</p>`;
        readContent += `<button onclick=changeReadStatus(${i}) class =row${i} id=buttonRow${i}>Change Status</button>`;
        buttonContent += `<button onclick=deleteRow(${i}) class=row${i}>Delete</button>`;
    }

    titleRow.innerHTML = titleContent;
    authorRow.innerHTML = authorContent;
    pagesRow.innerHTML = pagesContent;
    readRow.innerHTML = readContent;
    buttonRow.innerHTML = buttonContent;
}


function openPopUp() {
    popup.style.display = 'block';
}

function closeForm() {
    popup.style.display = 'none';
}

function deleteRow(rowNumber) {
    myLibrary.splice(rowNumber, 1);
    let deleteRow = document.querySelectorAll(`.row${rowNumber}`);
    deleteRow.forEach(function(everyRow) {
        everyRow.remove();
    })
}

function changeReadStatus(rowNumber) {
    let rowStatus = document.getElementById(`row${rowNumber}`)
    if (myLibrary[rowNumber].read === "Yes") {
        myLibrary[rowNumber].read = "No";
        rowStatus.textContent ="Read: No";
    } else if (myLibrary[rowNumber].read === "No"){
        myLibrary[rowNumber].read.innerHTML = "Yes";
        rowStatus.textContent ="Read: Yes";
    }

}




