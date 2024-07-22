import { NameLogo } from '../name-logo';
import { useState, useEffect } from 'react';
import '../Styling/Components/navbar.scss';

function Menu(props) {
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

    useEffect(() => {
        const menus = JSON.parse(localStorage.getItem('Csoup'));
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
        localStorage.setItem('Csoup',JSON.stringify(menu));
    },[menu]);
    
    const ChineseSoups = menu.map((menu,index) => {
        return(
                <div key={index}>
                    <ul className="items">
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
    return <div>{ChineseSoups}</div>
}


export const ChineseSoups = (props) => (
    <div className='menu'> 
        <NameLogo />
        <Menu orderList={props.orderList} setOrderList={props.setOrderList}/>
    </div>
);