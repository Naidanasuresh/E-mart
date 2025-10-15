import React from 'react'
import { usecart } from '../Context/Cart_Context'
import Nav_bar from '../Components/nav_bar'

const Usercart = () => {
    const {cartitems, addtocart, removefromcart}=usecart();
  return (
    <>
    <Nav_bar/>
    <div>
        <h2 className='y-cart'>Your Cart</h2>
        {cartitems.length===0?
        (<p className='empty'>Your Cart is Empty!</p>):(
            <div></div>

        )}
    
       
    <div> 
      {cartitems.map((item)=>{
        return (
            <div className="cart-section">
                <div className="cart-img">
                    <img src={item.image} alt=''/>
                </div>
                <div className="cart-details">
                    <h3>{item.product}</h3>
                    <h2>{item.price}</h2>
                    <h3>{item.model}</h3>
                </div>
                <button className='removeBtn' onClick={()=>  removefromcart(item)}>Remove</button>
            </div>
        )
      })}
    </div>

    </div>
    </>
  )
}

export default Usercart
