import React,{Component} from 'react';
import './css/estilo.css'
import './App.css';
import NavBar from './ui/Navbar';
class App extends Component{
  render( ){

    return (
      <div className="container">
        <NavBar />
      </div>
    );
  }
}

  


export default App;
