import React, { Component } from 'react'
import "../Styles/theBlogs.css";
import designJstImg from "../Assets/designJusticeImage.png";
import desingJstImg2 from "../Assets/desingJustice Img .png";
import { Link } from 'react-router-dom';

export default class blogpost3 extends Component {
  render() {
    return (
      <div className="blogContent">
          <h1>Design Jusitice</h1>
            <h3>What is design Justice? : </h3>
          <p>
          This a practice or organization that was created in 2015 that is inspired by the AMP (allied media projects) that 
          aims to rethink design processes and centres people who are normally marginalized by design and uses collaborative , 
          creative practices to address challenges that community face 
          and it moves beyond the frames of social impact design
          </p>

          <p>
          This is a concept that helps establish or break the conventional relationship, between design, power, and social justice. 
          There is a book that is written by Costanza-Chock, design justice where she puts together how some of these design practices 
          have removed specific groups of people from participating with the new technologies. she goes on to give the aim of the organization
          that where they rethink the design in order to protest and give voice to the marginalized people.
          </p>
          <p>
          The principles of design justice</p>
          <ol className="ReferenceList">
              <li>Use design to heal, empower and sustain communities as well 
              as find freedom from systems that exploit and are oppressive to the design communities</li>
              <li>Give a space to communities that are directly impacted by the outcomes of the design process </li>
              <li>Prioritize the design’s impact on the community either than the designer’s intention </li>
              <li>Change that comes from accountable, accessible, and collaborative process, rather than the end process</li>
              <li>Designer’s role is seen as a facilitator than the expert</li>
              <li>Everybody is an expert on things based on their lived experiences, all unique and brilliant contributions </li>
              <li>Share design knowledge and tool with communities </li>
              <li>Work toward sustainable, community-led and controlled outcomes.</li>
              <li>Work towards non-exploitative solutions that reconnect earth to us and us to the earth</li>
              <li>Find new solutions that are already working at the community level and honour and uplift traditional and local practices</li>
            </ol>
            <img className="Img3" src={designJstImg}/>
          <p>
            Costanza-Chock goes on to define key terms that are involved in Design justice. She defines <b><u>Design</u></b> as a way to describe the act of 
            making a meaningful physical mark to an object. To “mark out the representation that will later become objects” 
            she mentions a text by Victor Papanek <i>Design for the real world</i> “design as a universal practice in human communities.”  
            Design is a way to add meaning to things,
            either through tradition ways of drawing or through the way of expert knowledge and lived experiences
          </p>
          <img className="Img3" src={desingJstImg2}/>
          <p>
            In my site, where design justice is concerned, I mostly used what the experts said about hair 
            (which is also their own lived experiences) as well as used what I’ve personally experienced dealing with what people would refer to as 
            “Kafir hare” she goes on to define <b><u>Intersectionality.</u></b> It is a framework that is formed by the analytical framework,
            where it deals with a group of communities that were excluded from the world’s happenings, she uses the African American history as an
            example of how people were discriminated against because of their race, class, and gender, mentioning the black feminist. 
            Costanza-Chock speaks to how design process also affects the society at large. 
            She speaks from a feminist standpoint
          </p>

          <p>
            With Hair is fair I was aiming on implementing the principle that are mentioned by Costanza-Chock in my site,
            where I do not make the mistake of excluding a specific hair type. Where I talk about everything and baring it bare into the site, 
            showing the different experiences and frustrations that I’ve dealt with in the past regarding being bullied because my hair looked
            different to the hair of my friends, where were of the same race and gender. Looking at the different sites and advertising groups
            that would choose a specific hair type to convey beauty and what is acceptable hair and what is not. I mostly focus on black hair 
            and from an advocative voice of that type of hair. As well as a feminist standpoint.  Costanza-Chock says that we are all designer.
            It goes beyond the developers, designers,
            and technologist professions. It extends to journalist, activist, and community organizers
          </p>

          <p>
          Design Justice in my option is to design with people in mind, not excluding any community, 
          but to create design that includes them in many different forms and also a in a way that tackles the 
          social issues and social injustices that these communities are facing. It not just designs with people in mind 
          but its making a meaningful mark.</p>

          <h2>References</h2>
          <ol className="ReferenceList">
            <li>Costanza-Chock, S., 2020. <i>Design justice : Community-led practices to build the worlds we need.</i> The MIT Press</li>
          </ol>
          <Link to="/reflection" ><button className="NextButton">Next</button></Link>
      </div>
    )
  }
}
