import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log('Uppercase was clicked.');
        let Upper = text.toUpperCase();
        setText(Upper);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLowClick = ()=>{
        // console.log('Lowercase was clicked.');
        let low = text.toLowerCase();
        setText(low);
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleClearClick = ()=>{
        // console.log('');
        let clear = ''
        setText(clear);
        props.showAlert("Text Has been Cleared!","success");
    }
    const handleExtraSpace = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Space!","success");
    }
    const handleOnChange = (event)=>{
        // console.log('Onchange');
        setText(event.target.value);
    }


    const handleCopy = () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard.","success")
    }
    const [text, setText] = useState ('');
  return (
    <>
    <div className={`{container my-2 text-${props.mode==='dark'?'light':'dark'}`} >
        <div className="mb-3">
            <h2>{props.heading}</h2>
            <textarea className={`form-control text-${props.mode==='dark'?'light':'dark'}`} value={text} placeholder="Enter Text Here....." style={{backgroundColor:props.mode==='dark'?'#888':'white'}} onChange={handleOnChange} id="myBox" rows="9"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-warning mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-info mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-dark mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>


    </div>

    <div className={`container my-4 text-${props.mode==='dark'?'light':'dark'}`}>
        <h1>Your Text Summary</h1>
        <h5>{text.split(" ").length} words and {text.length} characters</h5>
        <h6>{0.008 * text.split(" ").length} Minutes to read.</h6>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter your text in above TextBox to preview it here."}</p>
    </div>
    </>

  )
}
