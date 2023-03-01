import "./style.css";

let myLibrary = [];

function Book(author, title, pages, read) {
  //constructor
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
  //add book, duh!
  let book = new Book(author, title, pages, read);
  myLibrary.push(book);
  return myLibrary;
}

addBookToLibrary("tolkien", "The Hobbit", "400", false);
addBookToLibrary("tolkien", "The Hobbit", "400", false);
addBookToLibrary("tolkien", "The Hobbit", "400", false);
addBookToLibrary("tolkien", "The Hobbit", "400", false);
addBookToLibrary("tolkien", "The Hobbit", "400", false);
addBookToLibrary("tolkien", "The Hobbit", "400", false);
addBookToLibrary("tolkien", "The Hobbit", "400", false);
addBookToLibrary("tolkien", "The Hobbit", "400", false);
addBookToLibrary("tolkien", "The Hobbit", "400", false);
addBookToLibrary("tolkien", "The Hobbit", "400", false);
addBookToLibrary("tolkien", "The Hobbit", "400", false);
addBookToLibrary("tolkien", "The Hobbit", "400", false);
addBookToLibrary("tolkien", "The Hobbit", "400", false);
addBookToLibrary("tolkien", "The Hobbit", "400", false);
addBookToLibrary("tolkien", "The Hobbit", "400", false);
addBookToLibrary("tolkien", "The Hobbit", "400", false);
addBookToLibrary("tolkien", "The Hobbit", "400", false);
addBookToLibrary("tolkien", "The Hobbit", "400", false);

function createLibraryList() {
  let list = document.querySelector(".book-container");

  myLibrary.forEach((book) => {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `<h2 class="title">${book.title}</h2>
    <p class="author">${book.author}</p>
    <p class="pages">${book.pages}</p>`;
    list.appendChild(card);
  });
}

createLibraryList();
