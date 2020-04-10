import React, { useState } from "react";
import logo from "./logo.svg";

function FileDisplay(props) {
  const [state, setState] = useState("");
  const [asText, setAsText] = useState(false);
  let reader = new FileReader();
  let displayed;
  
  console.log(props);
  if (props.file == null) {
    console.log("tällä ollaan null");
    displayed = <img src={logo} alt="SVG HERE" />;
  } else if (!asText) {
    console.log("tällä ollaan kuva");
    displayed = <img src={URL.createObjectURL(props.file)} alt="SVG HERE" />;

  } else {
    console.log("tällä ollaan teksti");
    reader.onload = function(e) {
      setState(reader.result);
    };
    reader.readAsText(props.file);
    displayed = <pre> <code>{state} </code>  </pre>;

  }
    return (
      <div>
        <button type="button" onClick={() => setAsText(!asText)}>
          img/text
        </button>
        {displayed}
      </div>
    );
  
}

export default FileDisplay;
