import { faBed, faCar, faMountain, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
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
        </div>
    </div>
  )
}

export default Header