import React from "react";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="searchItem__img" />
      <div className="searchItem__des">
        <h1 className="searchItem__des__title">{item.name}</h1>
        <span className="searchItem__des__distance">{item.distance}m from center</span>
        <span className="searchItem__des__taxiOp">Free airport taxi</span>
        <span className="searchItem__des__subTitle">Studio Resorts with Air conditioning</span>
        <span className="searchItem__des__features">{item.desc}</span>
        <span className="searchItem__des__cancelOp">Free cancellation</span>
        <span className="searchItem__des__cancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="searchItem__details">
        {item.rating && (
          <div className="searchItem__details__rate">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="searchItem__details__texts">
          <span className="searchItem__details__texts__price">${item.cheapestPrice}</span>
          <span className="searchItem__details__texts__taxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="searchItem__details__texts__checkBtn">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
