import React from 'react'
import './styles.scss'

import dogImg from '../../assets/dog-email.png'

const Contact = () => {
  return (
    <div id='contact'>
      <div className="container">
        <h1 className="big-text">Let's talk</h1>
        <form method="post">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required min="3" value="" />
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required value="" />
          <label htmlFor="messege" className="textarea-label">
            Your messege
            <img src={dogImg} alt="Email dog" />
          </label>
          <textarea id="messege" name="messege" required>
          </textarea>
          <button className="send-button rounded">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact