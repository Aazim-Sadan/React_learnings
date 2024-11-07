import React, { useState } from 'react'


function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!", "Success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!", "Success")
    }

    const handleClearText = () => {
        let newText = ''
        setText(newText)
        props.showAlert("Text cleared!", "Success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopy = () => {
        const text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999)
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "Success")
    }

    const handleExtraSpaces = () => {
        const newText = text.split(/ [ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "Success")
    }

    const [text, setText] = useState('Enter text here')

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>
                    {text.trim() === "" ? "0 words and 0 characters" : `${text.trim().split(/\s+/).length} words and ${text.length} characters`}
                </p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Write something to preview it here..."}</p>
            </div>
        </>

    )
}

export default TextForm