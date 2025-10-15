import React from 'react'
import { watchData } from '../data/watch'

import { Link } from 'react-router-dom'
import { useState } from 'react'

import Nav_bar from '../Components/nav_bar'


const Watch_page = () => {

    const [selectproduct, setselecteproduct]=useState([])
    const companyhandler=(mango)=>{
    if (selectproduct.includes(mango)){
        setselecteproduct(selectproduct.filter(item=>item!=mango))
    }
    else{
        setselecteproduct([...selectproduct,mango])
    }
    
    }
    const filteredProduct=selectproduct.length==0?
        watchData: watchData.filter((orange)=>selectproduct.includes(orange.brand))
  return (
    <>
    <Nav_bar/>
    <div className="full_page">
        <div className='pro-selected'>
            {watchData.map((phone)=>{
                return(
                    <div className='pro-input'>
                        <label>
                            <input type='checkbox'
                            checked={selectproduct.includes(phone.brand)}
                            onChange={()=>companyhandler(phone.brand)}
                            
                            />
                            {phone.brand}
                            

                        </label>
                    </div>


                )
            })}
        </div>
    <div className='pagesection'>
        {
            filteredProduct.map((item)=>{
                return (
                    <div>
                        <Link to={`/wacthespage/${item.id}`}>
                        <div className='pageImg'>
                            <img src={item.image} alt=''/>

                        </div>
                        </Link>
                        
                        <div className="promodel">
                            {item.company} {item.model}
                        </div>
                    </div>
                )
            })
        }
    </div>
    </div>
    </>
  )
}

export default Watch_page
