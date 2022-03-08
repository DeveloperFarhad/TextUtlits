import React, {useState} from 'react';






const TextForm = (props) => {
    

    const handelUpClick =() => {

        // console.log("UpperCase : " + text)
        let NewText = text.toUpperCase();

        setText(NewText)
        props.showAlert('Converted to Upper Case', 'success')
    }
    const handelLoClick =() => {

        // console.log("UpperCase : " + text)
        let NewText = text.toLowerCase();

        setText(NewText)
        props.showAlert('Converted to lower Case', 'success')
    }
    const handelCleClick =() => {

        // console.log("UpperCase : " + text)
        let NewText = '';

        setText(NewText)
        props.showAlert('Text is clear', 'success')
    }
    const handelOnChange =(event) => {
        // console.log("OnCkange")
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter Text Hear')
    // text = "New Text" // Wrong Way To Change The State

    // setText("NewText")// Correct Way To Change The State
    return (
        <>
        <div className="container" style={{color : props.mode === 'dark'?'white':'black'}}>
            <h2 className='mb-3' >{props.heading}</h2>
            <div className="mb-3">

                <textarea className="form-control" value ={text} onChange={handelOnChange}
                style={{backgroundColor : props.mode === 'dark'?'#194776':'white', color : props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handelUpClick}>Convert To Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handelLoClick}>Convert To Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handelCleClick}>Convert To Clear</button>
        </div>

        <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words, {text.length} charactars</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Munites Read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Nothing To Preview!"}</p>

        </div>

        </>
    );
};

export default TextForm;

