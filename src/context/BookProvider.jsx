import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({children}) => {

const [storedBooks , setStoredBooks] = useState([]);
const [wishlist , setWishlist] = useState([])

  const handleReadBtn = (currentBook) => {
    const isExistBook = storedBooks.find(book => book.bookId === currentBook.bookId);

    if(isExistBook){
      toast.error('Book Already Exist')
      return
      
    }else{
      setStoredBooks([...storedBooks , currentBook])
      toast.success(`${currentBook.bookName} is added to list`)
    }
  }

  const handleWishlistBtn = (currentBook) => {

    const isExistInReadList = storedBooks.find(book => book.bookId === currentBook.bookId);

    if(isExistInReadList){
        toast.error('Book already exist in read list');
        return
    }

    const isExistBook = wishlist.find(book => book.bookId === currentBook.bookId);

    if(isExistBook){
      toast.error('Book Already Exist')
      return
      
    }else{
      setWishlist([...wishlist , currentBook])
      toast.success(`${currentBook.bookName} is added to wishlist`)
    }
  }

  const data = {
    storedBooks,
    setStoredBooks,
    handleReadBtn,
    handleWishlistBtn,
    wishlist
  }

    return (
       <BookContext.Provider value={data}>
        {children}
       </BookContext.Provider>
    );
};

export default BookProvider;