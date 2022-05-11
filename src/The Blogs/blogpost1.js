import React, { Component } from 'react'
import "../Styles/theBlogs.css";
import introImage from "../Assets/Blogpost1 .png";
import { Link } from 'react-router-dom';

const ArtURl ="https://collection.eliterature.org/3/work.html?work=with-those-we-love-alive ";

const ref1URL ="https://hyperallergic.com/563938/the-work-of-art-in-the-age-of-the-internet/[2021/08/17 13:53:51]";
const ref2URl ="https://medium.com/digital-art-weekly/net-art-post-internet-art-new-aesthetics-the-fundamentals-of-art-on-the-internet-55dcbd9d6a5[2021/08/17 14:00:49]";
const ref3URl="https://collection.eliterature.org/3/work.html?work=with-those-we-love-alive";

export default class blogpost1 extends Component {
  render() {
    return (
      <div className="blogContent">
          
          <h1> Net/ Web Art Blog</h1>
          <img className="Img2"src={introImage}/>
          <p>Net art is different from internet art, net art is referring to network art, 
              it holds the following attributes according to Tilman Baumgӓrtel, 
              these attributes are “connectivity, global reach, multimediality, immateriality, interactivity and egality”, 
              net art is art that uses the internet as its primary material. </p>

            <p>For this writing I am looking at the electronic literature collection website, 
                this website functions as an online bookstore, where you can find different literatures to read,
                as well as online interactive narratives. This type of website forms part of the Andre Malraux concept,
                that is mentioned by David Carrier in his 2020 article <i>The work of Art in the Age of the internet.</i>  “Museum without walls”, Carrier, 
                talks quite a bit about how the internet created the opportunity for artists to showcase their work in online galleries and how this is affecting physical galleries. 
                He explains that in the art world everything is becoming more and more focused on the digital and the internet (Carrier, 2020).</p>
          
            <p>
            This website hosts 3 different volumes that run through from 2006 to 2016 the net art or better yet eliterature is chose is the third volume (2016) 
             Walter Benjamin in <i>“The work of Art in the Age of mechanical Reproduction”(1936)</i> quotes Paul Valery  “ must expect great innovation to transform the entire
             technique if the arts… bring about an amazing change in our very notion of art” .
             The literature is titled <a href={ArtURl}><i><b>with those we love alive</b></i></a> by the Porpentine charity heartscapes,
             published in 2014. This is an interactive twine web-based game / narrative. 
            </p>

            <p>
            The collection. eliterature website is what Danae in his 2019 article <i>Net art ,Post- internet Art, New Aesthetics : 
            the fundamentals of art on the internet  about the “technological transition towards web 2.0”</i> (Danae, 2019) 
            with this net art or rather e-narrative game the creator and the player/ reader are fully immersed and engaging with the game and web ,
            the creator first needs tests the game and also fully experience it before sending it out the public to enjoy, 
            just like how Danae says when the artist later switches positions and becomes as witness to the art just like the rest of the world. 
            </p>
            <p>
            This art piece is very interesting because it falls under the web 2.0 specifications, 
            where Danae talks about web 2.0  “social networking sites like Facebook, Twitter” being the omnipresence of the internet, 
            where it is no more just a static HTML webpage but its now a place where you( the viewer) can share real-time content to the artist, 
            just like  this twine game, the readers get to interact with the system in such a way that there is point where they draw and their drawings are 
            stored on a tumblr page for viewers to each other’s creative drawings,
            this works just like the  library (collection eliterature) where there are a bunch of stories that you can access, just like a Facebook feed.   
            </p>
            <p>
            The questions that stood out from the Danae reading is that can social media posts and feeds counts as net art?
             Looking at the host site and not at the Twine game, it reminds me of the Rhizome website, it functions the same,
              but now can the website also be seen as a artwork on its own? Just like how some museums are stand-alone artworks. 
              Since these websites functions as digital museums, does it give them the right to be classified as net art? 
            </p>
            <h2>References</h2>
             <ol className="ReferenceList">
                 <li>Benjamin, W., 1969. The Work of Art in the Age of Mechanical Reproduction (1936). In: H. Arendt, ed.<i>Illuminations</i> .
                      New York: Schocken Books, pp. 218- 222.
                 </li>
                 <li>
                 Carrier, D., 2020. <i>The work of Art in the Age of the Internet: how will the internet transform the way that contemporary visual art is created.</i> 
                 [Online] Available at: <a href={ref1URL}>https://hyperallergic.com/563938/the-work-of-art-in-the-age-of-the-internet/[2021/08/17 13:53:51]</a>
                 </li>
                 <li>
                 Danae, 2019. <i>Net Art, Post-internet Art, New Aesthetics: The Fundamentals of Art on the Internet.</i> 
                 [Online] Available at: <a href={ref2URl}>https://medium.com/digital-art-weekly/net-art-post-internet-art-new-aesthetics-the-fundamentals-of-art-on-the-internet-55dcbd9d6a5[2021/08/17 14:00:49]</a>
                 </li>
                 <li>
                 Porpentine , 2014 <i>With Those We Love Alive</i> Available at : 
                 <a href={ref3URl}>https://collection.eliterature.org/3/work.html?work=with-those-we-love-alive</a>

                 </li>
             </ol>
             <Link to="/blogpost2" ><button className="NextButton">Next</button></Link>
           </div>   
      
    )
  }
}
