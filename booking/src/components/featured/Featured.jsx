import React from "react";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured__item">
        <img
          src="https://www.tuannguyentravel.com/data/images/54434761_2341133345938323_967203309091815424_n.jpg"
          alt=""
          className="featured__item__img"
        />
        <div className="featured__item__title">
            <h1>Qui Nhơn</h1>
            <h2>qwe</h2>
        </div>
      </div>
      <div className="featured__item">
        <img
          src="https://www.chudu24.com/wp-content/uploads/2020/02/82782763_174142150538228_2759305837267912503_n-1.jpg"
          alt=""
          className="featured__item__img"
        />
        <div className="featured__item__title">
            <h1>Vũng Tàu</h1>
            <h2>qwe</h2>
        </div>
      </div>
      <div className="featured__item">
        <img
          src="https://thuthuatnhanh.com/wp-content/uploads/2020/10/hinh-anh-da-lat-homestay-dep-nhat.jpeg"
          alt=""
          className="featured__item__img"
        />
        <div className="featured__item__title">
            <h1>Đà Lạt</h1>
            <h2>qwe</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
