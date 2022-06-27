import React, { Component } from 'react'
import "../Styles/NetArtHome.css";
import { Link } from 'react-router-dom';

//images
import img1 from "../Assets/artpictures/cantu.jpg";
import img2 from "../Assets/artpictures/cantu1.jpg";
import img3 from "../Assets/artpictures/Hydrating-Conditioner-500ml.jpg";
import img4 from "../Assets/artpictures/my natural hair combo.jpg";
import img5 from "../Assets/stylinDredz2.jpg";
import img6 from "../Assets/artpictures/mynaturalhair2.jpg";
import img7 from "../Assets/artpictures/Nativ Child.jpg";
import img8 from "../Assets/artpictures/afrobontanics.png";
import img9 from "../Assets/afro1.jpg";
import img10 from"../Assets/afro4.jpeg";
import img11 from "../Assets/benandBetty1.jpg";
import img12 from "../Assets/dread3.jpg";



const VideoURL1 ="https://youtu.be/tj-_49G1jWw"; 
const VideoURL2="https://youtu.be/u4ZXP1zfBXM";
const VideoURL3="https://youtu.be/SiRr7JcqQgc";


const shop1Url="https://naturalhairco.shop/";
const shop2Url="https://afro-botanics.com/";
const shop3Url="https://www.jabu-stone.com/";


const ArticleURL1 = "https://scholarship.law.duke.edu/cgi/viewcontent.cgi?article=3147&context=dlj";
const ArticleURL2 = "http://www.ijessnet.com/uploades/volumes/1598609328.pdf";


export default class NetArtHair extends Component {
  render() {
    return (
      <div className="aboutHair">
              <h1>THE HAIR THAT MAKES THE HAIR.</h1>
              
            <div className='main-content'>
               <div className='portfolio'>
                    <div className='portfolio-item medium' style={{backgroundImage:`url(${img5}`}}></div>
                    <div className='portfolio-item large'><a href={VideoURL2}><img  className="ImagesBlocks"src={img3}/></a></div>
                    <div className='portfolio-item small four'><a href={ArticleURL2}><img  className="Images"src={img9}/></a>
                    </div>
                    <div className='portfolio-item medium' style={{backgroundImage:`url(${img10}`}}></div>
                    <div className='portfolio-item small four'><a href={VideoURL1}><img  className="gridImages"src={img1}/></a>
                    </div>
                    <div className='portfolio-item medium' style={{backgroundImage:`url(${img2}`}}></div>
                    <div className='portfolio-item wide'><a href={shop3Url}><img src={img8}/></a></div>
                    <div className='portfolio-item tall'><a href ={ArticleURL1}><img className="ImagesBlocks" src={img6}/>
                      </a>
                      </div>
                    <div className='portfolio-item wide'><a href={shop2Url}><img  className="WideImages" src={img11}/></a></div>
                    <div className='portfolio-item small four'><a href={shop1Url}><img className="picture"src={img7}/></a>
                    </div>
                    <div className='portfolio-item wide'><img className="pictures" src={img12}/></div>
                    <div className='portfolio-item medium'><a href={VideoURL3}><img className="pictures" src={img4}/></a></div>
                    {/* <div className='portfolio-item medium'><a href={VideoURL3}></a></div>
                    <div className='portfolio-item wide'><a href={VideoURL4}></a></div> */}
                </div>
            </div>
            <p>“That overzealous new natural is not intentionally trying to cause you pain. 
              She just lovingly wants her sister to know the freedom of accepting, loving, 
              and nurturing her natural hair texture. Once that level of freedom is achieved, 
              one can truly know that we are not our hair.”</p>
              
                <p className="Names"> ― Monica Millner</p>
<br/>

          <Link to="./theface"><button>Next Art</button></Link>
      </div>
    )
  }

}