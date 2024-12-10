import React from "react";
import "./Book.css";

function Book({ book }) {
  console.log(book); 
  return (
    <div className="book">
         {/* <img src="Images/book1.png" alt="" /> */}
      <a href={book.link} target="_blank" rel="noopener noreferrer">
        <img
          src={`${process.env.PUBLIC_URL}/Images/${book.image}`}
          alt={book.title}
          className="book-image"
        />
      </a>
    </div>
  );
}

export default Book;
