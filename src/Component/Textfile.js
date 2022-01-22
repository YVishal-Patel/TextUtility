import { useState } from "react";

function Textfile(props){
    const [text, settext] = useState("Enter the text here")

   const  handleUppercase = (event)=>{
     console.log("Button Clicked to Uppercase")
     let newText = text.toUpperCase()
     settext(newText)
     props.showAlert("Converted to Uppercase!","success")
    }

    const handleLowercase = ()=>{
     console.log("Button is clicked for lowercase the text")
     let lowText = text.toLowerCase()
     settext(lowText)
     props.showAlert("Converted to Lowercase!","success")
    }

     const handleClear = ()=>{
     console.log("Button is clicked for clear the text from the textarea")
     settext("")
     props.showAlert("Cleared the string!","success")
    } 

    const handleOnChange = (event)=>{
        settext(event.target.value)
        console.log("The Onchange function is running")
       }

    return( <>
 
<div className="mb-3" style={ {color: props.mode === "dark"? "white":"black" }} >
<h1>{props.heading} </h1>
  <textarea className="form-control" style={ {backgroundColor:props.mode === "light"? "white":"#6c757d",color: props.mode === "light"? "black":"white" }}   value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
  <button  disabled = {text.length === 0} onClick={handleUppercase}   className="btn btn-primary my-2">Convert to Uppercase</button>
  <button disabled={text.length === 0} onClick={handleLowercase} className="btn btn-primary mx-2 my-2">Convert to Lowercase</button>
  <button disabled ={text.length === 0} onClick={handleClear} className="btn btn-primary mx-2 my-2">Clear</button>
</div>
<div className="container" style={ {color:props.mode === "dark"? "white":"black" }}>
    <h3>Text Summary</h3>
    <p>  { text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and character { text.length}</p>
    <p> {0.008* text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes to read</p>
    <h4>Preview</h4>
    <p>{text.length>0? text:"Enter something to preview it here"}</p>
</div>
    </>)
}



export default Textfile;