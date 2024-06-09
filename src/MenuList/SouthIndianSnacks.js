import { Extra } from "./Extra";
import { NameLogo } from '../name-logo';
import { useState } from 'react';
import '../Styling/Components/navbar.scss';

function Menu() {
    let MenuPrice = [
        {
            MenuItem: "Steam Idli",
            HMenuItem:"स्टीम इडली",
            Price:70,
            count:0
        },
        {
            MenuItem:"Idli Wada",
            HMenuItem:"इडली वड़ा",
            Price:75,
            count:0
        },
        {
            MenuItem:"Idli Fry",
            HMenuItem:"इडली फ्राई",
            Price:80,
            count:0
        },
        {
            MenuItem:"Dahi Idli",
            HMenuItem:"दही इडली",
            Price:100,
            count:0
        },
        {
            MenuItem:"Butter Idli",
            HMenuItem:"बटर इडली",
            Price:90,
            count:0
        },
        {
            MenuItem:"Upma",
            HMenuItem:"उपमा",
            Price:70,
            count:0
        },
        {
            MenuItem:"Sheera",
            HMenuItem:"शीरा",
            Price:80,
            count:0
        },
        {
            MenuItem:"Puri Bhaji",
            HMenuItem:"पुरी भाजी",
            Price:100,
            count:0
        },
        {
            MenuItem:"Plate Puri",
            HMenuItem:"प्लेट पुरी",
            Price:50,
            count:0
        },
        {
            MenuItem:"Medu Wada",
            HMenuItem:"मेदू वडा",
            Price:80,
            count:0
        },
        {
            MenuItem:"Dahi Wada",
            HMenuItem:"दही वडा",
            Price:100,
            count:0
        },
        {
            MenuItem:"Misal Pav",
            HMenuItem:"मिसळ पाव",
            Price:100,
            count:0
        },
        {
            MenuItem:"Usal Pav",
            HMenuItem:"उसळ पाव",
            Price:80,
            count:0
        },
        {
            MenuItem:"Batata Wada",
            HMenuItem:"बटाटा वडा",
            Price:80,
            count:0
        },
        {
            MenuItem:"Wada Usal",
            HMenuItem:"वडा उसळ",
            Price:90,
            count:0
        },
        {
            MenuItem:"Wada Pav(Single)",
            HMenuItem:"वडा पाव (एकच)",
            Price:25,
            count:0
        },
        {
            MenuItem:"Dahi Misal",
            HMenuItem:"दही मिसळ",
            Price:120,
            count:0
        }
    ];
    
    let [menu, setMenu] = useState(MenuPrice);

    const handleAddd = (MName) => {
        const newMenu = menu.map(name => {
            if(name.MenuItem === MName){
                return {...name, count:name.count+1};
            }
            return name;
        });
        console.log(newMenu)
    setMenu(newMenu);
    };

    const handleSub = (MName) => {
        const newMenu = menu.map(name => {
            if(name.MenuItem === MName){
                return {...name, count:name.count-1};
            }
            return name;
        });
        console.log(newMenu)
    setMenu(newMenu);   
    };

    const SouthIndianSnacksMenu = MenuPrice.map((menu,index) => {
        return(
                <div key={index}>
                    <ul className='items'>
                        <h5>{menu.MenuItem}/{menu.HMenuItem}</h5>
                        <h5>{menu.Price}</h5>
                        {menu.count!==0&&<button onClick={() => handleSub(menu.MenuItem)}>-</button>}
                        {menu.count!==0&&<p>{menu.count}</p>}
                        {menu.count===0?<button key={menu.MenuItem} onClick={() => handleAddd(menu.MenuItem)}>ADD</button>:<button onClick={() => handleAddd(menu.MenuItem)}>+</button>}
                    </ul>
                </div>
        );
    });
    return <div>{SouthIndianSnacksMenu}</div>
}


export const SouthIndianSnacks = () => (
    <div> 
        <NameLogo />
        <Extra />
       <div>
           <Menu /> 
       </div>
    </div>
);