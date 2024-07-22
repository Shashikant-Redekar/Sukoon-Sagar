import { NameLogo } from '../name-logo';
import { useState, useEffect } from 'react';
import '../Styling/Components/navbar.scss';

function Menu(props) {
    let MenuPrice = [
        {
            MenuItem: "Paneer Kalimiri Tikka",
            HMenuItem:"पनीर कालीमिरी टिक्का",
            Price:260,
            count:0
        },
        {
            MenuItem:"Paneer Pahadi Tikka",
            HMenuItem:"पनीर पहाड़ी टिक्का",
            Price:260,
            count:0
        },
        {
            MenuItem:"Paneer Malai Tikka(sweet)",
            HMenuItem:"पनीर मलाई टिक्का (गोड)",
            Price:250,
            count:0
        },
        {
            MenuItem:"Paneer Lasuni Tikka",
            HMenuItem:"पनीर लसून टिक्का",
            Price:260,
            count:0
        },
        {
            MenuItem:"Tandoori Gobi",
            HMenuItem:"तंदूरी गोबी ",
            Price:230,
            count:0
        },
        {
            MenuItem:"Paneer Tikka",
            HMenuItem:"पनीर टिक्का",
            Price:220,
            count:0
        },
        {
            MenuItem:"Paneer Lajawab Tikka",
            HMenuItem:"पनीर लाजवाब टिक्का",
            Price:260,
            count:0
        },
        {
            MenuItem:"Paneer Dilkush Tikka",
            HMenuItem:"पनीर दिलकुश टिक्का",
            Price:270,
            count:0
        },
        {
            MenuItem:"Aloo Tikka",
            HMenuItem:"आलू टिक्का",
            Price:200,
            count:0
        },
        {
            MenuItem:"Veg. Seekh Kabab",
            HMenuItem:"व्हेज सीख कबाब",
            Price:230,
            count:0
        },
        {
            MenuItem:"Veg. Hara Bhara Kabab",
            HMenuItem:"व्हेज हरा भरा कबाब",
            Price:220,
            count:0
        },
        {
            MenuItem:"Veg. Shikari Kabab",
            HMenuItem:"व्हेज शिकारी कबाब",
            Price:250,
            count:0
        },
        {
            MenuItem:"Chilly Milly Kabab",
            HMenuItem:"चिली मिली कबाब",
            Price:260,
            count:0
        },
        {
            MenuItem:"Paneer Cheese Kabab",
            HMenuItem:"पनीर चीज कबाब",
            Price:280,
            count:0
        },
        {
            MenuItem:"Mushroom Tikka",
            HMenuItem:"मशरूम टिक्का",
            Price:240,
            count:0
        }
    ];
    
    let [menu, setMenu] = useState(MenuPrice);

    useEffect(() => {
        const menus = JSON.parse(localStorage.getItem('starterT'));
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
        localStorage.setItem('starterT',JSON.stringify(menu));
    },[menu]);

    const StarterTandoori = menu.map((menu,index) => {
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
    return <div>{StarterTandoori}</div>
}


export const StarterTandoori = (props) => (
    <div className='menu'> 
        <NameLogo />
        <Menu orderList={props.orderList} setOrderList={props.setOrderList}/>
    </div>
);