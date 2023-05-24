const addButton = document.querySelector('#addButton');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');
let getForm = document.getElementById("getForm");

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
    const getObject = new Book(title, author, pages, read);
    myLibrary.push(getObject);
}

function openPopUp() {
    popup.style.display = 'block';
}

function closeForm() {
    popup.style.display = 'none';
}




