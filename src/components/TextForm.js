import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("You have clicked upclick");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","Success");
    }
    const handleLoClick = ()=>{
        // console.log("You have clicked upclick");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","Success");
    }
    const clear = ()=>{
        // console.log("You have clicked upclick");
        let newText = "";
        setText(newText);
        props.showAlert("Text has been cleared","Success");
    }

    const handleCopy = ()=>{
        // console.log("You have clicked upclick");
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied","Success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces are removed","Success");
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
    const [text,setText] = useState('Enter text here')
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
            <div class="mb-3">
                <textarea class="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={clear} >Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove extra spaces</button>
        </div>
        <div className="container" my-3 style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
        </>
    )
}
