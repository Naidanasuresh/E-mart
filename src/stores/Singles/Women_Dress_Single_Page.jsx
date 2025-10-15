import React from 'react'
import { womanData } from '../data/woman'
import { useParams } from 'react-router-dom'
import Nav_bar from '../Components/nav_bar'
import { usecart } from '../Context/Cart_Context'

const Women_Dressing_Single_page = () => {
    const {id}=useParams()
    const product=womanData.find((item)=>item.id===id)
    const {addtocart, cartitems}=usecart()
    
  return (
    <>
    <Nav_bar/>
    <div className="ind-section">
        <div className="ind-img">
            <img src={product.image} alt=''/>
        </div>
        <div className="ind-details space">
            <div className="ind-company">
                <h3>{product.company}</h3>
            </div>
            <div className="ind-model space">
                <h3>{product.model}</h3>
            </div>
            <div className="ind-price space">
                <h3>{product.price}</h3>
            </div>
            <div className="ind-desc space">
                <p>{product.description}</p>
            </div>
            <button className='ind-btn' onClick={()=>addtocart(product)}>Add to Cart</button>
        </div>
    </div>

    </>

  )
}

export default Women_Dressing_Single_page