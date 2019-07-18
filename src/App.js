import React,{Component} from 'react';
import './css/estilo.css'
import './App.css';
import NavBar from './ui/Navbar';
import Home from './container/Home'
class App extends Component{
  render( ){
    const logo = 'SIEBA'
    return (
      <div className="container">
        <NavBar  logo={logo}/>
        <Home />
      </div>
    );
  }
}

  


export default App;
