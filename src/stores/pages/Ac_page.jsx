import React from 'react'
import { acData } from '../data/ac'
import Nav_bar from '../Components/nav_bar'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Ac_page = () => {
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
        acData: acData.filter((orange)=>selectproduct.includes(orange.company))





  return (
    <>
    <Nav_bar/>
    <div className="full_page">
        <div className='pro-selected'>
            {acData.map((phone)=>{
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
            acData.map((item)=>{
                return(
                    <div>
                        <Link to={`/acpage/${item.id}`}>
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

export default Ac_page

