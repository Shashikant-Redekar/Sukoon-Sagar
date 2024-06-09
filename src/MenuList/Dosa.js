import { Extra } from "./Extra";
import { useState } from 'react';

function Menu() {
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
    }
    
    const DosaMenu = MenuPrice.map((menu,index) => {
        return(
                <div key={index}>
                    <ul className='items'>
                        <h5>{menu.MenuItem}/{menu.HMenuItem}</h5>
                        <h5>{menu.Price}</h5>
                        {menu.count===0?<button onClick={() => handleAdd(menu.MenuItem)}>ADD</button>:<button onClick={() => handleAdd(menu.MenuItem)}>+</button>}
                        {menu.count!==0&&<p>{menu.count}</p>}
                        {menu.count!==0&&<button onClick={() => handleSub(menu.MenuItem)}>-</button>}
                    </ul>
                </div>
        );
    });
    return <div>{DosaMenu}</div>
}


export const Dosa = () => (
    <div> 
        <Extra />
       <div>
           <Menu /> 
       </div>
    </div>
);