import React from 'react'

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className="mail__title">Save time, save money!</h1>
        <span className="mail_des">Sign up and we'll send the best deals to you</span>
        <div className="mail__container">
            <input type="text" placeholder='Your email' />
            <button>Subcribe</button>
        </div>
    </div>
  )
}

export default MailList