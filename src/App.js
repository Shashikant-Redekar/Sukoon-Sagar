import './App.css';
import { AppRoute } from './Routes/Routes';
import './Styling/style.scss';
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import { NameLogo } from './name-logo';


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
        <div className='logoname'>
          <NameLogo />
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
