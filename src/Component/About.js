import React, {useState} from 'react'

export default function About(props) {
  // const [myStyle, setMyStyle] = useState(
  //   {
  //     color : "white",
  //     backgroundColor:"black",
  //     outline: "4px"
  //   }
  // )

  // const [buttonTxt, setButtonTxt] = useState("Enable Light Mode")

  // const toggleMode = ()=>{
  //  console.log("Button is Clicked")
  //  if(myStyle.color == "white"){
  //    setMyStyle({
  //       color : "black",
  //       backgroundColor:"white",
  //       outline: "4px",

  //    })
  //    setButtonTxt("Enable Dark Mode")
  //  }else{
  //   setMyStyle({
  //     color : "white",
  //     backgroundColor:"black",
  //                  })
  //  setButtonTxt("Enable Light Mode")
  //  }

  let myStyle = 
  {
    backgroundColor : props.mode === "dark"? "black":"white",
    color: props.mode === "dark"? "white":"black"
  }
  return (
    <div>
      <h1 className='my-3 mx-2' style={{color: props.mode === "dark"?"#6e5893":"black",backgroundColor:props.mode === "dark"?"#343a40":"white"}}>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingOne"  style={myStyle}>
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  style={myStyle}>
        <strong> Analysis Your Text </strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"  style={myStyle}>
      <div className="accordion-body"  >
        Textutils gives you the way to analysis the text easily and efficiently. Be it word count character count or previev the text.
      </div>
    </div>
  </div>
  <div className="accordion-item"  >
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"  style={myStyle} aria-controls="collapseTwo">
      <strong> Free to use </strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"  style={myStyle}>
      <div className="accordion-body"  >
        TextUtils is the free character count tool instant character count & word count statistics for a given text.TextUtils report the number of word and character count. 
      </div>
    </div>
  </div>
  <div className="accordion-item"  >
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style={myStyle}>
        <strong> Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"  style={myStyle}>
      <div className="accordion-body"  style={myStyle}>
        The word count software work with any web  browser  such as Chrome, Firefox, Opera, Brave, Safari, Internet Explorer. It suits to count the character of facebook,blogs,books,excel document,pdf document etc.
      </div>
    </div>
  </div>
  {/* <button onClick={toggleMode} className="btn btn-primary my-3 mx-2">{buttonTxt}</button> */}
</div>
    </div>
  )
}
