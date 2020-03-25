import React, { useState } from 'react';
import logo from './logo.svg';

function FileDisplay(props){
    const [state, setState] = useState("")
    let reader = new FileReader();
    console.log(props);
    if(props.file == null){
        console.log("tällä ollaan null")
        return <img src={logo} alt="SVG HERE" />
    }else if(!props.asText){
        console.log("tällä ollaan kuva")
        
        return <img src={URL.createObjectURL(props.file)} alt="SVG HERE" />
    }else{
        console.log("tällä ollaan teksti")
        reader.onload = function (e) {
            setState(reader.result);
        }
        reader.readAsText(props.file);
        
        
        return <p>{state}</p>
    }
}

export default FileDisplay;