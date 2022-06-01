import React, { Component } from 'react'
import "../Styles/NetArtHome.css";
import { Link } from 'react-router-dom';

import img1 from "../Assets/stylingDredz2.jpg";
import img2 from "../Assets/benandBetty2.jpg";
import img3 from "../Assets/braids1.png";
import img4 from "../Assets/afro1.jpg";
import img5 from "../Assets/afro5.jpg";
import img6 from "../Assets/afro2.jpg";



const VideoURL1 ="https://youtu.be/tj-_49G1jWw"; 
const ArticleURL1 = "https://scholarship.law.duke.edu/cgi/viewcontent.cgi?article=3147&context=dlj";


export default class NetArtHair extends Component {
  render() {
    return (
      <div className="aboutHair">
              <h1>THE HAIR THAT MAKES THE HAIR.</h1>
              
            <div className='main-content'>
               <div className='portfolio'>
               <div className='portfolio-item medium' style={{backgroundImage:`url(${img4}`}}></div>
               <div className='portfolio-item large' style={{backgroundImage:`url(${img3}`}}></div>
               <div className='portfolio-item medium' style={{backgroundImage:`url(${img2}`}}></div>
               <div className='portfolio-item small four'><a href={VideoURL1}><img  className="gridImages"src={img1}/></a>
               </div>
               <div className='portfolio-item tall'><a href ={ArticleURL1}><img className="ImagesBlocks" src={img6}/>
                 </a>

               </div>
               <div className='portfolio-item wide' style={{backgroundImage:`url(${img5}`}}></div>
           </div>
            </div>
            <Link to ="./NetArtPieces/Netart"><button>Next</button></Link>
      </div>
    )
  }

}