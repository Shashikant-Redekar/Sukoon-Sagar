import { NameLogo } from '../name-logo';
import { useState } from 'react';
import '../Styling/Components/navbar.scss';

function Menu() {
    let MenuPrice = [
        {
            MenuItem: "Aloo Jeera / Aloo Palak",
            HMenuItem:"आलू जीरा / आलू पालक",
            Price:160,
            count:0
        },
        {
            MenuItem:"Aloo Mutter / Aloo Methi",
            HMenuItem:"आलू मटर / आलू मेथी",
            Price:170,
            count:0
        },
        {
            MenuItem:"Aloo Gobi",
            HMenuItem:"आलू गोबी",
            Price:160,
            count:0
        },
        {
            MenuItem:"Green Peas Masala",
            HMenuItem:"ग्रीन पीज मसाला ",
            Price:170,
            count:0
        },
        {
            MenuItem:"Boiled Vegetable",
            HMenuItem:"उकडलेली भाजी",
            Price:120,
            count:0
        },
        {
            MenuItem:"Mix Vegetable",
            HMenuItem:"मिक्स भाजी",
            Price:170,
            count:0
        },
        {
            MenuItem:"Palak Mutter",
            HMenuItem:"पालक मटार",
            Price:170,
            count:0
        },
        {
            MenuItem:"Chana Masala",
            HMenuItem:"चना मसाला",
            Price:160,
            count:0
        },
        {
            MenuItem:"Dum Aloo Masala",
            HMenuItem:"दम आलू मसाला",
            Price:200,
            count:0
        },
        {
            MenuItem:"Dum Aloo Kashmiri",
            HMenuItem:"दम आलू काश्मिरी",
            Price:210,
            count:0
        },
        {
            MenuItem:"Sev Tamatar",
            HMenuItem:"सेव टमाटर",
            Price:185,
            count:0
        },
        {
            MenuItem:"Hara Bhara Kabab Masala",
            HMenuItem:"हरा भरा कबाब मसाला",
            Price:215,
            count:0
        },
        {
            MenuItem:"Plain Palak",
            HMenuItem:"प्लैन पलक",
            Price:160,
            count:0
        },
        {
            MenuItem:"Veg Kashmiri",
            HMenuItem:"व्हेज कश्मीरी",
            Price:185,
            count:0
        },
        {
            MenuItem:"Veg Jaipuri",
            HMenuItem:"व्हेज जयपुरी",
            Price:210,
            count:0
        },
        {
            MenuItem:"Veg Shahi Kurma",
            HMenuItem:"शाकाहारी शाही कुर्मा",
            Price:210,
            count:0
        },
        {
            MenuItem:"Veg Tikka Masala",
            HMenuItem:"व्हेज टिक्का मसाला",
            Price:200,
            count:0
        },
        {
            MenuItem:"Veg Kolhapuri",
            HMenuItem:"व्हेज कोल्हापुरी",
            Price:200,
            count:0
        },
        {
            MenuItem:"Veg Jalfrezi",
            HMenuItem:"व्हेज जालफ्रेझी",
            Price:210,
            count:0
        },
        {
            MenuItem:"Veg Do-pyaza",
            HMenuItem:"व्हेज दो-प्याझा",
            Price:210,
            count:0
        },
        {
            MenuItem:"Veg Makanwala",
            HMenuItem:"वेज मकनवाला",
            Price:205,
            count:0
        },
        {
            MenuItem:"Methi Malai Mutter",
            HMenuItem:"मेथी मलाई मटर",
            Price:220,
            count:0
        },
        {
            MenuItem:"Stuffed Capsicum",
            HMenuItem:"स्टफ्ड कैप्सिकम",
            Price:210,
            count:0
        },
        {
            MenuItem:"Stuff Tomato",
            HMenuItem:"स्टफ टोमॅटो",
            Price:210,
            count:0
        },
        {
            MenuItem:"Gobi Makhanwala",
            HMenuItem:"गोबी माखनवाला",
            Price:185,
            count:0
        },
        {
            MenuItem:"Mushroom Masala",
            HMenuItem:"मशरूम मसाला",
            Price:230,
            count:0
        },
        {
            MenuItem:"Mushroom Mutter",
            HMenuItem:"मशरूम मटर",
            Price:220,
            count:0
        },
        {
            MenuItem:"Mushroom Tikka Masala",
            HMenuItem:"मशरूम टिक्का मसाला",
            Price:250,
            count:0
        },
        {
            MenuItem:"Babycorn Mushroom Masala",
            HMenuItem:"बेबीकॉर्न मशरूम मसाला",
            Price:250,
            count:0
        },
        {
            MenuItem:"Bhendi Masala",
            HMenuItem:"भिन्डी मसाला",
            Price:170,
            count:0
        },
        {
            MenuItem:"Baigan Bharta",
            HMenuItem:"बैगन भरता",
            Price:200,
            count:0
        },
        {
            MenuItem:"Veg Kheema",
            HMenuItem:"व्हेज खीमा",
            Price:210,
            count:0
        },
        {
            MenuItem:"Baby Corn Masala",
            HMenuItem:"बेबी कॉर्न मसाला",
            Price:220,
            count:0
        },
        {
            MenuItem:"Chole Bhature",
            HMenuItem:"छोले भटुरे",
            Price:200,
            count:0
        },
        {
            MenuItem:"Bhature(1pc)",
            HMenuItem:"भटुरे(1pc)",
            Price:60,
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
    const VegKhajana = MenuPrice.map((menu,index) => {
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
    return <div>{VegKhajana}</div>
}


export const VegKhajana = () => (
    <div> 
        <NameLogo />
        <Menu />
    </div>
);