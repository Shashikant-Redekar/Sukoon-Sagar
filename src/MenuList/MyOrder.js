import { NameLogo } from '../name-logo';


function Listing(props){

    const handleSub = (MName) => {
        const newMenu = props.orderList.map(name => {
            if(name.MenuItem === MName){
                return {...name, count:name.count-1};
            }
            return name;
        });
        props.setOrderList(newMenu);
    };

    const handleAdd = (MName) => {
        const newMenu = props.orderList.map(name => {
            if(name.MenuItem === MName){
                return {...name, count:name.count+1};
            }
            return name;
        });
        props.orderList(newMenu);
    };

    const handleRemove = (MName) => {
        const newMenu = props.orderList.filter(name => {
            return name.MenuItem !== MName;
        });
        props.setOrderList(newMenu);
    };

    if(props.orderList !== undefined && Object.keys(props.orderList).length !== 0){
        let ListItem = props.orderList.map((menu,index) => {
            return(
                <div key={index}>
                <ul className='items'>
                    <h3 className='menuItemName'>{menu.MenuItem}/{menu.HMenuItem}</h3>
                    <h3 className='price'>{menu.Price}</h3>
                    <div className='ASRButtons'>
                        {menu.count===1?<button className='sub' onClick={()=> handleRemove(menu.MenuItem)}>Remove</button>:<button className='sub' onClick={() => handleSub(menu.MenuItem)}>-</button>}
                        {menu.count!==0&&<p className='count'>{menu.count}</p>}
                        {menu.count!==0&&<button className='addition' onClick={() => handleAdd(menu.MenuItem)}>+</button>}
                    </div>
                </ul>
            </div>
            );
        });
        return <div>{ListItem}</div>
    }else{
        return <div>Please select some dishes from the menu.</div>
    }  
}

export const Myorder = (props) => (
    <div className='menu'>
        <NameLogo />
        <div>
            <p>Enter your table number:</p>
            <div>
                <h2>Here is your order cart</h2>
                <Listing orderList={props.orderList} setOrderList={props.setOrderList}/>
            </div>
        </div>
    </div>
);