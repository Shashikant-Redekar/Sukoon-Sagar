import './App.css';
import { AppRoute } from './Routes/Routes';
import './Styling/style.scss';


// function Navbar () {
//   const [showNavbar, useShowNavbar] = useState(false);
// };

// const handleShowNavbar = () => {
//   setShowNavbar(!showNavbar)
// };

function App() {
  return (
    <div className="App">
      <div>
          <AppRoute />
      </div>
    </div>
  );
}

export default App;
