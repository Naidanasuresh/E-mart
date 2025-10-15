import React from 'react'
import { mobileData } from '../data/mobiles'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import Nav_bar from '../Components/nav_bar'




const Mobile_Page = () => {
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
        mobileData: mobileData.filter((orange)=>selectproduct.includes(orange.company))
  return (
    <>
    
    <Nav_bar/>
    <div className="full_page">
        <div className='pro-selected'>
            {mobileData.map((phone)=>{
                return(
                    <div className='pro-input'>
                        <label>
                            <input type='checkbox'
                            checked={selectproduct.includes(phone.company)}
                            onChange={()=>companyhandler(phone.company)}
                            
                            />
                            {phone.company}
                            

                        </label>
                    </div>


                )
            })}
        </div>
        <div className='pagesection'>
            {
                filteredProduct.map((item)=>{
                    return(
                        <div>
                            <Link to={`/mobiles/${item.id}`}>
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

export default Mobile_Page
