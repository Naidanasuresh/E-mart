import React from 'react'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'


const Mobiles = () => {
    const firstfiveimages=mobileData.slice(0,5)
   
  return (
    <>
    <div className="protitle_h2">
    <h2 className='proh2tag'>Mobiles</h2>
    </div>
        <div className='prosection'>
        {
            firstfiveimages.map((item)=>{
                return (
                    <div className='imgbox'>
                        <Link to='/mobilepage'>
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

export default Mobiles
