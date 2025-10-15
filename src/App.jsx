import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'

import './App.css'
import React from 'react'
import Landing_page from './stores/pages/Landing_page'
import Product from './stores/Components/Product'
import Mobiles from './stores/Components/Mobiles'
import Mobile_Page from './stores/pages/Mobile_Page'
import Computer_Page from './stores/pages/Computer_Page'
import Watch_page from './stores/pages/Watch_page'
import Men_page from './stores/pages/Men_page'

import Women_Dressing_page from './stores/pages/Women_Dressing_page'
import Ac_page from './stores/pages/Ac_page'
import Mobile_Single_page from './stores/Singles/Mobile_Single_page'
import Usercart from './stores/Singles/usercart'
import Computer_Single_page from './stores/Singles/computer_single_page'
import Women_Dressing_Single_page from './stores/Singles/Women_Dress_Single_Page'
import Men_single_page from './stores/Singles/men_single_page'
import Watch_Single_page from './stores/Singles/watchsingle_page'
import Ac_Single_page from './stores/Singles/Ac_single_page'


const App = () => {
  return (
    <div>
      <Routes>
         <Route path='/' element={<><Landing_page /><Product /></>} />
         <Route  path='/mobiles' element={<Mobiles/>}/>
         <Route path='/mobilepage' element={<Mobile_Page/>}/>
         <Route path='/computerpage' element={<Computer_Page/>}/>
         <Route path='/watchepage' element={<Watch_page/>}/>
         <Route path='/menfashion' element={<Men_page/>}/>
         <Route path='/womendressing' element={<Women_Dressing_page/>}/>
         <Route path='/ac' element={<Ac_page/>}/>
         <Route path='/mobiles/:id' element={<Mobile_Single_page/>}/>
         <Route path='/cart' element={<Usercart/>}/>
         <Route path='/computes/:id' element={<Computer_Single_page/>}/>
         <Route path='/women_dress/:id' element={<Women_Dressing_Single_page/>}/>
         <Route path='/mens/:id' element={<Men_single_page/>}/>
         <Route path='/wacthespage/:id' element={<Watch_Single_page/>}/>
         <Route path='/acpage/:id' element={<Ac_Single_page/>}/>
           
         
         
        
         
         
      </Routes>
      
      
      
      
    </div>
  )
}

export default App




