import React, { Component } from 'react'
import '../Styles/Blogs.css';
import {Link} from 'react-router-dom';
import blogImg1 from "../Assets/Blogpost1 .png";
import blogImg2 from "../Assets/Blogpost2.png";
import blogImg3 from "../Assets/Blogpost3.png";
import blogImg4 from "../Assets/logo.png";

export default class Blogs extends Component {
  render() {
    return (
      <div className='Blogs'>
          <h1>Welcome to the Blogs</h1>
        
          <Link to="/blogpost1"><button>Blogpost One </button><img  className='Img1' src={blogImg1}/></Link>
          <Link to="/blogpost2"><button>Blogpost Two </button><img  className='Img1' src={blogImg2}/></Link>
          <Link to="/blogpost3"><button>Blogpost Three</button><img  className='Img1' src={blogImg3}/> </Link>
          <Link to="/reflection"><button>Blogpost Four </button><img  className='Img1' src={blogImg4}/></Link>
        </div>
    
    )
    }
}
