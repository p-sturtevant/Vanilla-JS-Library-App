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

function createLibraryList() {
  let list = document.querySelector(".book-container");

  myLibrary.forEach((book) => {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `<div class="top"><h2 class="title">${book.title}</h2></div>
    <p class="author">${book.author}</p>
    <p class="pages">${book.pages}</p>`;
    list.appendChild(card);
  });
}

createLibraryList();

//add a book button

let btn = document.querySelector(".add-book");
btn.addEventListener("click", openModal);

function openModal() {
  let modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `<div class="modal-content">
  <span class="close">&times;</span>
  <h2>Add New Book</h2>
  <form>
    <input type="text" id="title" name="title" placeholder="Title" required><br><br>
    <input type="text" id="author" name="author" placeholder="Author" required><br><br>
    <input type="number" id="pages" name="pages" placeholder="# of Pages" required><br><br>
    <button type="submit" class="submit">Add Book</button>
  </form>
</div>`;
  document.body.appendChild(modal);
  let close = document.querySelector(".close");
  close.addEventListener("click", closeModal);

  modal.addEventListener("submit", addBook);
}

function closeModal() {
  document.body.removeChild(document.querySelector(".modal"));
}

function addBook(e) {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;

  addBookToLibrary(title, author, pages);
  createLibraryList();
  closeModal();
}
