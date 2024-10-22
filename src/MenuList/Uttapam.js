import { useState,useEffect } from 'react';
import '../Styling/Components/navbar.scss';

function Menu(props) {
    let MenuPrice = [
        {
            MenuItem: "Set Dosa",
            HMenuItem:"सेट डोसा",
            Price:100,
            count:0
        },
        {
            MenuItem:"Uttappa",
            HMenuItem:"उत्तप्पा",
            Price:80,
            count:0
        },
        {
            MenuItem:"Onion Uttappa/Butter Uttappa",
            HMenuItem:"अनियन उत्तप्पा/बटर उत्तप्पा",
            Price:90,
            count:0
        },
        {
            MenuItem:"Masala Uttappa",
            HMenuItem:"मसाला उत्तप्पा",
            Price:90,
            count:0
        },
        {
            MenuItem:"Cheese Uttappa",
            HMenuItem:"चीज उत्तप्पा",
            Price:100,
            count:0
        },
        {
            MenuItem:"Cheese Onion Uttappa",
            HMenuItem:"चीज़ अनियन उत्तप्पा",
            Price:120,
            count:0
        },
        {
            MenuItem:"Butter Onion Uttapa",
            HMenuItem:"बटर अनियन उत्तप्पा",
            Price:105,
            count:0
        },
        {
            MenuItem:"Tomato Onion Uttappa",
            HMenuItem:"टोमॅटो अनियन उत्तप्पा",
            Price:100,
            count:0
        },
        {
            MenuItem:"Butter Tomato Onion Uttappa",
            HMenuItem:"बटर टोमॅटो अनियन उत्तप्पा",
            Price:120,
            count:0
        },
        {
            MenuItem:"Tomato Uttappa",
            HMenuItem:"टोमॅटो उत्तप्पा",
            Price:90,
            count:0
        },
        {
            MenuItem:"Butter Tomato Uttappa",
            HMenuItem:"बटर टोमॅटो उत्तप्पा",
            Price:100,
            count:0
        },
        {
            MenuItem:"Coconut Uttappa",
            HMenuItem:"कोकोनट उत्तप्पा",
            Price:100,
            count:0
        },
        {
            MenuItem:"Butter Coconut Uttappa",
            HMenuItem:"बटर कोकोनट उत्तप्पा",
            Price:110,
            count:0
        },
        {
            MenuItem:"Cheese Coconut Uttappa",
            HMenuItem:"चीज़ कोकोनट उत्तप्पा",
            Price:130,
            count:0
        },
        {
            MenuItem:"Cheese Tomato Onion Uttapa",
            HMenuItem:"चीज़ टोमॅटो अनियन उत्तप्पा",
            Price:140,
            count:0
        },
        {
            MenuItem:"Sixer Uttappa",
            HMenuItem:"सिक्सर उत्तप्पा",
            Price:200,
            count:0
        }
    ];
    
    let [menu, setMenu] = useState(MenuPrice);

    useEffect(() => {
        const menus = JSON.parse(localStorage.getItem('upma'));
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
        localStorage.setItem('upma',JSON.stringify(menu));
    },[menu]);

    const Uttapam = menu.map((menu,index) => {
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
    return <div>{Uttapam}</div>
}


export const Uttapam = (props) => (
    <div className='menu'> 
       <Menu orderList={props.orderList} setOrderList={props.setOrderList}/>
    </div>
);