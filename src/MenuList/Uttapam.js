import { NameLogo } from '../name-logo';
import { useState } from 'react';
import '../Styling/Components/navbar.scss';

function Menu() {
    let MenuPrice = [
        {
            MenuItem: "Set Dosa",
            HMenuItem:"सेट डोसा",
            Price:100,
            count:0
        },
        {
            MenuItem:"Uttappa",
            HMenuItem:"उत्तप्पा",
            Price:80,
            count:0
        },
        {
            MenuItem:"Onion Uttappa/Butter Uttappa",
            HMenuItem:"अनियन उत्तप्पा/बटर उत्तप्पा",
            Price:90,
            count:0
        },
        {
            MenuItem:"Masala Uttappa",
            HMenuItem:"मसाला उत्तप्पा",
            Price:90,
            count:0
        },
        {
            MenuItem:"Cheese Uttappa",
            HMenuItem:"चीज उत्तप्पा",
            Price:100,
            count:0
        },
        {
            MenuItem:"Cheese Onion Uttappa",
            HMenuItem:"चीज़ अनियन उत्तप्पा",
            Price:120,
            count:0
        },
        {
            MenuItem:"Butter Onion Uttapa",
            HMenuItem:"बटर अनियन उत्तप्पा",
            Price:105,
            count:0
        },
        {
            MenuItem:"Tomato Onion Uttappa",
            HMenuItem:"टोमॅटो अनियन उत्तप्पा",
            Price:100,
            count:0
        },
        {
            MenuItem:"Butter Tomato Onion Uttappa",
            HMenuItem:"बटर टोमॅटो अनियन उत्तप्पा",
            Price:120,
            count:0
        },
        {
            MenuItem:"Tomato Uttappa",
            HMenuItem:"टोमॅटो उत्तप्पा",
            Price:90,
            count:0
        },
        {
            MenuItem:"Butter Tomato Uttappa",
            HMenuItem:"बटर टोमॅटो उत्तप्पा",
            Price:100,
            count:0
        },
        {
            MenuItem:"Coconut Uttappa",
            HMenuItem:"कोकोनट उत्तप्पा",
            Price:100,
            count:0
        },
        {
            MenuItem:"Butter Coconut Uttappa",
            HMenuItem:"बटर कोकोनट उत्तप्पा",
            Price:110,
            count:0
        },
        {
            MenuItem:"Cheese Coconut Uttappa",
            HMenuItem:"चीज़ कोकोनट उत्तप्पा",
            Price:130,
            count:0
        },
        {
            MenuItem:"Cheese Tomato Onion Uttapa",
            HMenuItem:"चीज़ टोमॅटो अनियन उत्तप्पा",
            Price:140,
            count:0
        },
        {
            MenuItem:"Sixer Uttappa",
            HMenuItem:"सिक्सर उत्तप्पा",
            Price:200,
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
    const Uttapam = MenuPrice.map((menu,index) => {
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
    return <div>{Uttapam}</div>
}


export const Uttapam = () => (
    <div> 
        <NameLogo />
       <Menu />
    </div>
);