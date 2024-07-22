import {NavLink} from 'react-router-dom';
import '../Styling/style.scss';

export const Links = (props) => {
let isShowNavbar = props.burger;
return(
    <div>
        {isShowNavbar&&<div>
            <nav className = "nav">
                <ul className = "list">
                    <li className = 'listin'><NavLink className = 'a' to='/'>Home</NavLink></li>
                    <li className = 'listin'><NavLink className = 'a' to='/South-Indian-Snacks'>South Indian Snacks</NavLink></li>
                    <li className = 'listin'><NavLink className = 'a' to='/Dosa' >Dosa</NavLink></li>
                    <li className = 'listin'><NavLink className = 'a' to='/Spl-Dosa-and-Uttappa'>Spl Dosa & Uttappa(Taste of Roast)</NavLink></li>
                    <li className = 'listin'><NavLink className = 'a' to='/Uttapam'>Uttapam</NavLink></li>
                    <li className = 'listin'><NavLink className = 'a' to='/Fasting'>Fasting</NavLink></li>
                    <li className = 'listin'><NavLink className = 'a' to='/Thali'>Thali</NavLink></li>
                    <li className = 'listin'><NavLink className = 'a' to='/Sandwiches'>Sandwiches</NavLink></li>
                    <li className = 'listin'><NavLink className = 'a' to='/Pavbhaji'>Pavbhaji</NavLink></li>
                    <li className = 'listin'><NavLink className = 'a' to='/Pizza'>Pizza(Indian)</NavLink></li>
                    <li className = 'listin'><NavLink className = 'a' to='/Kids-Special'>Kids Special</NavLink></li>
                    <li className = 'listin'><NavLink className = 'a' to='/Indian-Soups'>Indian Soups</NavLink></li>
                    <li className = 'listin'><NavLink className = 'a' to='/Chinese-Soups'>Chinese Soups</NavLink></li>
                    <li className = 'listin'><NavLink className = 'a' to='/Starter-Tandoori-&-Kabab'>Starter Tandoori & Kabab</NavLink></li>
                    <li className = 'listin'><NavLink className = 'a' to='/Chinese-Starter'>Chinese Starter's</NavLink></li>
                    <li className = 'listin'><NavLink className = 'a' to='/Veg-Khajana'>Veg Khajana</NavLink></li>
                </ul>
                <NavLink  className = 'listor' to = '/My-Order' >
                    <button className="yrordr">
                        Your Orders
                    </button>
            </NavLink>
            </nav>
        </div>}
    </div>
);
};