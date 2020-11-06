import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route } from "react-router-dom";
import Home from './component/Home';
import Mobile  from './component/Mobile';
import Login  from './component/Login';
import Car  from './component/Car';
import House  from './component/House';
import Motorcycle  from './component/Motorcycle';
import Tablets from './component/Tablets';
import Tvvideoaudio from './component/Tvvideoaudio';
import Landplots from './component/Landplots';

import Attribute from './component/Redux/Attribute'


class App extends React.Component{
  
    render(){
  
        return(
            
          <div>
           
       
          <Router>
         
         
                
                 <Route path="/account" component={Login} />
                 <Route exact path="/" component={Home} />
                 <Route path="/mobile phones" component={Mobile} />
                 <Route path="/house" component={House} />
                 <Route path="/car" component={Car} />
                 <Route path="/motorcycle" component={Motorcycle} />
                 <Route path="/tablets" component={Tablets} />
                 <Route path="/tv-video-audio" component={Tvvideoaudio} />
                 <Route path="/land&plot" component={Landplots} />
                 
                 <Route path="/attribute" component={Attribute} />

            </Router>
       
        

            
           </div>
        )
    }
} 






export default App;

