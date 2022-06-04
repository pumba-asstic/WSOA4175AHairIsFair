import React, { Component } from 'react'
import "../Styles/Wireframe.css";
import wireframeImg from "../Assets/BlogpostWireframe.png";
import blogWireImg from "../Assets/Blogs_landing_pages.png";
import contactWireImg from "../Assets/contact_page_wireframe.png";
import homewireImg from "../Assets/landingpage_Wireframe..png";
import guideImg from "../Assets/colourGuide.png";
import WireFrameArtPiece1 from "../Assets/ArtPiece_1.png";
import WireFrameArtPiece2 from "../Assets/ArtPiece_2.png";

export default class DesignAesth extends Component {
  render() {
    return (
      <div className="Wires">
        <h1>Welcome to the Design and Aesthetics choices</h1>
        <p>
          The following images are images of the annotated wire frames and colour/ style guide. 
          I based my site off the colours in the guide, cause of what the colours mean and what the represent in regard to the content and context of the site. 
          The colour scheme might be a little off, in terms of the colour way but most of these colours we tend to see them in natural hair sites or hair product containers.
        </p>
        <p>
          These coloure represent growth, new beginings and reason why I chose these colour is because the site is all about hair,
          hair that breaks, "The Big Chop" methods and what type of hair products to use when dealing with different hair textures.</p>
          
         <p> The font I choose is the new times roman font, I had 3 option and that font stood out the most and because it was mostly used in the websites that i have researched
          It is popular for making things look professional and that is the feel I was going for in terms of the font, since the colour way gives a snese of growth and clamness
          I then decided that I wanted it to also have a professional feel to it " professional hair salon feel". Everyone wants to get their hair done by professionals but if they cannot afford it 
          they can get the tips and tricks from my site. 
        </p>
        <div className="WireframeContainer">
          <img className="Img3" src={homewireImg}/>
          <img className="Img3" src={wireframeImg}/>
          <img className="Img3" src={blogWireImg}/>
          <img className="Img3" src={contactWireImg}/>
          <img className="Img3" src={guideImg}/>
          <img className="Img3" src={WireFrameArtPiece1}/>
          <img className ="Img3" src={WireFrameArtPiece2}/>
        </div>



      </div>
    )
  }
}
