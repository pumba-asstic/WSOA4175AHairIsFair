import React, { Component } from 'react'
import "../Styles/contact.css";

import BackgroundImage from "../Assets/flowerCrown.jpg";

export default class contact extends Component {
  render() {
    return (
      <div className="ContactList" >

              <h1>Contact Us:</h1>
              <img className="Background"src={BackgroundImage}/>
              <p> email-adress: contactUs@HairisFair.com</p>
              <p> contact Number: + 277 00 23233</p>
              <p>and on all Socials @ HairisFair</p>
            
      </div>
    )
  }
}
