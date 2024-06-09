import { Extra } from "./Extra";
import { NameLogo } from '../name-logo';
import { useState } from 'react';
import '../Styling/Components/navbar.scss';

function Menu() {
    let MenuPrice = [
        {
            MenuItem: "Veg. Sandwich",
            HMenuItem:"व्हेज. सँडविच",
            Price:70,
            count:0
        },
        {
            MenuItem:"Chutney Sandwich",
            HMenuItem:"चटणी सँडविच",
            Price:60,
            count:0
        },
        {
            MenuItem:"Veg Toast Sandwich",
            HMenuItem:"व्हेज टोस्ट सँडविच",
            Price:90,
            count:0
        },
        {
            MenuItem:"Club Sandwich",
            HMenuItem:"क्लब सँडविच",
            Price:120,
            count:0
        },
        {
            MenuItem:"Bread Butter",
            HMenuItem:"ब्रेड बटर",
            Price:60,
            count:0
        },
        {
            MenuItem:"Toast Butter",
            HMenuItem:"टोस्ट बटर",
            Price:70,
            count:0
        },
        {
            MenuItem:"Bread Butter Jam",
            HMenuItem:"ब्रेड बटर जाम",
            Price:70,
            count:0
        },
        {
            MenuItem:"Toast Butter Jam",
            HMenuItem:"टोस्ट बटर जाम",
            Price:80,
            count:0
        },
        {
            MenuItem:"Garlic Toast",
            HMenuItem:"गार्लिक टोस्ट",
            Price:90,
            count:0
        },
        {
            MenuItem:"Cheese Garlic Toast",
            HMenuItem:"चीज़ गार्लिक टोस्ट",
            Price:120,
            count:0
        },
        {
            MenuItem:"Cheese Toast",
            HMenuItem:"चीज टोस्ट",
            Price:105,
            count:0
        },
        {
            MenuItem:"Veg. Cheese Sandwich",
            HMenuItem:"व्हेज. चीज सँडविच",
            Price:90,
            count:0
        },
        {
            MenuItem:"Only Cheese Sandwich",
            HMenuItem:"ओनली चीज़ सँडविच",
            Price:100,
            count:0
        },
        {
            MenuItem:"Chilly Cheese Toast",
            HMenuItem:"चिल्ली चीज टोस्ट",
            Price:120,
            count:0
        },
        {
            MenuItem:"Veg Grilled Sandwich",
            HMenuItem:"व्हेज ग्रील्ड सँडविच",
            Price:130,
            count:0
        },
        {
            MenuItem:"Cheese Grilled Sandwich",
            HMenuItem:"चीज ग्रील्ड सँडविच",
            Price:175,
            count:0
        },
        {
            MenuItem:"Veg. Cheese Grilled Sandwich",
            HMenuItem:"व्हेज. चीज ग्रील्ड सँडविच",
            Price:160,
            count:0
        },
        {
            MenuItem:"Tomato Omlette Sandwich",
            HMenuItem:"टोमॅटो ऑम्लेट सँडविच",
            Price:120,
            count:0
        },
        {
            MenuItem:"Pahadi Grilled Sandwich",
            HMenuItem:"पहाडी ग्रील्ड सँडविच",
            Price:175,
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
    const Sandwiches = MenuPrice.map((menu,index) => {
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
    return <div>{Sandwiches}</div>
}


export const Sandwiches = () => (
    <div> 
        <NameLogo />
        <Extra />
       <div>
           <Menu /> 
       </div>
    </div>
);