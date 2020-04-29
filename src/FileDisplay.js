import React, { useState } from "react";
import instructions from "./instructions.svg";
import './FileDisplay.css';
import TextImgBtn from "./TextImgBtn";

function FileDisplay(props) {
  const [state, setState] = useState("");
  const [asText, setAsText] = useState(props.textOnly);
  let reader = new FileReader();
  let displayed;

  
  console.log(props);
  if (props.file == null) {
    console.log("no file selected");
    displayed = <img src={instructions} alt="UPLOAD FILE" />;
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
        {props.textOnly? null : <TextImgBtn setAsText={setAsText} asText={asText}></TextImgBtn>}
        {displayed}
      </div>
    );
  
}

export default FileDisplay;
