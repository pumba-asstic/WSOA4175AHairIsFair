import React, { Component } from 'react'
import Logo from "../Assets/roundSmall Logo.png";
import { Link } from 'react-router-dom';
import "../Styles/NavBar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

export default class Navbar  extends Component {
 constructor(props){
    super(props);
    this.state ={
            openLinks :false
    };
    this.toggleNav = this.toggleNav.bind(this);
 }

toggleNav(){
        this.setState(prevState => ({
          openLinks: !prevState.openLinks
        }));
}

  render() {
    return (
       <div className ="Navbar" > 
            <div className="Leftside" id={this.state.openLinks? "open":"close" }>
              <img src={Logo}/>
              <div className="hiddenLinks">
                <Link to='/'>Home</Link>
                <Link to ='/Blogs' >Blogs</Link>
                <Link to ='/NetArtHair' >NetArt</Link>
                <Link to ='/DesignAesth' >Design</Link>
              </div>
          </div>
            <div className="Rightside">
                <Link to='/'>Home</Link>
                <Link to ='/Blogs' >Blogs</Link>
                <Link to ='/NetArtHair' >NetArt</Link>
                <Link to ='/DesignAesth' >Design</Link>
                <button onClick ={this.toggleNav} ><ReorderIcon/></button>
            </div>
        </div>
    )
  }
}
