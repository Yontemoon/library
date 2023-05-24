const addButton = document.querySelector('#addButton');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');
let getForm = document.getElementById("getForm");
const library = document.getElementById("library");
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
    {title: 'Mindhunter', author: "John Douglas", pages: 234, read: "Yes"}
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBooktoLibrary(title, author, pages, read) {
    let libraryContent = "";
    const getObject = new Book(title, author, pages, read);
    let numberOfBooks = myLibrary.push(getObject);
    // displayLibrary(numberOfBooks);

    for (let i = 0; i < numberOfBooks; i++) {
        libraryContent += "<p>Title: " + myLibrary[i].title + "</p>";
        libraryContent += "<p>Author: " + myLibrary[i].author + "</p>";
        libraryContent += "<p>Pages: " + myLibrary[i].pages + "</p>";
        libraryContent += "<p>Read: " + myLibrary[i].read + "</p>";
    }

    library.innerHTML = libraryContent;
}

// function displayLibrary(numberOfBooks) {
//     for (let i = 0; i < numberOfBooks; i++) {
//         console.log(Book.title);
//         // for (let j = 0; j < myLibrary.length; j++) {

//         // }
//     }
// }

function openPopUp() {
    popup.style.display = 'block';
}

function closeForm() {
    popup.style.display = 'none';
}




