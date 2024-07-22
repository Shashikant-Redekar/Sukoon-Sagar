import { Extra } from "./Extra";
import { useState, useEffect } from 'react';
import { NameLogo } from '../name-logo';

function Menu(props) {
    const MenuPrice = [
        {
            MenuItem: "Sada Dosa",
            HMenuItem:"सदा डोसा",
            Price:80,
            count:0
        },
        {
            MenuItem:"Butter Sada Dosa",
            HMenuItem:"बटर सादा डोसा",
            Price:100,
            count:0
        },
        {
            MenuItem:"Cheese Sada Dosa",
            HMenuItem:"चीज़ सादा डोसा",
            Price:120,
            count:0
        },
        {
            MenuItem:"Masala Dosa",
            HMenuItem:"मसाला डोसा",
            Price:90,
            count:0
        },
        {
            MenuItem:"Butter Masala Dosa",
            HMenuItem:"बटर मसाला डोसा",
            Price:120,
            count:0
        },
        {
            MenuItem:"Cheese Masala Dosa",
            HMenuItem:"चीज मसाला डोसा",
            Price:120,
            count:0
        },
        {
            MenuItem:"Rava Sada Dosa",
            HMenuItem:"रवा सादा डोसा",
            Price:100,
            count:0
        },
        {
            MenuItem:"Butter Rava Dosa",
            HMenuItem:"बटर रवा डोसा",
            Price:120,
            count:0
        },
        {
            MenuItem:"Onion Rava Dosa",
            HMenuItem:"ओनियन रवा डोसा",
            Price:105,
            count:0
        },
        {
            MenuItem:"Rava Masala Dosa",
            HMenuItem:"रवा मसाला डोसा",
            Price:120,
            count:0
        },
        {
            MenuItem:"Butter Rava Masala Dosa",
            HMenuItem:"बटर रवा मसाला डोसा",
            Price:135,
            count:0
        },
        {
            MenuItem:"Onion Rava Masala Dosa",
            HMenuItem:"अनियन रवा मसाला डोसा",
            Price:120,
            count:0
        },
        {
            MenuItem:"Cheese Rava Sada Dosa",
            HMenuItem:"चीज रवा सडा डोसा",
            Price:130,
            count:0
        },
        {
            MenuItem:"Cheese Rava Masala Dosa",
            HMenuItem:"चीज रवा मसाला डोसा",
            Price:140,
            count:0
        },
        {
            MenuItem:"Mysore Sada Dosa",
            HMenuItem:"म्हैसूर सदा डोसा",
            Price:100,
            count:0
        },
        {
            MenuItem:"Butter Mysore Sada Dosa",
            HMenuItem:"बटर मैसूर सादा डोसा",
            Price:110,
            count:0
        },
        {
            MenuItem:"Mysore Masala Dosa",
            HMenuItem:"मैसूर मसाला डोसा",
            Price:120,
            count:0
        },
        {
            MenuItem:"Butter Mysore Masala Dosa",
            HMenuItem:"बटर मैसूर मसाला डोसा",
            Price:130,
            count:0
        },
        {
            MenuItem:"Mysore Cheese Sada Dosa",
            HMenuItem:"मैसूर चीज़ सादा डोसा",
            Price:120,
            count:0
        },
        {
            MenuItem:"Mysore Cheese Masala Dosa",
            HMenuItem:"म्हैसूर चीज मसाला डोसा",
            Price:140,
            count:0
        }
    ];

    let [menu, setMenu] = useState(MenuPrice);

    useEffect(() => {
        const menus = JSON.parse(localStorage.getItem('dosa'));
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
        itm => !newOrder.some(itm2 => itm2.MenuItem === itm.MenuItem)));
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
        localStorage.setItem('dosa',JSON.stringify(menu));
    },[menu]);

    const DosaMenu = menu.map((menu,index) => {
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
    return <div>{DosaMenu}</div>
}


export const Dosa = (props) => (
    <div className="menu"> 
        <NameLogo />
        <Extra />
       <div>
           <Menu orderList={props.orderList} setOrderList={props.setOrderList}/> 
       </div>
    </div>
);