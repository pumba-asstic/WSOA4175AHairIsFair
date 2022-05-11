import React, { Component } from 'react'
import '../Styles/Home.css';
import HomeImage from '../Assets/types of hair.jpg';
import SecondHomeImage from "../Assets/types of hair 2.png"; 
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
     <div className="WelcomeScreen">
       <div>
          <h1>HAIR IS FAIR!  DARLINGS</h1>
          <img src={HomeImage}/>
          <p>The in's and the out's about hair, all you need to know about hair, the racial context of it.
              The acceptable "office hairstyle", the sterotypes of hair esspecially in womxn of colour.
              we are looking at the meaning created with hair. hence the HAIR IS FAIR title. 
            </p>
          <Link to="/NetArtHair">
          <button> See More</button>
          </Link>
          </div>
     </div>
    )
  }
}
