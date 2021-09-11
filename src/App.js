
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Register from './Component/Register';
import Login from './Component/Login';
import Forgot from './Component/Forgot';
import Reset from './Component/Reset';
import Homepage from './Component/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar/> */}
      
        
        <Switch>
          <Route exact path="/" component= {Login}/>
          <Route exact path="/register" component= {Register}/>
          <Route exact path="/login" component= {Login}/>
          <Route exact path="/forgot" component= {Forgot}/> 
          <Route path="/reset/:id" component= {Reset}/>
          <Route exact path="/home" component= {Homepage}/>
             
        </Switch>
            
          
      
      </div>

    </BrowserRouter>
  );
}

export default App;
