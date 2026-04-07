import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookProvider";

const BookDetails = () => {
  const { id } = useParams();

  const books = useLoaderData();

  const expectedBook = books.find((book) => book.bookId == id);

  const {
    image ,
   bookName,
   author,
   category,
   review,
    tags,
   totalPages,
  publisher,
  yearOfPublishing,
  rating
  } = expectedBook;

  const {handleReadBtn , handleWishlistBtn} = useContext(BookContext);
  

  return (
    <div className="my-20">
    <div className="container mx-auto grid lg:grid-cols-2 justify-items-center  p-5">
      <figure className=" rounded-xl flex items-center justify-center">
        <img
          src={image}
          className="h-141 rounded-md "
        />
      </figure>
      <div className=" mt-6 lg:mt-0">
        <h2 className="card-title play-fair font-bold md:text-[30px] lg:text-[40px]">{bookName}</h2>
        <p className="font-medium mt-2  lg:text-[20px] grow-0 text-[#131313]/80">By : {author}</p>

        <div className="border-t border-b my-4 border-[#131313]/15 py-4">
          <p className="font-medium text-[20px] text-[#131313]/80"> {category}</p>
        </div>

        <div className="border-b border-[#131313]/15 py-4 ">
            <p className="text-[#131313]/80"><span className="font-bold text-[#131313]">Review : </span>{review}</p>
            <div className="flex gap-5 mt-10">
              <p className="font-bold text-[#131313]">Tag</p>
              {
                 tags.map((tag , index) => {
                     return(
                        <div key={index} className="badge bg-[#23BE0A]/5 text-[#23BE0A]">{tag}</div>
                     )
                })
              }
            </div>
        </div>


            <div className="mt-5 space-y-4">
              <p className="text-[#131313]/80">Number of Pages :    <span className="font-bold text-[#131313]">{totalPages}</span></p>
              <p className="text-[#131313]/80">Publisher :    <span className="font-bold text-[#131313]">{publisher}</span></p>
              <p className="text-[#131313]/80">Year of Publishing :    <span className="font-bold text-[#131313]">{yearOfPublishing}</span></p>
              <p className="text-[#131313]/80">Rating :    <span className="font-bold text-[#131313]">{rating}</span></p>
            </div>

        <div className="flex gap-5  mt-8">
          <button 
          onClick={() => handleReadBtn(expectedBook)}
          className="btn btn-outline border-[#131313]/30">Mark as Read</button>
          <button 
          onClick={() => handleWishlistBtn(expectedBook)}
          className="btn text-white bg-[#50B1C9]">Add to Wishlist</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BookDetails;
