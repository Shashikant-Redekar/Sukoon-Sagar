import { NameLogo } from '../name-logo';
import { useState } from 'react';
import '../Styling/Components/navbar.scss';

function Menu() {
    let MenuPrice = [
        {
            MenuItem: "Paneer Kalimiri Tikka",
            HMenuItem:"पनीर कालीमिरी टिक्का",
            Price:260,
            count:0
        },
        {
            MenuItem:"Paneer Pahadi Tikka",
            HMenuItem:"पनीर पहाड़ी टिक्का",
            Price:260,
            count:0
        },
        {
            MenuItem:"Paneer Malai Tikka(sweet)",
            HMenuItem:"पनीर मलाई टिक्का (गोड)",
            Price:250,
            count:0
        },
        {
            MenuItem:"Paneer Lasuni Tikka",
            HMenuItem:"पनीर लसून टिक्का",
            Price:260,
            count:0
        },
        {
            MenuItem:"Tandoori Gobi",
            HMenuItem:"तंदूरी गोबी ",
            Price:230,
            count:0
        },
        {
            MenuItem:"Paneer Tikka",
            HMenuItem:"पनीर टिक्का",
            Price:220,
            count:0
        },
        {
            MenuItem:"Paneer Lajawab Tikka",
            HMenuItem:"पनीर लाजवाब टिक्का",
            Price:260,
            count:0
        },
        {
            MenuItem:"Paneer Dilkush Tikka",
            HMenuItem:"पनीर दिलकुश टिक्का",
            Price:270,
            count:0
        },
        {
            MenuItem:"Aloo Tikka",
            HMenuItem:"आलू टिक्का",
            Price:200,
            count:0
        },
        {
            MenuItem:"Veg. Seekh Kabab",
            HMenuItem:"व्हेज सीख कबाब",
            Price:230,
            count:0
        },
        {
            MenuItem:"Veg. Hara Bhara Kabab",
            HMenuItem:"व्हेज हरा भरा कबाब",
            Price:220,
            count:0
        },
        {
            MenuItem:"Veg. Shikari Kabab",
            HMenuItem:"व्हेज शिकारी कबाब",
            Price:250,
            count:0
        },
        {
            MenuItem:"Chilly Milly Kabab",
            HMenuItem:"चिली मिली कबाब",
            Price:260,
            count:0
        },
        {
            MenuItem:"Paneer Cheese Kabab",
            HMenuItem:"पनीर चीज कबाब",
            Price:280,
            count:0
        },
        {
            MenuItem:"Mushroom Tikka",
            HMenuItem:"मशरूम टिक्का",
            Price:240,
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
    const StarterTandoori = MenuPrice.map((menu,index) => {
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
    return <div>{StarterTandoori}</div>
}


export const StarterTandoori = () => (
    <div> 
        <NameLogo />
        <Menu />
    </div>
);