import React, { Component } from 'react'
import "../Styles/theBlogs.css";
import introImage from "../Assets/Blogpost1 .png";
import { Link } from 'react-router-dom';


export default class Ass2Reflect extends Component {
  render() {
    return (
      <div className="blogContent">
          
          <h1> Assignment Two Reflection</h1>
          
             <Link to="../Blogs" ><button className="NextButton">Blogs Home</button></Link>
           </div>   
      
    )
  }
}
