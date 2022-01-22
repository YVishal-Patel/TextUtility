import React from 'react'
import Textfile from './Textfile'
import About from './About'
import Navbar from '../Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function Round (){
    return(<>
 <BrowserRouter>
 <Navbar />
 <Routes>
     {/* <Route path="/"element={<Navbar />}></Route> */}
     <Route path="/about" element={<About />}></Route>
     <Route path="/textfile" element={<Textfile/>}></Route>
 </Routes>
 </BrowserRouter>
    </>
    )
}
export default Round