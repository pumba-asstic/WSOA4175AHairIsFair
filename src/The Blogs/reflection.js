import React, { Component } from 'react'
import ReflectImage from "../Assets/logo.png";
import "../Styles/theBlogs.css";
import { Link } from 'react-router-dom';

export default class reflection extends Component {
  render() {
    return (
      <div className="blogContent">

          <h1>Reflection</h1>
          <img src={ReflectImage}/>
          <p>
          I really enjoyed engaging with the theoretical part of the course, looking at different research aspects where scholars are talking 
          about the different ways that I could made my site more user friendly as well as the user having a pleasant experience while engaging 
          with the content of my website. I enjoyed researching the topic of the <b>INTERNET, SOCIETY AND DESIGN JUSTICE</b>, I enjoyed it because it helped me form what I wanted the content of my site to be and how I would implement the net-art. 
          Hence the site name is HAIR IS FAIR because of the why I thought through the process of society and the internet
          </p>
          
          <p>
          In how people(society) view hair, the way that they choose to engage with the hair issues and how 
          black womxn hair is being treated and how the internet has used hair as a form beauty standards. 

          With the practical element of the course, I must be honest it was a bit tricky grasping the React.js 
          concepts and how they all function as one, I am still yet to learn how to make use of the HTML pages
          and proper syntax and where one uses the metadata when doing everything in JSX.  
          </p>

          <p>
          The practical field of the course still in my option have a lot of room for improvement in terms of me understanding the concepts 
          and not just applying them because I have to.
          The React.js Documentation is useful but something time consuming to really grasp and how and where the things go. 
          </p>

          <p>
          I enjoyed making the site and I am looking forward in explore other elements and concepts of React. 
          The react library made things easier as in where to find specific UX and UI elements and not having to use an independent api to
          add things such as icons. The language of JSX and the syntax I am getting a hang of it. and understanding combination of the
           2 different web-languages.
          </p>

          <p>
          Both aspect of the course regarding my progress and understanding of it. 
          there is still room for some improvement and how I can explore and experiment with making artwork using the react library.  
          The theoretical parts as well in my writing where I would link the research not only to my site’s content but in also 
          finding different sites that have the same backstory that I’m going for with hair is fair. 

          I would like to spend more time on the research and finding things of interest to put on the site that also have some 
          form of link to the scholar readings and content that Hanli gives us form her own independent research.
          </p>
          <Link to="../Blogs" ><button className="NextButton">Blogs</button></Link>
      </div>
    )
  }
}
