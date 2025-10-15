import React from 'react'
import { Link } from 'react-router-dom';
import { usecart } from '../Context/Cart_Context';

const Nav_bar = () => {
  const {cartitems}=usecart()
  return (
    <>
    
    <div>
      
      <div className='nav_Section'>
        <Link to='/' className='custom-link'>
        <div className="title" >
            <h2>E-Mart</h2>
        </div>
        
        </Link>
      
      
        <div className="search">
       
            <input type='text' placeholder='Search...'/>
        </div>
        <div className="user">
            <div className="user-details">
                SignIn/SignUp
            </div>
            <Link to='/cart' className='custom-link'>
            <div className="cart">Cart
              <span>
                {cartitems.length}
              </span>
            </div>
            </Link>
            
        </div>

      </div>
      
    </div>
    
    <div className="Submenu">
      <ul>
        <Link to='/mobilepage'  className='custom-link'>
        

        <li>Mobiles</li>
        </Link>

        <Link to='/computerpage' className='custom-link'>        
        <li>Computers</li>
        </Link>

        <Link to='/watchepage' className='custom-link'>
        <li>Watches</li>
        </Link>

        <Link to='/menfashion' className='custom-link'>
        <li>Men Fashion</li>
        </Link>

        <Link to='/womendressing' className='custom-link'>
        <li>Women Dressing</li>
        </Link>
      
      
        <Link to='/Ac' className='custom-link'>
        <li>Air Conditioners</li>
        </Link>
      
      </ul>

      
    </div>
    </>
    
  )
}

export default Nav_bar;
