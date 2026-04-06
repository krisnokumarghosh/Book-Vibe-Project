import React, { use } from "react";
import BookCard from "../shared/ui/BookCard";


const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  console.log(books);

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-[40px] play-fair text-center mb-9">
        Books
      </h1>

    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {books.map((book) => {
        return (
          <BookCard key={book.bookId} book={book}></BookCard>
        );
      })}
    </div>
      
    </div>
  );
};

export default AllBooks;
