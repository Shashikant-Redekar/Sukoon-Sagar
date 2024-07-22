import { Extra } from "./Extra";
import { useState, useEffect } from 'react';
import '../Styling/style.scss';

function Menu(props) {
    let MenuPrice = [
        {
            MenuItem: "Steam Idli",
            HMenuItem:"स्टीम इडली",
            Price:70,
            count:0           
        },
        {
            MenuItem:"Idli Wada",
            HMenuItem:"इडली वड़ा",
            Price:75,
            count:0
        },
        {
            MenuItem:"Idli Fry",
            HMenuItem:"इडली फ्राई",
            Price:80,
            count:0
        },
        {
            MenuItem:"Dahi Idli",
            HMenuItem:"दही इडली",
            Price:100,
            count:0
        },
        {
            MenuItem:"Butter Idli",
            HMenuItem:"बटर इडली",
            Price:90,
            count:0
        },
        {
            MenuItem:"Upma",
            HMenuItem:"उपमा",
            Price:70,
            count:0
        },
        {
            MenuItem:"Sheera",
            HMenuItem:"शीरा",
            Price:80,
            count:0
        },
        {
            MenuItem:"Puri Bhaji",
            HMenuItem:"पुरी भाजी",
            Price:100,
            count:0
        },
        {
            MenuItem:"Plate Puri",
            HMenuItem:"प्लेट पुरी",
            Price:50,
            count:0
        },
        {
            MenuItem:"Medu Wada",
            HMenuItem:"मेदू वडा",
            Price:80,
            count:0
        },
        {
            MenuItem:"Dahi Wada",
            HMenuItem:"दही वडा",
            Price:100,
            count:0
        },
        {
            MenuItem:"Misal Pav",
            HMenuItem:"मिसळ पाव",
            Price:100,
            count:0
        },
        {
            MenuItem:"Usal Pav",
            HMenuItem:"उसळ पाव",
            Price:80,
            count:0
        },
        {
            MenuItem:"Batata Wada",
            HMenuItem:"बटाटा वडा",
            Price:80,
            count:0
        },
        {
            MenuItem:"Wada Usal",
            HMenuItem:"वडा उसळ",
            Price:90,
            count:0
        },
        {
            MenuItem:"Wada Pav(Single)",
            HMenuItem:"वडा पाव (एकच)",
            Price:25,
            count:0
        },
        {
            MenuItem:"Dahi Misal",
            HMenuItem:"दही मिसळ",
            Price:120,
            count:0
        }
    ];
    
    let [menu, setMenu] = useState(MenuPrice);

    useEffect(() => {
        const menus = JSON.parse(localStorage.getItem('SIS'));
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
        localStorage.setItem('SIS',JSON.stringify(menu));
    },[menu]);

    const SouthIndianSnacksMenu = menu.map((menu,index) => {
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
    return <div>{SouthIndianSnacksMenu}</div>
}


export const SouthIndianSnacks = (props) => (
    <div className="menu"> 
        <Extra />
       <div>
           <Menu orderList={props.orderList} setOrderList={props.setOrderList}/> 
       </div>
    </div>
);