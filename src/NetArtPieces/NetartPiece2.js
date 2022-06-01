import React, { Component } from 'react'
import "../Styles/NetArtHome.css";
//import "../Styles/Piece2Styles.css";
import { Link } from 'react-router-dom';
import pic1 from "../Assets/benandBetty1.jpg";

export default  class NetartPiece2 extends Component{
    render(){
        return(

            <div className="aboutHair">
                    <h2>Second Structure</h2>
                    <img className="Pics" src={pic1}/>
                    <Link to='./NetArtPieces/Piece3'><button>Next</button></Link>
            </div>
        )
    }
}