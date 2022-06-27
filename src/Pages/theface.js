import React, { Component } from 'react';
import "../Styles/theFaceStyle.css";
import img1 from "../Assets/afro1.jpg";
import { Link } from 'react-router-dom';

const VideoUrl="https://youtu.be/uf_sG7yrO9Y";

export default  class theface extends Component{
    render(){
        return(
            <div className="HairFace">
                <div id="cartoon" role="img" aria-labelledby="description">
                    <div id="description">Different faces</div>

                    <div class="body"></div>
                    <div class="ear"></div>
                    <div class="ear"></div>
                    <div class="neck"></div>
                    <div class="hair-back"></div>
                    <div class="face">
                        <div class="cheeks"></div>
                        <div class="eye"><div class="pupil"></div></div>
                        <div class="eye"><div class="pupil"></div></div>
                        <div class="mouth"></div>
                        <div class="freckles"></div>
                        <div class="nose"></div>
                    </div>
                    <div class="hair-top"></div>
                </div>
<br/>
<br/>
<br/>
<br/>
            <p>I  FEEL THAT THE KINKS, CURLS OR TIGHT COILS IN AFRO HAIRIS BEAUTIFUL AND UNIQUE, NO OTHER RACE ON THIS PLANET HAS HAIR LIKE OURS
                THAT MAKES ME PROUD
            </p>
            <p className="Names"><a href={VideoUrl}> ― Monica Millner</a></p>
            <Link to="./PrepWorkNetArt"><button>Read</button></Link>
            </div>
        )
    }
}