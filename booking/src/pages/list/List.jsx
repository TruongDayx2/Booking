import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const List = () => {

  const location = useLocation()

  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)
  
  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <div className="listSearch__title">Search</div>
            <div className="listSearch__item">
              <label htmlFor="">Destinantion</label>
              <input type="text" placeholder={destination}/>
            </div>
            <div className="listSearch__item">
              <label htmlFor="">Check-in date</label>
              <input type="text" />
            </div>
            <div className="listSearch__item">
              <label htmlFor="">Check-out date</label>
              <input type="text" />
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  )
}

export default List