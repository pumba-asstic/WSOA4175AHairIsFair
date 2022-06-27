import React, { Component } from 'react'
import "../Styles/theBlogs.css";
import { Link } from 'react-router-dom';


export default class FinalArtReflect extends Component{
    render(){
        return( 
            <div className="blogContent">
              <h1>Final Internet Artwork</h1>
            <p>For my final piece I decided to create a gallery of hair products that most naturals use in south Africa,
                this gallery is interactable in. I made it to function like a a pinterest pin board where the images are linked to specific articles , 
                video and website to shop. These products are highly recommended by womxn and men that love and embrace they natural hair. 
                the other Art piece  is a face of boy with natural curly hair , this piece is also interactable when hover over it links the user to a 
                ted talk YouTube video by Zodidi Jewel Gaseb</p>
            <p>Reasons why I choose to change the art for the previous draft is that I wanted to experiment with the CSS language and
                how it could be used to create something unique , just like how human hair is unique these art works and site are meant to 
                showcase the uniqueness and embrace the beauty that comes with  having natural hair. this relates to the electronic literature 
                collection website by ,ELO ( electronic literature organisation) this website functions as an online bookstore, where you can find
                different literatures to read, as well as online interactive narratives.</p>

            <p>Using the Danae theory of the web2.0 mentioned in his 2019 article <i>Net art , Post internet Art, New Aesthetics : the fundamentals of 
                art on the internet about the “technological transition towards web2.0  </i>is what inspired me to create the hair product showcase. 
                This goes hand in hand with the mission my site that deals with the stereotypes of black natural hair, but with this art piece, 
                I want my audience to engage with the piece that is meant to 
                help them gain the tools to that would make their hair journey easy and enjoyable.  With this piece I lead a helping hand.</p> 
            
                <b><u>The successes: product gallery</u></b>
                <ol className="ReferenceList">	
                <li>Layout, achieve the goal of making a pinterest in board. This layout also fits the site in general 
                    it shows the layers that represent how human is built, which was initially the idea of this piece to how layers of human hair. </li>
                    <li>Interactivity, this is a success because the items that are linked with this gallery keeps the audience interested 
                        into the content and the mission of the site, this also fits into the emotion that I wanted to embed into the entire 
                        site, is that feel/ emotion of “ you are not the first one and also won’t be the last one” it gives the audience the
                        urge to change how certain things are being done within the society </li>
                </ol>
                <b><u>The failures: product gallery </u></b>
                <p>The style of the gallery, this does not suit the style of the site. it does however feel disjointed and out of place for the site. 
                    this was because I struggled to get the images to fit into the grid created as well as some technical issues.</p>

        <b><u>The successes: 2nd piece</u></b> 
        <p>This piece is successful in the result of using css as a drawing tool. It seemed difficult at first to complete but 
            I achieve to experiment with the tool and this also add to the 
            reason of the site of trying to experiment with  different type of hairstyles that are found in the natural hair community.</p> 
            <b><u>The failure of 2nd piece </u></b>
            <p>This piece failed because it does not clearly represent the content of the site in it full form. 
                This is because of the way it is placed in the site and the disjointedness is made because of the gender that is linked to the 
                cartoon image as well as the way it look and functions as a whole. And it does not feel like it belongs to the site in terms of 
                its layout, this could be fixed with more time spent in playing with the tool to create an image that is more related to the target 
                audience , I could also justify the reasone for the male gender linked to the cartoon , the video that is embed with this piece is 
                about a black
                woman that is talking about the office experiences that she had because of her hair and how it was not office appropriate. </p>

                <h2> Course Self Crit.</h2>
                <p>First i would like to rate myself a 5 out of 10 for the entire course, because i feel i was not not completely allowing myself to fully engage with the content
                    that was provided to me. As for the content that was provided throughout the couse i enjoyed engaging with the ones that i did engage with. it was also
                    difficult for me to fully understanding the content and to fully link it to any theories within the course. 
                </p>
                <p> for the first assigment i  must say that i was a bit confused with what to do and and how to link the theories learned to the content that i wanted to make and showcase
                    it was difficult at first , trying to link the technical aspect of the course and the theory together to give soemthing seemiless and enjoyable to watch and to enagage with 
                    so for the idea that i went with was to do something that i was struggling with to add some personal experiences to the site and to attract a specific audience. 
                    so i natural went for something along the lines of hair, cause hair is soo important from the community that i come from. 
                </p>
                <p> i naturally struggled with linking the content of the site to the theroies , this might because of the lack of research i put into it.
                    it was difficult for me to graps soem of the react components and also  creating an artwork based off a coding language that will represent my traget audience as well as link perfectly to my site
                     was rather difficult
                </p>
<Link to ='/Blogs'><button className="NextButton">home</button></Link>
            </div>
        )
    }
}