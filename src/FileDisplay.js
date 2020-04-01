import React, { useState } from "react";
import logo from "./logo.svg";

function FileDisplay(props) {
  const [state, setState] = useState("");
  const [asText, setAsText] = useState(false);
  let reader = new FileReader();
  console.log(props);
  if (props.file == null) {
    console.log("tällä ollaan null");
    return <img src={logo} alt="SVG HERE" />;
  } else if (!asText) {
    console.log("tällä ollaan kuva");

    return (
      <div>
        <button type="button" onClick={() => setAsText(!asText)}>
          img/text
        </button>
        {<img src={URL.createObjectURL(props.file)} alt="SVG HERE" />}
      </div>
    );
  } else {
    console.log("tällä ollaan teksti");
    reader.onload = function(e) {
      setState(reader.result);
    };
    reader.readAsText(props.file);

    return (
      <div>
        <button type="button" onClick={() => setAsText(!asText)}>
          img/text
        </button>
        <pre>
          <code>{state}</code>
        </pre>
      </div>
    );
  }
}

export default FileDisplay;
