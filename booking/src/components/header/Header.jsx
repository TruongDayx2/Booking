import {
  faBed,
  faCalendarDays,
  faCar,
  faMountain,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const navigate = useNavigate()
  //Destionation
  const [destination, setDestination] = useState("")
  // Date
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // Options
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    console.log(openOptions )
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  //search
  const handleSearch = ()=>{
    navigate("/hotels",{state:{destination,date,options}})
  }

  return (
    <div className="header">
      <div className={type === "list" ? "header__container listMode" : "header__container"  }>
        <div className="header__container__list">
          <div className="header__container__list__item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="header__container__list__item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="header__container__list__item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="header__container__list__item">
            <FontAwesomeIcon icon={faMountain} />
            <span>Attractions</span>
          </div>
          <div className="header__container__list__item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="header__container__title">A lifetime of discounts? It's Genius</h1>
            <p className="header__container__des">
              Get rewarded for your travels - unlock instant savings of 10% or more with a free
              77Booking account
            </p>
            <button className="header__container__btn">Sing in/ Register</button>
            <div className="header__container__search">
              <div className="header__container__search__item">
                <FontAwesomeIcon icon={faBed} className="header__container__search__item__icon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="header__container__search__item__input"
                  onChange={e=>setDestination(e.target.value)}
                />
              </div>
              <div className="header__container__search__item">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="header__container__search__item__icon"
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="header__container__search__item__text"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className="header__container__search__item__date"
                  />
                )}
              </div>
              <div className="header__container__search__item">
                <FontAwesomeIcon
                  icon={faPerson}
                  className="header__container__search__item__icon"
                />
                <span
                  onClick={() => setOpenOptions(!openOptions) }
                  className="header__container__search__item__text"
                >
                  {`${options.adult} adult - ${options.children} children - ${options.room} room`}
                  {/* adult  */}
                  {console.log("123" ,openOptions )}
                  {openOptions && 
                    <div className="header__container__search__options">
                      <div className="header__container__search__options__item">
                        <span className="header__container__search__options__item__text">
                          Adult
                        </span>
                        <div className="header__container__search__options__item__counter">
                          <button
                            disabled={options.adult < 2}
                            onClick={() => handleOption("adult", "d")}
                            className="header__container__search__options__item__counter__btn"
                          >
                            -
                          </button>
                          <span className="header__container__search__options__item__counter__number">
                            {options.adult}
                          </span>
                          <button
                            onClick={() => handleOption("adult", "i")}
                            className="header__container__search__options__item__counter__btn"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* children  */}

                      <div className="header__container__search__options__item">
                        <span className="header__container__search__options__item__text">
                          Children
                        </span>
                        <div className="header__container__search__options__item__counter">
                          <button
                            disabled={options.children < 1}
                            onClick={() => handleOption("children", "d")}
                            className="header__container__search__options__item__counter__btn"
                          >
                            -
                          </button>
                          <span className="header__container__search__options__item__number">
                            {options.children}
                          </span>
                          <button
                            onClick={() => handleOption("children", "i")}
                            className="header__container__search__options__item__counter__btn"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="header__container__search__options__item">
                        <span className="header__container__search__options__item__text">Room</span>
                        <div className="header__container__search__options__item__counter">
                          <button
                            disabled={options.room < 2}
                            onClick={() => handleOption("room", "d")}
                            className="header__container__search__options__item__counter__btn"
                          >
                            -
                          </button>
                          <span className="header__container__search__options__item__number">
                            {options.room}
                          </span>
                          <button
                            onClick={() => handleOption("room", "i")}
                            className="header__container__search__options__item__counter__btn"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  }
                </span>
              </div>
              <div className="header__container__search__item">
                <button onClick={handleSearch} className="header__container__btn">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
