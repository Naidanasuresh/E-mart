import React from 'react'
import { computerData } from '../data/computers'
import { Link } from 'react-router-dom'




const Computers = () => {
    const firstfiveimages=computerData.slice(0,5)

  return (
    <>
      <div className="protitle_h2">
        <h2>Computers</h2>
    </div>
        <div className='prosection'>
        {
            firstfiveimages.map((item)=>{
                return (
                    <div className='imgbox'>
                      <Link to={'/computerpage'}>
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

export default Computers
