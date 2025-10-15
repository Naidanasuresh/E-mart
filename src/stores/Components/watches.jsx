import React from 'react'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom'


const Watches = () => {
    const firstfiveimages=watchData.slice(0,5)
   
  return (
    <>
    <div className="protitle_h2">
        <h2>Watches</h2>
    </div>
    <div className='prosection'>
        {
            firstfiveimages.map((item)=>{
                return (
                    <div className='imgbox'>
                        <Link to={'/watchepage'}>
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

export default Watches
