import React, { Component } from 'react'
import "../Styles/theBlogs.css";
import { Link } from 'react-router-dom';


export default class Ass1Reflect extends Component {
  render() {
    return (
      <div className="blogContent">
          
          <h1> Assignment Reflections</h1>
          <h2>Assignment One reflection </h2>
          <p>Critically reflecting on assignment one , I must say that I enjoyed the assignment, not because react is new and interesting to use
             but because I enjoyed finding content to link to my site and actually think about how I wanted it to look. </p>

             <p><u>For assignment one the goals I had set were:</u>
               <ol className="ReferenceList">
                 <li>Creating a site about natural hair. giving more information about hair and the different types of hair there are.</li>
                 <li>Making it more functional for new naturals to find information that will help them with their new hair journey </li>
                 <li>Getting information about different hair stereotypes and trying to break those stereotypes</li>
                 <li>Making the website as calming as possible and using colours that represent calmness and growth. (research showed that 
                   most natural hair product hair sites use the colour black on their product bottles and green or white for titles and green for logos)</li>
                   <li>Implement React conventions correctly </li>
               </ol>
               </p> 
              
               <p>It was a very interesting learning curve with this new way of coding. making a react app / website was not as difficult as 
                 I thought it would be, I only struggled with getting the site running and proper deployed. In terms of the technical component of the course.
                  The theoretical part of the course with this assignment I felt a little bit of a disconnect into how I could link the scholars works into 
                  my site about hair. it was rather difficult trying to find a proper link to these two component. I don’t 
                 believe that I really achieved the goal that I set for myself in regard to the academic research and my own site research that I made. </p>

                 <p>I believe that there were a few successes and equal failure with this assignment. The creative brief was fully achieved, and 
                   it was a success in my eye the only thing I did fail to do with this assignment is to find stereotypes and challenge them. 
                   Struggled with finding a meaningful way of talking about those stereotypes and addressing them in a manner that will visually 
                   complete the site as well as be engaging to the user visually. I’m currently still trying to 
                   figure out a way to make it happen where the site is engaging with the stereotypes in a meaningful and pleasant way.</p> 

                   <p>Getting the feedback from the marker and taking that into consideration with the second assignment, 
                     where I could fix and how I could fix, was definitely  making my annotations for the wireframes  more detailed and 
                     giving more detail about the choices and decision I took with the style of the website and thinking how 
                     I could further push the site for it to look more like the site I had set out the goals to be. 

                    Thinking into making future changes to the site will be a rather interesting experience and highly looking forward to it.</p>

                    <h2>Assignment Two Reflection</h2>
                    <p><u>For assignment two the goals that I had set out were:</u>
                      <ol className="ReferenceList">
                        <li>Getting a Net art piece that works and relates to the site in the correct manner</li>
                        <li>Making the net art properly interactable. </li>
                        <li>Fixing some of assignment one content according to feedback </li>
                        <li>Chopping and changing code to fit my art style and project</li>
                      </ol>
                    </p> 
                    <p>For this assignment I do not believe that I have achieve the goals the way I wanted to. I sense a lot of failure with this assignment simply
                       because finding a net art that is easily relatable to hair and the content of the site was difficult to making it was even more difficult, 
                       the trail and errors were a lot and I ended up taking the easy route out because of the lack of knowledge and a helpful way to implement 
                       the code the way that I wanted to. </p>

                    <p>Assignment two was difficult in a sense that the net art and my code were not coming together to make it the way that I wanted to make it. 
                      the CSS grid is not the away I wanted to use. I wanted to create a face of women that is representation of the target audience of this site,
                      It was also not easy trying to use the mosaic component the way I wanted to use and not the way that most people and tutorials i have seen use it. </p>   

                      <p>Chopping and cutting the ideas that I had in my mind and in the prep work as seen are totally different from the outcome of this assignment.
                        I really struggled with getting the piece I wanted to look the way I wanted it look , I did however get it to function the way I wanted to even though
                        I had to change a few things to the original plan and design, instead of making it zoomable so that user can see the image 
                        they are hovering over I linked those images to some interesting reading piece, sites and videos , some are where I got the research from as well the overall idea of the site. 
                        
                        This assignment does lack in the creative aspect of it.  </p>
 
                  
             <Link to="../Blogs" ><button className="NextButton">Blogs Home</button></Link>
           </div>   
      
    )
  }
}
