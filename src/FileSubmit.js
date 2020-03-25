import React, { useState, useRef, useEffect } from "react";
import logo from './logo.svg';
import FileDisplay from './FileDisplay';



function FileSubmit() {
  const fileInput = useRef(null);

  const [state, setState] = useState(null);
  const [asText, setAsText] = useState(false);
  let data;
  useEffect(e => {
    window.addEventListener("keyup", clickFileInput);
    return () => window.removeEventListener("keyup", clickFileInput);
  });

  function clickFileInput(e) {
    if (fileInput.current.nextSibling.contains(document.activeElement)) {
      // Bind space to trigger clicking of the button when focused
      if (e.keyCode === 32) {
        fileInput.current.click();
      }
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    data = state;
    console.log(data);
  }

  function fileNames() {
    const { current } = fileInput;

    if (current && current.files.length > 0) {
      let messages = [];
      for (let file of current.files) {
        messages = messages.concat(<p key={file.name}>{file.name}</p>);
      }
      return messages;
    }
    return null;
  }

  return (
    <div className="App">
      <form onSubmit={()=>setState(fileInput.current.files[0])}>
        <input
          id="file"
          type="file"
          ref={fileInput}
          // The onChange should trigger updates whenever
          // the value changes?
          // Try to select a file, then try selecting another one.
          onChange={()=>setState(fileInput.current.files[0])}
          multiple
        />
        <label htmlFor="file">
          <span tabIndex="0" role="button" aria-controls="filename">
            Upload file(s):{" "}
          </span>
        </label>
        {fileNames()}
        <br />
        <button type="button" onClick={()=>setAsText(!asText)}>img/text</button>
      </form>
      <button type="submit">Submit</button>
      <FileDisplay file={state} asText= {asText} />
    </div>
  );
}

export default FileSubmit;