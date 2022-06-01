import React, { Component } from 'react'
import "../Styles/theBlogs.css";
import {Link} from "react-router-dom";


export default class Navbar  extends Component {
    render(){
        return(
            <div className="blogContent">
            <h1>Net Art Preparation work </h1>
              <h3>the hair that makes the hair: </h3>
              <Link to="/reflection" ><button className="NextButton">Next</button></Link>
              </div>
        )
    }
}
