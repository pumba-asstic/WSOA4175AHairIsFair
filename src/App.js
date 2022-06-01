import './App.css';
import Navbar from './Components/Navbar';
import {Route, Switch} from 'react-router-dom'
//routes to navbar links
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import NetArtHair from './Pages/NetArtHair';
import DesignAesth from './Pages/DesignAesth';
import Footer from './Components/footer';
import Contact from './Pages/contact';

// routes to website blogs. 
import Blogpost1 from './The Blogs/blogpost1';
import Blogpost2 from './The Blogs/blogpost2';
import Blogpost3 from './The Blogs/blogpost3';
import reflection from './The Blogs/reflection';
import PrepWorkNetArt from './The Blogs/PrepWorkNetArt';
import assignment1Reflection from './The Blogs/assignment1Reflection';
import assignment2Reflection from './The Blogs/assignment2Reflection';

// routes to different net art pieces. 
import NetartPiece2 from './NetArtPieces/NetartPiece2';
import Piece3 from './NetArtPieces/Piece3';


function App(){
  return (
    
    <div className="App">
     <Navbar/>
     <Switch>
       <Route exact path ='/' component={Home}></Route>
       <Route exact path ='/Blogs' component={Blogs}></Route>
       <Route exact path ='/NetArtHair' component={NetArtHair}></Route>
       <Route exact path ='/DesignAesth' component={DesignAesth}></Route>
       <Route exact path='/contact' component={Contact}></Route>
    
      <Route exact path='/blogpost1' component={Blogpost1}></Route>
      <Route exact path='/blogpost2' component={Blogpost2}></Route>
      <Route exact path='/blogpost3' component={Blogpost3}></Route>
      <Route exact path='/reflection' component={reflection}></Route>
      <Route exact path='/PrepWorkNetArt' component={PrepWorkNetArt}></Route>
      <Route exact path= '/assigment1Reflection' component={assignment1Reflection}></Route>
      <Route extat path='/assignment2Reflection' component={assignment2Reflection}></Route>
      
      <Route exact path ='/NetartPiece2' component={NetartPiece2}></Route>
      <Route exact path ='/Piece3' component={Piece3}></Route>
      </Switch>
    
     <Footer/>
    </div>
  

  )
}

export default App;
