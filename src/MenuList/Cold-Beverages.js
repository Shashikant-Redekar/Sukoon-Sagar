import { useState, useEffect } from 'react';
import '../Styling/Components/navbar.scss';

function Menu(props) {
    let MenuPrice = [
        {
            MenuItem: "Fresh Lime Water",
            HMenuItem:"फ्रेश लाइम वॉटर",
            Price:50,
            count:0
        },
        {
            MenuItem:"Fresh Lemon Mint",
            HMenuItem:"फ्रेश लेमन मिंट",
            Price:60,
            count:0
        },
        {
            MenuItem:"Fresh Lime Soda",
            HMenuItem:"फ्रेश लाइम सोडा",
            Price:70,
            count:0
        },
        {
            MenuItem:"Ginger Lemon",
            HMenuItem:"जिंजर लेमन",
            Price:70,
            count:0
        },
        {
            MenuItem:"Mineral Water",
            HMenuItem:"मिनरल वॉटर",
            Price:30,
            count:0
        }
    ];

    let [menu, setMenu] = useState(MenuPrice);

    useEffect(() => {
        const menus = JSON.parse(localStorage.getItem('cold'));
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

    const toRemove = newMenu.filter(c => {
        return c.count === 0
    });
    
    if(props.orderList !== undefined){
        const mergerArray = newOrder.concat(props.orderList.filter(
            itm => !newOrder.some(itm2 => itm.MenuItem === itm2.MenuItem)));
        const toKeep = mergerArray.filter(or =>
            toRemove.every(tr => (tr.MenuItem !== or.MenuItem ))
        );  
        props.setOrderList(toKeep);
        };
    };

    useEffect(() => {
        localStorage.setItem('cold',JSON.stringify(menu));
    },[menu]);

    
    const Cold = menu.map((menu,index) => {
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
    return <div>{Cold}</div>
}


export const Cold = (props) => (
    <div className='menu'> 
        <Menu orderList={props.orderList} setOrderList={props.setOrderList}/>
    </div>
);