import React, { useState } from "react";
import logo from "./logo.svg";
import './FileDisplay.css';

function FileDisplay(props) {
  const [state, setState] = useState("");
  const [asText, setAsText] = useState(false);
  let reader = new FileReader();
  let displayed;
  
  console.log(props);
  if (props.file == null) {
    console.log("no file selected");
    displayed = <img src={logo} alt="SVG HERE" />;
  } else if (!asText) {
    console.log("showing image");
    displayed = <img src={URL.createObjectURL(props.file)} alt="SVG HERE" />;

  } else {
    console.log("showing text");
    reader.onload = function(e) {
      setState(reader.result);
    };
    reader.readAsText(props.file);
    displayed = <pre> <code>{state} </code>  </pre>;

  }
    return (
      <div className="Displayed">
        <button type="button" onClick={() => setAsText(!asText)}>
          {asText? "SHOW VECTORS":"SHOW XML CODE"}
        </button>
        {displayed}
      </div>
    );
  
}

export default FileDisplay;
