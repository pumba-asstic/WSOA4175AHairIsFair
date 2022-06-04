import React, { Component } from 'react'
import "../Styles/NetArtHome.css";
import { Link } from 'react-router-dom';

import img1 from "../Assets/stylingDredz2.jpg";
import img2 from "../Assets/benandBetty2.jpg";
import img3 from "../Assets/braids1.png";
import img4 from "../Assets/afro1.jpg";
import img5 from "../Assets/afro5.jpg";
import img6 from "../Assets/afro2.jpg";
import img7 from "../Assets/siteImage4.jpg";
import img8 from "../Assets/types of hair 2.png";
import img9 from "../Assets/site Image2.jpg";
import img10 from "../Assets/hair-patterns-curly-wavy-hair.jpg";


const VideoURL1 ="https://youtu.be/tj-_49G1jWw"; 
const VideoURL2="https://youtu.be/u4ZXP1zfBXM";
const VideoURL3="https://youtu.be/-yJ17ysm5DY";
const VideoURL4 ="https://youtu.be/VVAztnJiMrk";


const ArticleURL1 = "https://scholarship.law.duke.edu/cgi/viewcontent.cgi?article=3147&context=dlj";
const ArticleURL2 = "http://www.ijessnet.com/uploades/volumes/1598609328.pdf";


export default class NetArtHair extends Component {
  render() {
    return (
      <div className="aboutHair">
              <h1>THE HAIR THAT MAKES THE HAIR.</h1>
              
            <div className='main-content'>
               <div className='portfolio'>
                    <div className='portfolio-item medium' style={{backgroundImage:`url(${img4}`}}></div>
                    <div className='portfolio-item large'><a href={VideoURL2}><img src={img3}/></a></div>
                    <div className='portfolio-item medium' style={{backgroundImage:`url(${img2}`}}></div>
                    <div className='portfolio-item small four'><a href={VideoURL1}><img  className="gridImages"src={img1}/></a>
                    </div>
                    <div className='portfolio-item medium'><img className="Image" src={img8}/></div>
                    <div className='portfolio-item tall'><a href ={ArticleURL1}><img className="ImagesBlocks" src={img6}/>
                      </a>
                    </div>
                    <div className='portfolio-item small four'><a href={ArticleURL2}><img  className="Images"src={img7}/></a>
                    </div>
                    <div className='portfolio-item wide' style={{backgroundImage:`url(${img5}`}}></div>
                    <div className='portfolio-item medium'><a href={VideoURL3}><img className="picture" src={img9}/></a></div>
                    <div className='portfolio-item wide'><a href={VideoURL4}><img className="pictures" src={img10}/></a></div>
                </div>
                  
                


            </div>
            
      </div>
    )
  }

}