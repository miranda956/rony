
import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Footer from './components/layout/Footer';
import Index from './components/layout/Index';
import Lyrics from './components/Tracks/Lyrics';
import {Provider} from "./Context";
class App extends Component{
  constructor(props){
    super()
  }
  render(){
     return (
       <Provider>
       <Router>
       <React.Fragment>
       <Navbar/>
       <div className="container">
       <Switch>
       <Route exact path="/" component={Index}/>
       <Route exact path="/lyrics/track/:id" component={Lyrics}></Route>
       </Switch>
       </div>

       </React.Fragment>
       </Router>
       </Provider>
     );
     }
}
export default App;
