import {
  faArrowLeft,
  faArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

const Hotel = () => {
  const location = useLocation();
  // Use split function because locataion.pathname = /hotels/fdhjsfdj(id). I need only id
  const id = location.pathname.split("/")[2];
  
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const {dates, options} = useContext(SearchContext)

  const MILISECONDS_PER_DAY = 1000 * 60 * 60 *24
  function dayDifference(date1,date2){
    const timeDiff = Math.abs(date2.getTime() - date1.getTime())
    const diffDays = Math.ceil(timeDiff / MILISECONDS_PER_DAY)
    return diffDays
  }
  
  const days = dayDifference(dates[0].endDate, dates[0].startDate)
  

  const hanldeOpen = (i) => {
    setOpen(true);
    setSlideNumber(i);
  };

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  console.log(options.room)

  const handleNextImg = (key) => {
    let newSlideNumber;
    if (key === "l") {
      newSlideNumber = slideNumber === 0 ? data.photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === data.photos.length - 1 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };


  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Loading"
      ) : (
        <div className="hContainer">
          {open && (
            <div className="hSlider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="hSlider__close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="hSlider__arrow"
                onClick={() => handleNextImg("l")}
              />
              <div className="hSlider__wrap">
                <img src={data.photos[slideNumber]?.src} alt="" className="hSlider__wrap__img" />
              </div>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="hSlider__arrow"
                onClick={() => handleNextImg("r")}
              />
            </div>
          )}
          <div className="hWrapper">
            <button className="hWrapper__bookNow">Reserve or Book Now!</button>
            <h1 className="hWrapper__title">{data.name}</h1>
            <div className="hWrapper__address">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hWrapper__distance">Excellent location - {data.distance}m from center</span>
            <span className="hWrapper__priceHighlight">
              Book a stay over ${data.cheapestprice} at this property and get a free airport taxi
            </span>
            <div className="hWrapper__img">
              {data.photos?.map((photo, i) => (
                <div key={i} className="hWrapper__img__wrap">
                  <img
                    onClick={() => hanldeOpen(i)}
                    src={photo}
                    alt=""
                    className="hWrapper__img__wrap__item"
                  />
                </div>
              ))}
            </div>
            <div className="hWrapper__details">
              <div className="hWrapper__details__texts">
                <h1 className="hWrapper__details__texts__title">{data.title}</h1>
                <p className="hWrapper__details__texts__des">
                  {data.desc}
                </p>
              </div>
              <div className="hWrapper__details__price">
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Situated in the real heart of Rome, this property has an excellent location score
                  of 9.4
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room }</b> ({days} nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Hotel;
