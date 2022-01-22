import About from './Component/About';
import Navbar from './Navbar'
import Textfile from './Component/Textfile';
import React, { useState } from 'react'
import Alert from './Component/Alert';
import {BrowserRouter, Routes,Route} from 'react-router-dom'


function App(){
    const [Mode, setMode] = useState("light")
    const [alert, setAlert] = useState(null)

    const showAlert = (message,type)=>{
        setAlert({
            msg:message,
            type:type
        }
        )

        setTimeout( ()=>{
            setAlert(null)
        },2000)
    }
    
    const ToggleMode = ()=>{
        if(Mode === "light"){
        setMode('dark');
        document.body.style.backgroundColor= "#343a40"
        showAlert("The dark mode has been enabled.","success")
        // document.title = "textUtils - Dark Mode"
        // setInterval(() => {
        //     document.title = "textUtils is Amazing"
        // }, 2000);
        // setInterval(() => {
        //    document.title = "Install textUtils" 
        // }, 1500);
    }else{
        setMode('light');
        document.body.style.backgroundColor =  "white"
        showAlert("The light mode has been enabled.","success")
        // document.title = "textUtils - Light Mode"
    }
}


    return(<>
 <BrowserRouter>
    <Navbar title ="textUtils" section="About us" mode={Mode} toggleMode= {ToggleMode}  />
    
    <Alert alert =  {alert} />
    <div className="container my-5">
     <Routes>
     <Route path="/" element={ <Textfile showAlert = {showAlert} heading = "Enter the text for Analysis" mode = {Mode} />}></Route>
         <Route path="/about" element={<About mode={Mode}/>}></Route>
         <Route path="/textfile" element={<Textfile showAlert = {showAlert} heading = "Enter the text for Analysis" mode = {Mode}/>}></Route>
     </Routes>
    {/* <Textfile showAlert = {showAlert} heading = "Enter the text for Analysis" mode = {Mode} />
        <About  /> */}
    </div>
    </BrowserRouter>
    </>
    )
}
export default App;