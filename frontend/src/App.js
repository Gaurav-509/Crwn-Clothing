import Directory from './Components/Directory/directory.component';
import Shop from '../src/Components/Pages/Shop/shop.component';
import ShopMenu from './Components/Pages/Shop-menu/shop-menu.component';
import Signin from './Components/Pages/Signin/signin.component';
import './App.scss';

import Navigation from './Components/Navigation/navigation.component';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Directory />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:category' element={<Shop />} />
        <Route path='/shop-menu' element={<ShopMenu />} />
        <Route path='/Signin' element={<Signin />} />
      </Route>
    </Routes>
  );


}

export default App;
