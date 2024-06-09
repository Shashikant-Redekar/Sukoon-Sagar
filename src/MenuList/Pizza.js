import { NameLogo } from '../name-logo';
import { useState } from 'react';
import '../Styling/Components/navbar.scss';

function Menu() {
    let MenuPrice = [
        {
            MenuItem: "Special Pizza",
            HMenuItem:"स्पेशल पिझ्झा",
            Price:210,
            count:0
        },
        {
            MenuItem:"Veg. Pizza",
            HMenuItem:"व्हेज. पिझ्झा",
            Price:175,
            count:0
        },
        {
            MenuItem:"Jain Pizza",
            HMenuItem:"जैन पिझ्झा",
            Price:175,
            count:0
        },
        {
            MenuItem:"Mushroom Pizza",
            HMenuItem:"मशरूम पिझ्झा",
            Price:200,
            count:0
        },
        {
            MenuItem:"Only Cheese Pizza",
            HMenuItem:"ओनली चीज़ पिझ्झा",
            Price:185,
            count:0
        },
        {
            MenuItem:"Pahadi Pizza",
            HMenuItem:"पहाडी पिझ्झा",
            Price:200,
            count:0
        },
        {
            MenuItem:"Corn Pizza",
            HMenuItem:"कॉर्न पिझ्झा",
            Price:190,
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
    const Pizza = MenuPrice.map((menu,index) => {
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
    return <div>{Pizza}</div>
}


export const Pizza = () => (
    <div> 
        <NameLogo />
      <Menu />
    </div>
);