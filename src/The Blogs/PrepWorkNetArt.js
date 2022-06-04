import React, { Component } from 'react'
import "../Styles/theBlogs.css";
import {Link} from "react-router-dom";

import HumanHair from "../Assets/Hair Jewellery.png";
import WireFrameArtPiece1 from "../Assets/ArtPiece_1.png";
import WireFrameArtPiece2 from "../Assets/ArtPiece_2.png";
import MosiacPieceExample from "../Assets/mosiac test 1.jpg";

const ARTURL1 ="http://indirect.flights/";

const refURL1 ="https://www.artsyshark.com/2021/05/26/what-is-creative-coding/#";
const refURL2 ="http://indirect.flights/";
const refURL3 ="https://www.artsy.net/article/artsy-editorial-curious-victorian-tradition-making-art-human-hair";


export default class Navbar  extends Component {
    render(){
        return(
            <div className="blogContent">
            <h1>Net Art Preparation. </h1>
              <h3>the hair that makes the hair: </h3>
              <p>Making code creative as Andrew Bryant would say Creative coding is the practice of making art with code.
                As computers have become more integral in our lives, artists have turned to the language the computer speaks, code, 
                to communicate their ideas.”  , this is a practice that is used to make art out of code,
                it has benefits such as giving a better and deeper understanding of the tools and the ideas of the foundation of digital technology, 
                it also pushes artists to make a reach across different disciplines,
                making programming techniques that are needed to make the artwork.

                Using code as a creative tool or art medium is very useful because it can be multimedium, 
                it can use different things to create the art it also adds randomness to it. it is also a quick way
                to switch up things the way we would want them, because the computer is in control of the software.</p>

                <p>Where the creative code comes in, is the making of the software and using code in such a creative way 
                that it allows the art to appear on the screen in either real-time or not. Art that is created with code is meant
                to show the wonders of technology as well as the relationship between the two tools/ mediums. 

                What I have chose to show with my artwork is the relationship that humans have with hair, more especially black women, 
                the different types of tools and tricks that come with dealing with kinky and corse hair and what type of relationship that 
                builds the different communities they chose to engage with and the challenges that come with it. </p>

                <p>I look at the old Victorian tradition of making art from human hair since most of the content that we tend to engage with is 
                physical art works made with hair and not necessarily digital artwork made with hair. </p>

                <p>The tradition of making hair art seeps out of the 19th century where people would braid and lock hair into jewellery, 
                    it got its roots from the 17th and 18th century where there was high infant mortality rate. 
                    (The period was named the “death everywhere period” and a mourning period, where people would cut off their hair) 
                    People would keep and save hair for future jewellery making. 
                    These type of jewellery piece wee deemed as intimate because they would either be worn on the body or in their home. </p>
                <img className="Img2" src={HumanHair}/>

                <p>As the title of this prepwork suggests, I would like to make art form human hair. my site is mostly inspired by the idea of dealing 
                    with hair, it has some personal experiences embedded in it, with my own hair journey that I started in 2019 with a “big Chop”. 
                    What I’m trying to do with this site is break the stereotypes that come with natural hair in all communities
                    but more especially in the black woman community. I want to put in products and methods that 
                    I use to use for my own hair to grow and give more of an educational site to the all-natural hair queens.</p> 

                <p>For the net art piece, I was inspired the Joe Hamliton 2015 online piece titled Indirect flight. Accessible on 
                <a href={ARTURL1}>http://indirect.flights/</a> how this piece inspired me was the way the piece was built and how 
                the images intertwine into each other and with each scroll there’s a new layer of images shown.
                With my art piece what I wanted it to be like a mosaic tile(look at image below) of a black woman with her natural hair, 
                with each hovering over the artwork it would reveal certain images of black women hairstyles, hair types, 
                hair textures and different hair products used on black woman hair or natural hair in general as well as youtube videos 
                of hair tutorials and certain articles about black woman hair and the stereotypes that comes with it. 
                It also creates the feeling of looking at a hair strand under a microscope and being able to see the different elements that make hair, hair. </p>
             <img className="Img2" src={MosiacPieceExample}/>
             <br/>
             <br/>
             
                <p>I plan on making 3 different pieces, simply because of there are too many different hair types and textures and curl pattern, 
                each piece will have a different layout from the last. 
                
                <ul className="ReferenceList">
                    <li> <u><b>Piece One</b></u>: this piece will be using css grids and styling, this piece, will contain links that the user is going to be 
                    able to interact with and engage with the content. The content is related to the content of the site, 
                    this will include so YouTube videos and articles that deal with the different stereotypes that hair comes with.</li>
                    <li> <b><u>Piece Two</u></b>: this piece will be making use of the react-mosaic-component. 
                    This piece will be mixing 2 different images and make it one. It will be a showing or playing with the idea of how the hair is 
                    built and the different fibres that comes with. it will be mixing the images in real time 
                    and the user can chose which images are to be mixed together to get an image in a mosaic layout with the 2 images chosen.</li>
                    <li> <b><u>Piece Three</u></b>: this piece will also be making use of the react- mosaic plugin to make a image, 
                    this piece will not be as interactive as the other previous pieces. 
                    it will be a static image that Is made up out of the different images that are about hair.</li>
                    </ul>  
                    
                    
                    The 3 piece will be different in layout because of how different hair is in general, I wanted to give the user a
                    feeling that they are dealing with different hair types, textures and styles with each artwork they will be dealing with       
                </p>
                <img className="Img2" src ={WireFrameArtPiece2}/>
                <br/>
                <br/>
                <img className="Img2" src={WireFrameArtPiece1}/>
            <h2>References</h2>
            <ol className="ReferenceList">
                <li>Bryant, A. (2021, May 26). <i>What is Creative Coding? </i>Retrieved from Artsy Shark: 
                <a href={refURL1}>https://www.artsyshark.com/2021/05/26/what-is-creative-coding/#</a></li>
                <li>Hamilton, J. (2015). <i>Indirect Flights</i>. Retrieved from indirect Flights:<a href={refURL2}> http://indirect.flights/</a></li>
                <li>Meier, A. (2018, Feb 13).<i> Visual Culture: The Curious Victorian Tradition of Making Art from Human Hair </i>. 
                Retrieved from Artsy net:<a href={refURL3}>https://www.artsy.net/article/artsy-editorial-curious-victorian-tradition-making-art-human-hair</a></li>
            </ol>
              <Link to="/reflection" ><button className="NextButton">Next</button></Link>
              </div>
        )
    }
}
