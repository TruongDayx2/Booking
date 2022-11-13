import React from "react";

const FeaturedHome = () => {
  return (
    <div className="fHome">
      <div className="fHome__item">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
          alt=""
          className="fHome__item__img"
        />
        <span className="fHome__item__name">7Seasons Apartments Budapest</span>
        <span className="fHome__item__city">06. Terézváros, Hungary, Budapest</span>
        <span className="fHome__item__price">Starting from VND 2,375,705</span>
        <div className="fHome__item__rate">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fHome__item">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1"
          alt=""
          className="fHome__item__img"
        />
        <span className="fHome__item__name">Oriente Palace Apartments</span>
        <span className="fHome__item__city">Centro, Spain, Madrid</span>
        <span className="fHome__item__price">Starting from VND 2,971,297</span>
        <div className="fHome__item__rate">
          <button>8.9</button>
          <span>Fabulous</span>
        </div>
      </div>
      <div className="fHome__item">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1"
          alt=""
          className="fHome__item__img"
        />
        <span className="fHome__item__name">numa I Vita Apartments</span>
        <span className="fHome__item__city">Fortezza da Basso, Italy, Florence</span>
        <span className="fHome__item__price">Starting from VND 1,960,533</span>
        <div className="fHome__item__rate">
          <button>8.7</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fHome__item">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fHome__item__img"
        />
        <span className="fHome__item__name">Aparthotel Stare Miasto</span>
        <span className="fHome__item__city">Old Town, Poland, Kraków</span>
        <span className="fHome__item__price">Starting from VND 2,507,759</span>
        <div className="fHome__item__rate">
          <button>9.0</button>
          <span>Fabulous</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHome;
