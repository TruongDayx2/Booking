import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  const [min, setMin] = useState(undefined)
  const [max, setMax] = useState(undefined)

  const { data, loading, error, reFecth } = useFetch(`/hotels?city=${destination}&min=${min || 0}&max=${max||900}`);

  const handleSearch = ()=>{
    reFecth()
  }

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
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
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
                  <input type="number" onChange={e=>setMin(e.target.value)} className="listSearch__item__option__input" />
                </div>
                <div className="listSearch__item__option">
                  <span className="listSearch__item__option__text">
                    Max price<small> per night</small>
                  </span>
                  <input type="number" onChange={e=>setMax(e.target.value)}  className="listSearch__item__option__input" />
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
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="listResult">
            {loading ? "loading" : <>
                {data.map(item=>(
                  <SearchItem item={item} key={item._id}/>
                ))}
            </> }
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
