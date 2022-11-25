import React from "react";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const { data, loading, error } = useFetch("/hotels/countByCity?cities=Berlin,London,Lisbon");
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featured__item">
            <img
              src="https://www.tuannguyentravel.com/data/images/54434761_2341133345938323_967203309091815424_n.jpg"
              alt=""
              className="featured__item__img"
            />
            <div className="featured__item__title">
              <h1>BerLin</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featured__item">
            <img
              src="https://www.chudu24.com/wp-content/uploads/2020/02/82782763_174142150538228_2759305837267912503_n-1.jpg"
              alt=""
              className="featured__item__img"
            />
            <div className="featured__item__title">
              <h1>London</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featured__item">
            <img
              src="https://thuthuatnhanh.com/wp-content/uploads/2020/10/hinh-anh-da-lat-homestay-dep-nhat.jpeg"
              alt=""
              className="featured__item__img"
            />
            <div className="featured__item__title">
              <h1>Lisbon</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
