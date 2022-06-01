import React, { Component } from 'react'
import "../Styles/theBlogs.css";

import { Link } from 'react-router-dom';


export default class Ass1Reflect extends Component {
  render() {
    return (
      <div className="blogContent">
          
          <h1> Assignment One Reflection</h1>
          
             <Link to="/Ass2Reflect" ><button className="NextButton">Next</button></Link>
           </div>   
      
    )
  }
}
