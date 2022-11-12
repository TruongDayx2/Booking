import { faBed, faCalendarDays, faCar, faMountain, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import React, { useState } from 'react'

const Header = () => {
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);  
  return (
    <div className='header'>
        <div className='header__container'>
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
            <h1 className="header__container__title">A lifetime of discounts? It's Genius</h1>
            <p className="header__container__des">
                Get rewarded for your travels - unlock instant savings of 10% or more with a free 77Booking account
            </p>
            <button className="header__container__btn">Sing in/ Register</button>
            <div className="header__container__search">
                <div className="header__container__search__item">
                    <FontAwesomeIcon icon={faBed} className='header__container__search__item__icon' />
                    <input type="text" placeholder='Where are you going?' className='header__container__search__item__input' />
                </div>
                <div className="header__container__search__item">
                    <FontAwesomeIcon icon={faCalendarDays} className='header__container__search__item__icon' />
                    <span className='header__container__search__item__text'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className='header__container__search__item__date'
                    />
                </div>
                <div className="header__container__search__item">
                    <FontAwesomeIcon icon={faPerson} className='header__container__search__item__icon' />
                    <span className='header__container__search__item__text'>2 adults 2 children 1 room</span>
                </div>
                <div className="header__container__search__item">
                    <button className="header__container__btn">Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header