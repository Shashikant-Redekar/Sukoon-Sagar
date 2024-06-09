import name from './SukunSagarLogo2.png';
import logo from './sukoonsagarlogo-1.png';
import './App.css';
import './Styling/Components/navbar.scss';

export const NameLogo = () => (
    <div className= 'namelogo'>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={name} className="App-name" alt="logo" />
    </div>
);