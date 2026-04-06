import React from "react";
import bannerImg from "../../assets/pngwing 1.png"

const Banner = () => {
  return (
    <div className=" container py-34 rounded-2xl my-25 mx-auto hero bg-base-300 ">
      <div className="hero-content flex-col w-full justify-between lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="w-79.5 h-98.5"
        />
        <div>
          <h1 className="text-[56px] font-bold play-fair">Books to freshen up <br /> your bookshelf</h1>
          <button className="btn mt-12 bg-[#23BE0A] text-white rounded-md">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
