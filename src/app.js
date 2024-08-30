/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#bookRow").innerHTML = generateBooks();
  document.querySelector("#btn").addEventListener("click");
};

const generateBooks = () => {
  let books = ["A1", "B2", "C3", "D4", "E5"];

  let bookCards = "";

  books.map((book, index) => {
    bookCards += "<div><h6>" + book + "</h6><button id='btn'>❤️</div>";
  });

  return bookCards;
};
