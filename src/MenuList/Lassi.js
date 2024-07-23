import { useState, useEffect } from 'react';
import '../Styling/Components/navbar.scss';

function Menu(props) {
    let MenuPrice = [
        {
            MenuItem: "Special Lassi",
            HMenuItem:"स्पेशल लस्सी",
            Price:120,
            count:0
        },
        {
            MenuItem:"Sweet Lassi",
            HMenuItem:"गोड लस्सी",
            Price:90,
            count:0
        },
        {
            MenuItem:"Salted Lassi",
            HMenuItem:"खारवलेली लस्सी",
            Price:90,
            count:0
        },
        {
            MenuItem:"Mango Lassi",
            HMenuItem:"आंबा लस्सी",
            Price:100,
            count:0
        },
        {
            MenuItem:"Kesar Lassi",
            HMenuItem:"केसर लस्सी",
            Price:100,
            count:0
        },
        {
            MenuItem:"Butter Lassi",
            HMenuItem:"बटर लस्सी",
            Price:60,
            count:0
        }
    ];

    let [menu, setMenu] = useState(MenuPrice);

    useEffect(() => {
        const menus = JSON.parse(localStorage.getItem('Lassi'));
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
        localStorage.setItem('Lassi',JSON.stringify(menu));
    },[menu]);

    
    const Lassi = menu.map((menu,index) => {
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
    return <div>{Lassi}</div>
}


export const Lassi = (props) => (
    <div className='menu'> 
        <Menu orderList={props.orderList} setOrderList={props.setOrderList}/>
    </div>
);