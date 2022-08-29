import './navigation.styles.scss'

import logo from '../../assets/images/crown.svg';


// import CartIcon from '../../assets/images/shopping-bag.svg';

import { Link, Outlet } from 'react-router-dom';

const Navigation = () =>{
    return(
    <>
    <div className='navigation'>
        <Link to="/" className='logo-container'><img src={logo} alt="" /></Link>
        <div className='nav-links-container'>
        <Link className="nav-link" to="/shop-menu" >SHOP MENU</Link>        
        </div>
      </div>
      <Outlet/>
    </>
      
    )
}
export default Navigation;