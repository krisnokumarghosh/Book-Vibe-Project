import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const ListedReadList = () => {
  const { storedBooks } = useContext(BookContext);

  return (
    <div className="my-10">
      <div className="space-y-9 ">
        {storedBooks.map((book, ind) => {
          return (
            <div 
            className="grid  md:grid-cols-2 p-5 border border-base-300 shadow rounded-2xl"
            key={ind}>
              <figure className=" rounded-xl bg-base-200 max-w-57.5 flex items-center justify-center">
                <img src={book.image} className="h-43 rounded-md " />
              </figure>
              <div className=" mt-6 lg:mt-0">
                <h2 className="play-fair font-bold md:text-[30px] lg:text-[40px]">
                  {book.bookName}
                </h2>
                <p className="font-medium mt-2  lg:text-[20px] grow-0 text-[#131313]/80">
                  By : {book.author}
                </p>

                <div className="border-b border-[#131313]/15 py-4 ">
                  <div className="flex gap-5 mt-1">
                    <p className="font-bold text-[#131313]">Tag</p>
                    {book.tags.map((tag, index) => {
                      return (
                        <div
                          key={index}
                          className="badge bg-[#23BE0A]/5 text-[#23BE0A]"
                        >
                          {tag}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-5 space-y-4 lg:space-y-0 lg:flex items-center gap-5">
                  <p className="text-[#131313]/80">
                    Number of Pages :{" "}
                    <span className="font-bold text-[#131313]">
                      {book.totalPages}
                    </span>
                  </p>
                  <p className="text-[#131313]/80">
                    Publisher :{" "}
                    <span className="font-bold text-[#131313]">
                      {book.publisher}
                    </span>
                  </p>
                </div>

                <div className="  mt-8">
                  <Link 
                  to={`/bookDetails/${book.bookId}`}
                  className="btn bg-[#23BE0A] text-white border-0 rounded-full">
                    view Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListedReadList;
