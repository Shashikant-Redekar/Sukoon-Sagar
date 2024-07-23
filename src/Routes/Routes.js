import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Links} from './Links';
import {Home} from '../MenuList/Home';
import {SouthIndianSnacks} from '../MenuList/SouthIndianSnacks';
import { Dosa } from '../MenuList/Dosa';
import { SplDosa } from '../MenuList/Spl-dosa-and-uttappa';
import { Uttapam } from '../MenuList/Uttapam';
import { Fasting } from '../MenuList/Fasting';
import { Thali } from '../MenuList/Thali';
import { Sandwiches } from '../MenuList/Sandwiches';
import { Pavbhaji } from '../MenuList/Pavbhaji';
import { Pizza } from '../MenuList/Pizza';
import { Kids } from '../MenuList/Kids-Special';
import { IndianSoups } from '../MenuList/Indian-Soups';
import { ChineseSoups } from '../MenuList/Chinese-Soups';
import { StarterTandoori } from '../MenuList/Starter-Tandoori';
import { ChineseStarter } from '../MenuList/Chinese-Starter';
import { VegKhajana } from '../MenuList/Veg-Khajana';
import { Dessert } from '../MenuList/Dessert';
import { Cold } from '../MenuList/Cold-Beverages';
import { Hot } from '../MenuList/Hot-Beverages';
import { Lassi } from '../MenuList/Lassi';
import { Fruit } from '../MenuList/Fruit-Salad';
import { Myorder } from '../MenuList/MyOrder';
import { Falooda } from '../MenuList/Falooda';
import { Smoothies } from '../MenuList/Smoothies';
import { Dal } from '../MenuList/Dal';
import { Cheese } from '../MenuList/Cheese-ki-bahar';

export function AppRoute(props) {
    useEffect(() => {
        const orderlist = JSON.parse(localStorage.getItem('orderlist'));
        if(orderlist){
            setOrderList(orderlist);
        }
    },[]);
    let [orderList, setOrderList] = useState();
    useEffect(() => {
        localStorage.setItem('orderlist',JSON.stringify(orderList));
    },[orderList]);
    return(
    <BrowserRouter >
        <Links burger={props.burger}/>
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/South-Indian-Snacks' element={<SouthIndianSnacks orderList={orderList} setOrderList={setOrderList}/>}  />
            <Route path='/Dosa' element={<Dosa orderList={orderList} setOrderList={setOrderList}/>} />
            <Route path='/Spl-Dosa-and-Uttappa' element={<SplDosa orderList={orderList} setOrderList={setOrderList}/>}  />
            <Route path='/Uttapam' element={<Uttapam orderList={orderList} setOrderList={setOrderList}/>} />
            <Route path='/Fasting' element={<Fasting orderList={orderList} setOrderList={setOrderList}/>} />
            <Route path='/Thali'  element={<Thali orderList={orderList} setOrderList={setOrderList}/>}/>
            <Route path='/Sandwiches' element={<Sandwiches orderList={orderList} setOrderList={setOrderList}/>} />
            <Route path='/Pavbhaji' element={<Pavbhaji orderList={orderList} setOrderList={setOrderList}/>} />
            <Route path='/Pizza' element={<Pizza orderList={orderList} setOrderList={setOrderList}/>} />
            <Route path='/Kids-Special' element={<Kids orderList={orderList} setOrderList={setOrderList}/>} />
            <Route path='/Indian-Soups' element={<IndianSoups orderList={orderList} setOrderList={setOrderList}/>} />
            <Route path='/Chinese-Soups' element={<ChineseSoups orderList={orderList} setOrderList={setOrderList}/>} />
            <Route path='/Starter-Tandoori-&-Kabab' element={<StarterTandoori orderList={orderList} setOrderList={setOrderList}/> } />
            <Route path='/Chinese-Starter' element={<ChineseStarter orderList={orderList} setOrderList={setOrderList}/>} />
            <Route path='/Veg-Khajana' element={<VegKhajana orderList={orderList} setOrderList={setOrderList}/>} />
            <Route path='/My-Order' element={<Myorder orderList={orderList} setOrderList={setOrderList}/>}/>
            <Route path='/Dessert' element={<Dessert orderList={orderList} setOrderList={setOrderList}/>} />
            <Route path='/Cold-Beverages' element={<Cold orderList={orderList} setOrderList={setOrderList}/>} />
            <Route path='/Hot-Beverages' element={<Hot orderList={orderList} setOrderList={setOrderList}/>} />
            <Route path='/Lassi' element={<Lassi orderList={orderList} setOrderList={setOrderList}/>} />
            <Route path='/Fruit-Salad-Sweet' element={<Fruit orderList={orderList} setOrderList={setOrderList}/>} />
            <Route path='/Falooda' element={<Falooda orderList={orderList} setOrderList={setOrderList}/>} />
            <Route path='/Smoothies' element={<Smoothies orderList={orderList} setOrderList={setOrderList}/>} />
            <Route path='/Dal-ki-Mehak' element={<Dal orderList={orderList} setOrderList={setOrderList}/>} />
            <Route path='/Cheese-ki-Bahar' element={<Cheese orderList={orderList} setOrderList={setOrderList}/>} />
        </Routes>
    </BrowserRouter>
    );
};

