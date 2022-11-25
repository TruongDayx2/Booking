import React from "react";
import useFetch from "../../hooks/useFetch";

const FeaturedHome = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limt=4");


  return (
    <div className="fHome">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data &&
            data.map((item) => (
              <div key={item._id} className="fHome__item">
                <img
                  src={item.photos[0]}
                  alt="wait"
                  className="fHome__item__img"
                />
                <span className="fHome__item__name">{item.name}</span>
                <span className="fHome__item__city">{item.city}</span>
                <span className="fHome__item__price">Starting from ${item.cheapestPrice}</span>
                {item.rating && <div className="fHome__item__rate">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default FeaturedHome;
