import React from 'react'
import { womanData } from '../data/woman'
import { Link } from 'react-router-dom'

const Women_Dressing = () => {
    const firstfiveimages=womanData.slice(0,5)
  return (
    <>
     <div className="protitle_h2">
        <h2 >Women Dressing</h2>
    </div>
    
    <div className='prosection'>
        {
            firstfiveimages.map((item)=>{
                return(
                    <div className='imgbox'>
                      <Link to={'/womendressing'}>
                      <img className='proimg' src={item.image} alt=''/>
                      </Link>
                        
                    </div>
                )
            })
        }
      
      </div>
    </>
    
  )
}

export default Women_Dressing
