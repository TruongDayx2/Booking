import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <div className="listSearch__title">Search</div>
            <div className="listSearch__item">
              <label htmlFor="">Destinantion</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="listSearch__item">
              <label htmlFor="">Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="listSearch__item">
              <label htmlFor="">Options</label>
              <div className="listSearch__item__options">
                <div className="listSearch__item__option">
                  <span className="listSearch__item__option__text">
                    Min price<small> per night</small>
                  </span>
                  <input type="number" className="listSearch__item__option__input" />
                </div>
                <div className="listSearch__item__option">
                  <span className="listSearch__item__option__text">
                    Max price<small> per night</small>
                  </span>
                  <input type="number" className="listSearch__item__option__input" />
                </div>
                <div className="listSearch__item__option">
                  <span className="listSearch__item__option__text" >
                    Adult
                  </span>
                  <input type="number" min={1} placeholder={options.adult} className="listSearch__item__option__input" />
                </div>
                <div className="listSearch__item__option">
                  <span className="listSearch__item__option__text">
                    Children
                  </span>
                  <input type="number" min={0} placeholder={options.children} className="listSearch__item__option__input" />
                </div>
                <div className="listSearch__item__option">
                  <span className="listSearch__item__option__text">
                    Room
                  </span>
                  <input type="number" min={1} placeholder={options.room} className="listSearch__item__option__input" />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
