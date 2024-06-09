import { NameLogo } from '../name-logo';
import { useState } from 'react';
import '../Styling/Components/navbar.scss';

function Menu() {
    let MenuPrice = [
        {
            MenuItem: "Cream of Tomato Soup",
            HMenuItem:"क्रीम ऑफ़ टोमॅटो सूप",
            Price:120,
            count:0
        },
        {
            MenuItem:"Cream of Veg. Soup",
            HMenuItem:"क्रीम ऑफ़ व्हेज सूप",
            Price:130,
            count:0
        },
        {
            MenuItem:"Cream of Mushroom Soup",
            HMenuItem:"क्रीम ऑफ़ मशरुम सूप",
            Price:140,
            count:0
        },
        {
            MenuItem:"Cream of Palak Soup",
            HMenuItem:"क्रीम ऑफ़ पालक सूप",
            Price:140,
            count:0
        },
        {
            MenuItem:"Palak Coconut Soup",
            HMenuItem:"पालक कोकोनट सूप",
            Price:140,
            count:0
        },
        {
            MenuItem:"Lemon Coriander Soup",
            HMenuItem:"लेमन कोरिएंडर सूप",
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

    const IndianSoups = MenuPrice.map((menu,index) => {
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
    return <div>{IndianSoups}</div>
}


export const IndianSoups = () => (
    <div> 
        <NameLogo />
        <Menu />
    </div>
);