
import './App.css';
import React, {Component} from 'react';

import Header from "./components/Header/Header"
import Decoment from "./components/body/Decoment/Decoment"
import Projectt from "./components/body/projectt/Projectt"
import Soon from "./components/body/soon/Soon"

import Footer from "./components/Footer/Footer"


class App extends Component {
render(){
  return (
    <div className="App">
      <header className="App-header">
        <div className="logoo">
        <img src="./logo11.png" alt="logo" className="App-logo"/>
        </div>
        <div className="header">
        <Header />
        </div>
        <Decoment />
        <Projectt />
        <Soon />
        <Footer />
     
      </header>
      

    </div>
  );
}
}
  


export default App;
