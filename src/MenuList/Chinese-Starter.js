import { NameLogo } from '../name-logo';
import { useState } from 'react';
import '../Styling/Components/navbar.scss';

function Menu() {
    let MenuPrice = [
        {
            MenuItem: "Veg Manchurian Dry",
            HMenuItem:"व्हेज मंचुरियन ड्राय",
            Price:180,
            count:0
        },
        {
            MenuItem:"Paneer 65",
            HMenuItem:"पनीर 65",
            Price:220,
            count:0
        },
        {
            MenuItem:"Paneer Paper Garlic",
            HMenuItem:"पनीर पेपर गार्लिक",
            Price:230,
            count:0
        },
        {
            MenuItem:"Veg Finger Schezwan",
            HMenuItem:"व्हेज फिंगर शेजवान",
            Price:210,
            count:0
        },
        {
            MenuItem:"Chinese Bhel",
            HMenuItem:"चायनीज भेळ",
            Price:150,
            count:0
        },
        {
            MenuItem:"Idli Chilly Dry / Veg Spring Roll",
            HMenuItem:"इडली चिली ड्राय / व्हेज स्प्रिंग रोल",
            Price:210,
            count:0
        },
        {
            MenuItem:"Mushroom Spring Roll",
            HMenuItem:"मशरूम स्प्रिंग रोल",
            Price:230,
            count:0
        },
        {
            MenuItem:"Paneer Spring Roll",
            HMenuItem:"पनीर स्प्रिंग रोल",
            Price:230,
            count:0
        },
        {
            MenuItem:"Veg. Crispy",
            HMenuItem:"वेज. क्रिस्पी",
            Price:210,
            count:0
        },
        {
            MenuItem:"Baby Corn Golden Fry",
            HMenuItem:"बेबी कॉर्न गोल्डन फ्राय",
            Price:230,
            count:0
        },
        {
            MenuItem:"Schzwan Patato Chilly",
            HMenuItem:"शेझवान बटाटा चिली",
            Price:200,
            count:0
        },
        {
            MenuItem:"Paneer Chilly Dry",
            HMenuItem:"पनीर चिल्ली ड्राई",
            Price:210,
            count:0
        },
        {
            MenuItem:"Paneer Spinach Dry",
            HMenuItem:"पनीर स्पिनच ड्राई",
            Price:230,
            count:0
        },
        {
            MenuItem:"Soyabean Chilly Dry",
            HMenuItem:"सोयाबीन चिल्ली ड्राई",
            Price:210,
            count:0
        },
        {
            MenuItem:"Shanghai Paneer",
            HMenuItem:"शंघाई पनीर",
            Price:225,
            count:0
        },
        {
            MenuItem:"Mushroom Chilly Dry",
            HMenuItem:"मशरुम चिल्ली ड्राई",
            Price:210,
            count:0
        },
        {
            MenuItem:"Veg. 65",
            HMenuItem:"व्हेज. ६५",
            Price:200,
            count:0
        },
        {
            MenuItem:"Paneer Manchurian Dry",
            HMenuItem:"पनीर मंचुरियन ड्राय",
            Price:210,
            count:0
        },
        {
            MenuItem:"Paneer Crispy",
            HMenuItem:"पनीर क्रिस्पी",
            Price:240,
            count:0
        },
        {
            MenuItem:"Bullet Fire",
            HMenuItem:"बुलेट फायर",
            Price:250,
            count:0
        },
        {
            MenuItem:"Veg. Lollipop",
            HMenuItem:"व्हेज. लॉलीपॉप",
            Price:210,
            count:0
        }
    ];

    let [menu, setMenu] = useState(MenuPrice);

    const handleAdd = (MName) => {
        const newMenu = menu.map(name => {
            if(name.MenuItem === MName){
                return {...name, count:name.count+1};
            }
            return name;
        });
    setMenu(newMenu);
    };

    const handleSub = (MName) => {
        const newMenu = menu.map(name => {
            if(name.MenuItem === MName){
                return {...name, count:name.count-1};
            }
            return name;
        });
    setMenu(newMenu);   
    };
    
    const ChineseStarter = menu.map((menu,index) => {
        return(
                <div key={index}>
                    <ul className='items'>
                        <h5>{menu.MenuItem}/{menu.HMenuItem}</h5>
                        <h5>{menu.Price}</h5>
                        {menu.count!==0&&<button onClick={() => handleSub(menu.MenuItem)}>-</button>}
                        {menu.count!==0&&<p>{menu.count}</p>}
                        {menu.count===0?<button key={menu.MenuItem} onClick={() => handleAdd(menu.MenuItem)}>ADD</button>:<button onClick={() => handleAdd(menu.MenuItem)}>+</button>}
                    </ul>
                </div>
        );
    });
    return <div>{ChineseStarter}</div>
}


export const ChineseStarter = () => (
    <div> 
        <NameLogo />
        <Menu />
    </div>
);