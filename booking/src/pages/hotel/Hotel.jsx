import {
  faArrowLeft,
  faArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const hanldeOpen = (i) => {
    setOpen(true);
    setSlideNumber(i);
  };
  console.log(slideNumber)
  

  const handleNextImg = (key)=>{
    let newSlideNumber
    if(key === 'l'){
      newSlideNumber = slideNumber === 0 ? photos.length-1 : slideNumber -1
    }else{
      newSlideNumber = slideNumber === photos.length-1 ?  0 : slideNumber + 1
    }
    setSlideNumber(newSlideNumber)
  }

  const photos = [
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/274605321.jpg?k=f31cc5c27072a119a14ddc232e2f44aeea9a45039d378561067fcf24b78bab76&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/276496386.jpg?k=fb246cacfaf10d52b554dcb8349ecff73cd70bd49c2c33cdc9f4fae5061ac46f&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/276496386.jpg?k=fb246cacfaf10d52b554dcb8349ecff73cd70bd49c2c33cdc9f4fae5061ac46f&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/276496386.jpg?k=fb246cacfaf10d52b554dcb8349ecff73cd70bd49c2c33cdc9f4fae5061ac46f&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/276496386.jpg?k=fb246cacfaf10d52b554dcb8349ecff73cd70bd49c2c33cdc9f4fae5061ac46f&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/276496386.jpg?k=fb246cacfaf10d52b554dcb8349ecff73cd70bd49c2c33cdc9f4fae5061ac46f&o=&hp=1",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hContainer">
        {open && (
          <div className="hSlider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="hSlider__close"
              onClick={()=>setOpen(false)}
            />
            <FontAwesomeIcon icon={faArrowLeft} className="hSlider__arrow" onClick={()=>handleNextImg('l')} />
            <div className="hSlider__wrap">
              <img src={photos[slideNumber].src} alt="" className="hSlider__wrap__img" />
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="hSlider__arrow" onClick={()=>handleNextImg('r')}/>
          </div>
        )}
        <div className="hWrapper">
          <button className="hWrapper__bookNow">Reserve or Book Now!</button>
          <h1 className="hWrapper__title">Residenza Italia</h1>
          <div className="hWrapper__address">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>18 Via Venezia 3° piano int.5, Rione Monti, 00184 Rome, Italy </span>
          </div>
          <span className="hWrapper__distance">Excellent location - 500m from center</span>
          <span className="hWrapper__priceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hWrapper__img">
            {photos.map((photo, i) => (
              <div key={i} className="hWrapper__img__wrap">
                <img
                  onClick={() => hanldeOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hWrapper__img__wrap__item"
                />
              </div>
            ))}
          </div>
          <div className="hWrapper__details">
            <div className="hWrapper__details__texts">
              <h1 className="hWrapper__details__texts__title">Stay in the heart of Rome</h1>
              <p className="hWrapper__details__texts__des">
                Located in a central area of Rome, 700 m from Quirinal Hill, Residenza Italia
                provides air-conditioned accommodation with free WiFi and a flat-screen TV. It is
                situated 700 m from Santa Maria Maggiore and features a tour desk. The apartment
                comes with 4 bedrooms, a kitchen with dishwasher and microwave, and 4 bathrooms with
                a bidet, slippers and a washing machine. Towels and bed linen are provided. Both a
                bicycle rental service and a car rental service are available at the apartment.
                Popular points of interest near Residenza Italia include Barberini Metro Station,
                Piazza Barberini and Cavour Metro Station. The nearest airport is Rome Ciampino, 15
                km from the accommodation, and the property offers a paid airport shuttle service.
                This is our guests' favourite part of Rome, according to independent reviews.
              </p>
            </div>
            <div className="hWrapper__details__price">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Situated in the real heart of Rome, this property has an excellent location score of
                9.4
              </span>
              <h2>
                <b>$900</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
