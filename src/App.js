import './App.css';
import { AppRoute } from './Routes/Routes';
import './Styling/style.scss';
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import logo from './sukoonsagarlogo-1.png';
import name from './SukunSagarLogo2.png';


// function Navbar () {
//   const [showNavbar, useShowNavbar] = useState(false);
// };

// const handleShowNavbar = () => {
//   setShowNavbar(!showNavbar)
// };

function App() {
  let[burger, setBurger] = useState(true);
  return (
    <div >
      <div className='header'>
      <div className='hamburger' >
            <Hamburger toggled={burger} toggle={setBurger}/>
            <h3>Menu</h3>
        </div>
        <div className='namelogo'>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={name} className="App-name" alt="logo" />
        </div>
      </div>
    <div className="App">
      <div className={burger?'all':null}>
          <AppRoute  burger={burger}/>
      </div>
    </div>
    </div>
  );
}

export default App;
