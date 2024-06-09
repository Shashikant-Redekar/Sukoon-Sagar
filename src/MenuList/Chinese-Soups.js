import { NameLogo } from '../name-logo';
import { useState } from 'react';
import '../Styling/Components/navbar.scss';

function Menu() {
    let MenuPrice = [
        {
            MenuItem: "Sweet Corn Veg Soup",
            HMenuItem:"स्वीट कॉर्न वेज सूप",
            Price:150,
            count:0
        },
        {
            MenuItem:"Sweet Corn Plain Soup",
            HMenuItem:"स्वीट कॉर्न प्लेन सूप",
            Price:145,
            count:0
        },
        {
            MenuItem:"Veg Manchow Soup",
            HMenuItem:"व्हेज मांचोव सूप",
            Price:140,
            count:0
        },
        {
            MenuItem:"Hot & Sour Soup",
            HMenuItem:"हॉट एंड  सौर सूप ",
            Price:145,
            count:0
        },
        {
            MenuItem:"Veg Clear Soup",
            HMenuItem:"वेज क्लियर सूप",
            Price:120,
            count:0
        },
        {
            MenuItem:"Veg Mushroom Soup",
            HMenuItem:"व्हेज मशरूम सूप",
            Price:150,
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
    
    const ChineseSoups = MenuPrice.map((menu,index) => {
        return(
                <div key={index}>
                    <ul className="items">
                        <h5>{menu.MenuItem}/{menu.HMenuItem}</h5>
                        <h5>{menu.Price}</h5>
                        {menu.count===0?<button onClick={() => handleAdd(menu.MenuItem)}>ADD</button>:<button onClick={() => handleAdd(menu.MenuItem)}>+</button>}
                        {menu.count!==0&&<p>{menu.count}</p>}
                        {menu.count!==0&&<button onClick={() => handleSub(menu.MenuItem)}>-</button>}
                    </ul>
                </div>
        );
    });
    return <div>{ChineseSoups}</div>
}


export const ChineseSoups = () => (
    <div> 
        <NameLogo />
        <Menu />
    </div>
);