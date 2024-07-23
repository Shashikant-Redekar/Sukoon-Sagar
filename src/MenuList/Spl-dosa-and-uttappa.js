import { useState,useEffect } from 'react';
import '../Styling/Components/navbar.scss';

function Menu(props) {
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

    useEffect(() => {
        const menus = JSON.parse(localStorage.getItem('SplDosa'));
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
        localStorage.setItem('SplDosa',JSON.stringify(menu));
    },[menu]);

    const SplDosa = menu.map((menu,index) => {
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
    return <div>{SplDosa}</div>
}


export const SplDosa = (props) => (
    <div className='menu'> 
        <Menu orderList={props.orderList} setOrderList={props.setOrderList}/> 
    </div>
);