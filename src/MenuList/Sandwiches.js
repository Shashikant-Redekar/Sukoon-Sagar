import { Extra } from "./Extra";
import { NameLogo } from '../name-logo';
import { useState, useEffect } from 'react';
import '../Styling/Components/navbar.scss';

function Menu(props) {
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

    useEffect(() => {
        const menus = JSON.parse(localStorage.getItem('sand'));
        if(menus){
            setMenu(menus);
        }
    },[]);

    const handleAdd = (MName) => {
        const newMenu = menu.map(name => {
            if(name.MenuItem === MName){
                return {...name, count:name.count+1};
            }
            return name;
        });
    setMenu(newMenu);
    const newOrder = newMenu.filter(c => {
        return c.count > 0
    });
    if(props.orderList !== undefined){
        const item = props.orderList.map(or => {
            const ol = newOrder.find(o1 => o1.MenuItem === or.MenuItem);
            return ol ? {...or, ...ol} : or;
        });
        props.setOrderList(item);
    }else{
        props.setOrderList(newOrder);
    }
    if(props.orderList !== undefined){
    const mergerArray = newOrder.concat(props.orderList.filter(
        itm => !newOrder.some(itm2 => itm.MenuItem === itm2.MenuItem)));
    props.setOrderList(mergerArray);
    }
    };

    const handleSub = (MName) => {
        const newMenu = menu.map(name => {
            if(name.MenuItem === MName){
                return {...name, count:name.count-1};
            }
            return name;
        });
    setMenu(newMenu);  
    const newOrder = newMenu.filter(c => {
        return c.count > 0
    });
    if(props.orderList !== undefined){
        const mergerArray = newOrder.concat(props.orderList.filter(
            itm => !newOrder.some(itm2 => itm.MenuItem === itm2.MenuItem)));
        props.setOrderList(mergerArray);
        }
    };

    useEffect(() => {
        localStorage.setItem('sand',JSON.stringify(menu));
    },[menu]);

    const Sandwiches = menu.map((menu,index) => {
        return(
                <div key={index}>
                    <ul className='items'>
                    <h3 className="menuItemName">{menu.MenuItem}/{menu.HMenuItem}</h3>
                        <h3 className="price">{menu.Price}</h3>
                        <div className='ASRButtons'>
                            {menu.count!==0&&<button onClick={() => handleSub(menu.MenuItem)} className="sub">-</button>}
                            {menu.count!==0&&<p className="count">{menu.count}</p>}
                            {menu.count===0?<button key={menu.MenuItem} onClick={() => handleAdd(menu.MenuItem,menu.count)} className="add">ADD</button>:<button onClick={() => handleAdd(menu.MenuItem)} className="addition">+</button>}
                        </div>
                    </ul>
                </div>
        );
    });
    return <div>{Sandwiches}</div>
}


export const Sandwiches = (props) => (
    <div className="menu"> 
        <NameLogo />
        <Extra />
       <div>
           <Menu orderList={props.orderList} setOrderList={props.setOrderList}/> 
       </div>
    </div>
);