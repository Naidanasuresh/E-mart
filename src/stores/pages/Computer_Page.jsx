import React from 'react'
import { computerData } from '../data/computers'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import Nav_bar from '../Components/nav_bar'

const Computer_Page = () => {
    const [selectproduct, setselecteproduct]=useState([])
    const companyhandler=(mango)=>{
        if (selectproduct.includes(mango)){
            setselecteproduct(selectproduct.filter(item=>item!=mango))
        }
        else {
            setselecteproduct([...selectproduct,mango])
        }
    }
    const filteredProduct=selectproduct.length==0?
        computerData: computerData.filter((orange)=>selectproduct.includes(orange.company))
    return (
    <>
    <Nav_bar/>
    <div className="full_page">
        <div className='pro-selected'>
            {computerData.map((phone)=>{
                return (
                    <div className='pro-input'>
                        <label>
                            <input type='checkbox'
                            checked={selectproduct.includes(phone.company)}
                            onChange={()=>companyhandler(phone.company)}
                            />
                        </label>
                        {phone.company}

                    </div>
                )
            })}

        </div>
    </div>

    <div className='pagesection'>
        {
            filteredProduct.map((item)=>{
                return(
                    <div>
                        <Link to={`/computes/${item.id}`}>
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
    </>
    

  )
  
}

export default Computer_Page
