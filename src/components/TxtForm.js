import React, {useState} from 'react'




export default function TxtForm(props) {

  const handleUpClick=()=>{    
    let newText=text.toUpperCase();
    setText(newText); 
  }
  const handleDownClick=()=>{    
    
    let newText=text.toLowerCase();
    setText(newText); 
  }
  const handleClearClick=()=>{    
    setText(""); 
  }


  const handleOnChange=(event)=>{ //this func is used to let us type or chnage the content in the text box
    
    setText(event.target.value);//this will help to convert newly usertyped text to uppr&lwr
  }
  const [text, setText] = useState(" "); /*this text will show in the container as default value*/ 
    //text="new text";     //wrong way to change state
    //setText("new text"); //right way to change the state
  return ( 
    <> 
     <div className="container">
      <h1>{props.heading}</h1>
      < div className="mb-3">  
     
     <textarea className="form-control " style={{backgroundColor: props.mode==='black'?'white':'black'}} value={text} onChange={handleOnChange}/*invoking text from useState*/ id="myBox" rows="13"></textarea>
     </div>      
     <button className="primary btn mx-3" onClick={handleUpClick}/*invoke this func on clicking*/ >To upper case</button> 
     <button className="secondary btn mx-2" onClick={handleDownClick}/*invoke this func on clicking*/ >To lower case</button>
     <button className="third btn" onClick={handleClearClick}/*invoke this func on clicking*/ >clear text</button>                                
 </div>

 <div className="container my-4">
  <h1>Description of ur text</h1>  
  <p>{text.split(" ").length} words and no of characters is{text.length}</p>
  <p> {0.08*text.split(" ").length} minutes to finish read</p>

  <h2> Preview</h2>
  <p> {text.length>0?text:"enter in textbox to preview"}</p>
 </div>
 </>
  )
}
