import { Extra } from "./Extra";
import { NameLogo } from '../name-logo';
import { useState } from 'react';
import '../Styling/Components/navbar.scss';

function Menu() {
    let MenuPrice = [
        {
            MenuItem: "Pav Bhaji",
            HMenuItem:"पावभाजी",
            Price:130,
            count:0
        },
        {
            MenuItem:"Jain Pav Bhaji",
            HMenuItem:"जैन पावभाजी",
            Price:140,
            count:0
        },
        {
            MenuItem:"Cheese Pav Bhaji",
            HMenuItem:"चीज पावभाजी",
            Price:160,
            count:0
        },
        {
            MenuItem:"Paneer Pav Bhaji",
            HMenuItem:"पनीर पावभाजी",
            Price:160,
            count:0
        },
        {
            MenuItem:"Cheese Paneer Pav Bhaji",
            HMenuItem:"चीज पनीर पावभाजी",
            Price:185,
            count:0
        },
        {
            MenuItem:"Kada Pav Bhaji",
            HMenuItem:"कडा पावभाजी",
            Price:150,
            count:0
        },
        {
            MenuItem:"Cheese Kada Pav Bhaji",
            HMenuItem:"चीज कडा पावभाजी",
            Price:180,
            count:0
        },
        {
            MenuItem:"Cheese Masala Pav",
            HMenuItem:"चीज मसाला पाव",
            Price:150,
            count:0
        },
        {
            MenuItem:"Masala Pav",
            HMenuItem:"मसाला पाव",
            Price:120,
            count:0
        },
        {
            MenuItem:"Only Bhaji",
            HMenuItem:"फक्त भजी",
            Price:115,
            count:0
        },
        {
            MenuItem:"Only Jain Bhaji",
            HMenuItem:"फक्त जैन भाजी",
            Price:120,
            count:0
        },
        {
            MenuItem:"Garlic Chatni",
            HMenuItem:"गार्लिक चटनी",
            Price:70,
            count:0
        },
        {
            MenuItem:"Plain Pav (1pc)",
            HMenuItem:"साधा पाव (1 पीस)",
            Price:8,
            count:0
        },
        {
            MenuItem:"Butter Pav(1pc)",
            HMenuItem:"बटर पाव (1 पीस)",
            Price:20,
            count:0
        },
        {
            MenuItem:"Extra Cheese",
            HMenuItem:"एक्स्ट्रा चीज़",
            Price:40,
            count:0
        },
        {
            MenuItem:"Butter Fried Onion",
            HMenuItem:"बटर फ्राइड अनियन",
            Price:90,
            count:0
        }
    ];
    
    let [menu, setMenu] = useState(MenuPrice);

    const handleAdd = (MName) => {
        const newMenu = menu.map(name => {
            if(name.MenuItem === MName){
                return {...name, count:name.count+1};
            }
            return name;
        });
    setMenu(newMenu);
    };

    const handleSub = (MName) => {
        const newMenu = menu.map(name => {
            if(name.MenuItem === MName){
                return {...name, count:name.count-1};
            }
            return name;
        });
    setMenu(newMenu);   
    }
    const Pavbhaji = MenuPrice.map((menu,index) => {
        return(
                <div key={index}>
                    <ul className='items'>
                        <h5>{menu.MenuItem}/{menu.HMenuItem}</h5>
                        <h5>{menu.Price}</h5>
                        {menu.count===0?<button onClick={() => handleAdd(menu.MenuItem)}>ADD</button>:<button onClick={() => handleAdd(menu.MenuItem)}>+</button>}
                        {menu.count!==0&&<p>{menu.count}</p>}
                        {menu.count!==0&&<button onClick={() => handleSub(menu.MenuItem)}>-</button>}
                    </ul>
                </div>
        );
    });
    return <div>{Pavbhaji}</div>
}


export const Pavbhaji = () => (
    <div> 
        <NameLogo />
        <Extra />
       <div>
           <Menu /> 
       </div>
    </div>
);