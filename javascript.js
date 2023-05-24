const addButton = document.querySelector('#addButton');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');
let getForm = document.getElementById("getForm");

getForm.addEventListener('submit', function(e){
    e.preventDefault();
    let title = document.getElementById('bookTitle').value;
    let author = document.getElementById('bookAuthor').value;
    let pages = document.getElementById('bookPages').value;
    let yesNo = document.querySelector('input[name="yesNo"]:checked').value;

    console.log(title);
})


let myLibrary = [ 
    {title: 'Mindhunter', author: "John Douglas", pages: 234, read: "Yes"},
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.yesNo = read;
    addBooktoLibrary(title, author, pages, read);
}



function openPopUp() {
    popup.style.display = 'block';
}

function closeForm() {
    popup.style.display = 'none';
}

function addBooktoLibrary(title, author, pages, read) {
    console.log(title);
    console.log(author);
    console.log(pages);
    console.log(read);

}


