import { NameLogo } from '../name-logo';
import { useState, useEffect } from 'react';
import '../Styling/style.scss';

function Menu(props) {
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

    useEffect(() => {
        const menus = JSON.parse(localStorage.getItem('pizza'));
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
        localStorage.setItem('pizza',JSON.stringify(menu));
    },[menu]);

    const Pizza = menu.map((menu,index) => {
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
    return <div>{Pizza}</div>
}


export const Pizza = (props) => (
    <div className='menu'> 
        <NameLogo />
      <Menu orderList={props.orderList} setOrderList={props.setOrderList}/>
    </div>
);