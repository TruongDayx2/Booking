import React from "react";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://t-cf.bstatic.com/xdata/images/hotel/square600/284887692.webp?k=d731f8c07672a829ce2591733a67da50b08a442154de2dd36751e65399f61f63&o=&s=1"
        alt=""
        className="searchItem__img"
      />
      <div className="searchItem__des">
        <h1 className="searchItem__des__title">Aurum Resorts</h1>
        <span className="searchItem__des__distance">500m from center</span>
        <span className="searchItem__des__taxiOp">Free airport taxi</span>
        <span className="searchItem__des__subTitle">Studio Resorts with Air conditioning</span>
        <span className="searchItem__des__features">Entire studio - 3 bathroom - pool</span>
        <span className="searchItem__des__cancelOp">Free cancellation</span>
        <span className="searchItem__des__cancelOpSubtitle">You can cancel later, so lock in this great price today!</span>

      </div>
      <div className="searchItem__details">
        <div className="searchItem__details__rate">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="searchItem__details__texts">
            <span className="searchItem__details__texts__price">$120</span>
            <span className="searchItem__details__texts__taxOp">Includes taxes and fees</span>
            <button className="searchItem__details__texts__checkBtn">See availability</button>

        </div>
      </div>
    </div>
  );
};

export default SearchItem;
