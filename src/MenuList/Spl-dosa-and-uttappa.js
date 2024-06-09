import { NameLogo } from '../name-logo';
import { useState } from 'react';
import '../Styling/Components/navbar.scss';

function Menu() {
    let MenuPrice = [
        {
            MenuItem: "Salsa Lite Dosa",
            HMenuItem:"साल्सा लाइट डोसा",
            Price:150,
            count:0
        },
        {
            MenuItem:"Garlic Roast Dosa",
            HMenuItem:"गार्लिक रोस्ट डोसा",
            Price:150,
            count:0
        },
        {
            MenuItem:"Red Chilly Dosa",
            HMenuItem:"रेड चिल्ली डोसा",
            Price:160,
            count:0
        },
        {
            MenuItem:"Spring Roll Dosa",
            HMenuItem:"स्प्रिंग रोल डोसा",
            Price:160,
            count:0
        },
        {
            MenuItem:"Paneer Chilly Dosa",
            HMenuItem:"पनीर चिली डोसा",
            Price:180,
            count:0
        },
        {
            MenuItem:"Paneer Sechzwan Dosa",
            HMenuItem:"पनीर शेझवान डोसा",
            Price:160,
            count:0
        },
        {
            MenuItem:"Chopsy Dosa",
            HMenuItem:"चोप्सी डोसा",
            Price:180,
            count:0
        },
        {
            MenuItem:"Tomchi Uttappa",
            HMenuItem:"तोमची उत्तप्पा",
            Price:170,
            count:0
        },
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
    const SplDosa = MenuPrice.map((menu,index) => {
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
    return <div>{SplDosa}</div>
}


export const SplDosa = () => (
    <div> 
        <NameLogo />
        <Menu />
    </div>
);