import {BrowserRouter, Route, Routes} from 'react-router-dom';
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

export const AppRoute = () => (
    <BrowserRouter>
        <Links />
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/South-Indian-Snacks' Component={SouthIndianSnacks} />
            <Route path='/Dosa' Component={Dosa} />
            <Route path='/Spl-Dosa-and-Uttappa' Component={SplDosa} />
            <Route path='/Uttapam' Component={Uttapam} />
            <Route path='/Fasting' Component={Fasting} />
            <Route path='/Thali' Component={Thali} />
            <Route path='/Sandwiches' Component={Sandwiches} />
            <Route path='/Pavbhaji' Component={Pavbhaji} />
            <Route path='/Pizza' Component={Pizza} />
            <Route path='/Kids-Special' Component={Kids} />
            <Route path='/Indian-Soups' Component={IndianSoups} />
            <Route path='/Chinese-Soups' Component={ChineseSoups} />
            <Route path='/Starter-Tandoori-&-Kabab' Component={StarterTandoori} />
            <Route path='/Chinese-Starter' Component={ChineseStarter} />
            <Route path='/Veg-Khajana' Component={VegKhajana} />
        </Routes>
    </BrowserRouter>
);

