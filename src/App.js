import './App.css';
import Navbar from './Components/Navbar';
import {Route, Switch} from 'react-router-dom'
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import NetArtHair from './Pages/NetArtHair';
import DesignAesth from './Pages/DesignAesth';
import Footer from './Components/footer';
import Contact from './Pages/contact';

import Blogpost1 from './The Blogs/blogpost1';
import Blogpost2 from './The Blogs/blogpost2';
import Blogpost3 from './The Blogs/blogpost3';
import reflection from './The Blogs/reflection';

function App(){
  return (
    
    <div className="App">
     <Navbar/>
     <Switch>
       <Route exact path ='/' component={Home}></Route>
       <Route exact path ='/Blogs' component={Blogs}></Route>
       <Route exact path ='/NetArtHair' component={NetArtHair}></Route>
       <Route exact path ='/DesignAesth' component={DesignAesth}></Route>
    
      <Route exact path='/blogpost1' component={Blogpost1}></Route>
      <Route exact path='/blogpost2' component={Blogpost2}></Route>
      <Route exact path='/blogpost3' component={Blogpost3}></Route>
      <Route exact path='/reflection' component={reflection}></Route>
      </Switch>
      
     <Footer/>
    </div>
  

  )
}

export default App;
