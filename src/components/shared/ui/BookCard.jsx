import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 w-75 md:w-96 shadow-sm p-3 border border-base-200 rounded-2xl">
            <figure className="bg-base-300 py-5 rounded-md">
              <img
                src={book.image}
                className="h-33.5 rounded"
              />
            </figure>
            <div className="card-body">
                <div className="card-actions">
               
               {
                book.tags.map((tag , index) => {
                     return(
                        <div key={index} className="badge bg-[#23BE0A]/5 text-[#23BE0A]">{tag}</div>
                     )
                })
               }
                
              </div>
              <h2 className="text-[24px] font-bold play-fair">
                {book.bookName}
              </h2>
              <p className="font-medium mb-2">
               By : {book.author}
              </p>
            </div>
            <div className="mt-2 py-2 px-3 border-t border-dashed border-[#131313]/15 flex justify-between">
                <p className="font-medium text-[#131313]/80">{book.category}</p>
               <div className="flex items-center gap-2">
                 <p className="font-medium text-[#131313]/80">{book.rating} </p>
                 <FaRegStar/>
               </div>
              </div>
          </Link>
    );
};

export default BookCard;