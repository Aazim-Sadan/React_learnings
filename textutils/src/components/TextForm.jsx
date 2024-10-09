import React, {useState} from 'react'


function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
        
    }



    const [text, setText] = useState('Enter text here')
    
    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>

        </div>
    )
}

export default TextForm