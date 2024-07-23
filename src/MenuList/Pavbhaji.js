import { Extra } from "./Extra";
import { useState, useEffect } from 'react';
import '../Styling/style.scss';

function Menu(props) {
    let MenuPrice = [
        {
            MenuItem: "Pav Bhaji",
            HMenuItem:"पावभाजी",
            Price:130,
            count:0
        },
        {
            MenuItem:"Jain Pav Bhaji",
            HMenuItem:"जैन पावभाजी",
            Price:140,
            count:0
        },
        {
            MenuItem:"Cheese Pav Bhaji",
            HMenuItem:"चीज पावभाजी",
            Price:160,
            count:0
        },
        {
            MenuItem:"Paneer Pav Bhaji",
            HMenuItem:"पनीर पावभाजी",
            Price:160,
            count:0
        },
        {
            MenuItem:"Cheese Paneer Pav Bhaji",
            HMenuItem:"चीज पनीर पावभाजी",
            Price:185,
            count:0
        },
        {
            MenuItem:"Kada Pav Bhaji",
            HMenuItem:"कडा पावभाजी",
            Price:150,
            count:0
        },
        {
            MenuItem:"Cheese Kada Pav Bhaji",
            HMenuItem:"चीज कडा पावभाजी",
            Price:180,
            count:0
        },
        {
            MenuItem:"Cheese Masala Pav",
            HMenuItem:"चीज मसाला पाव",
            Price:150,
            count:0
        },
        {
            MenuItem:"Masala Pav",
            HMenuItem:"मसाला पाव",
            Price:120,
            count:0
        },
        {
            MenuItem:"Only Bhaji",
            HMenuItem:"फक्त भजी",
            Price:115,
            count:0
        },
        {
            MenuItem:"Only Jain Bhaji",
            HMenuItem:"फक्त जैन भाजी",
            Price:120,
            count:0
        },
        {
            MenuItem:"Garlic Chatni",
            HMenuItem:"गार्लिक चटनी",
            Price:70,
            count:0
        },
        {
            MenuItem:"Plain Pav (1pc)",
            HMenuItem:"साधा पाव (1 पीस)",
            Price:8,
            count:0
        },
        {
            MenuItem:"Butter Pav(1pc)",
            HMenuItem:"बटर पाव (1 पीस)",
            Price:20,
            count:0
        },
        {
            MenuItem:"Extra Cheese",
            HMenuItem:"एक्स्ट्रा चीज़",
            Price:40,
            count:0
        },
        {
            MenuItem:"Butter Fried Onion",
            HMenuItem:"बटर फ्राइड अनियन",
            Price:90,
            count:0
        }
    ];
    
    let [menu, setMenu] = useState(MenuPrice);

    useEffect(() => {
        const menus = JSON.parse(localStorage.getItem('pavbhaji'));
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
        localStorage.setItem('pavbhaji',JSON.stringify(menu));
    },[menu]);

    const Pavbhaji = menu.map((menu,index) => {
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
    return <div>{Pavbhaji}</div>
}


export const Pavbhaji = (props) => (
    <div className="menu"> 
        <Extra />
       <div>
           <Menu orderList={props.orderList} setOrderList={props.setOrderList}/> 
       </div>
    </div>
);