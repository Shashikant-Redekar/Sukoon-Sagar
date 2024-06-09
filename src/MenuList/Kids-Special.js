import { NameLogo } from '../name-logo';
import { useState } from 'react';
import '../Styling/Components/navbar.scss';

function Menu() {
    let MenuPrice = [
        {
            MenuItem: "Choco Dosa",
            HMenuItem:"चोको डोसा",
            Price:105,
            count:0
        },
        {
            MenuItem:"Honey Dosa",
            HMenuItem:"हनी डोसा",
            Price:110,
            count:0
        },
        {
            MenuItem:"Finger Chips with Chocolate Sauce",
            HMenuItem:"चॉकलेट सॉससह फिंगर चिप्स",
            Price:130,
            count:0
        },
        {
            MenuItem:"Chocolate Bread Toast",
            HMenuItem:"चॉकलेट ब्रेड टोस्ट",
            Price:100,
            count:0
        },
        {
            MenuItem:"Chocolate Bread Toast with Cheese",
            HMenuItem:"चीज सह चॉकलेट ब्रेड टोस्ट",
            Price:130,
            count:0
        },
        {
            MenuItem:"Bread Jam with Honey",
            HMenuItem:"मध सह ब्रेड जाम",
            Price:120,
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
    const Kids = MenuPrice.map((menu,index) => {
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
    return <div>{Kids}</div>
}


export const Kids = () => (
    <div> 
        <NameLogo />
       <Menu />
    </div>
);