import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Styles/carousel.css";
 
import img1 from "../Assets/Blogpost1 .png";
import img2 from "../Assets/Blogpost2.png";
import img3 from "../Assets/Blogpost3.png";
import img4 from "../Assets/siteImage.jpg";
import img5 from "../Assets/NetartPrep.png";
import img6 from "../Assets/logo.png";
import img7 from "../Assets/mosiac test 1.jpg";



export class Carousel extends Component{
    render(){
        var settings ={
            dots: true,
            infinite: true,
            speed: 500,
            centerMode :true,
            slidesToShow :1,
            SlidesToScroll :1
        };
        return(
        <>
            <div>
                <div class="Container">
                    <div class="row title" style={{ marginBottom: "20px"}}>
                        {/* <div class="col-sm-12 btn btn-info">
                            The blogs.
                        </div> */}
                    </div>
                </div>
            </div>
            <Slider {...settings}>
                    <div className='wdt'>
                       <Link to="/blogpost1"><img className='img' src={img1}/></Link>
                    </div>
                    <div className='wdt'>
                        <Link to="/blogpost2"><img className='img' src={img2}/></Link>
                    </div>
                    <div className='wdt'>
                        <Link to="/blogpost3"><img className='img' src={img3}/></Link>
                    </div>
                    <div className='wdt'>
                        <Link to="/relection"><img className='img' src={img4}/></Link>
                    </div>
                    <div className='wdt'>
                        <Link to="/PrepWorkNetArt"><img className='img' src={img5}/></Link>
                    </div>
                    <div className='wdt'>
                        <Link to="/assignment1Reflection"><img className='img' src={img6}/></Link>
                    </div>
                    <div className='wdt'>
                        <Link to="/assignment2Reflection"><img className='img' src={img7}/></Link>
                    </div>
            </Slider>
        </>
        );
        }
}
export default Carousel