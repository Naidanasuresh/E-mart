import React from 'react'
import { menData } from '../data/men'
import { Link } from 'react-router-dom'


const Mens_fashion = () => {
    const firstfiveimages=menData.slice(0,5)
  return (
    <>
    <div className="protitle_h2">
    <h2 >Men Fashion</h2>
    </div>
        <div className='prosection'>
        {
            firstfiveimages.map((item)=>{
                return (
                    <div className='imgbox'>
                        <Link to={'/menfashion'}>
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

export default Mens_fashion
