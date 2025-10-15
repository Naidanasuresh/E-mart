import React from 'react'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'
const Ac = () => {
    const firstfiveimages=acData.slice(0,5)
  return (
    <>
     <div className="protitle_h2">
        <h2>Air Conditioners</h2>
    </div>
        <div className='prosection'>
            {
                firstfiveimages.map((item)=>{
                    return(
                        <div className='imgbox'>
                            <Link to={'/ac'}>
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

export default Ac
