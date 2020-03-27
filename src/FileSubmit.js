import React, { useState, useEffect } from "react";

import FileDisplay from './FileDisplay';
import Requests from './Requests';



function FileSubmit() {


  const [state, setState] = useState(null);
  const [asText, setAsText] = useState(false);

  useEffect(()=>{
    const formData = new FormData();
    console.log(state)
    formData.append('file', state);
    Requests.uploadSVG(formData)
        .then(res => {
                console.log(res.data);
                alert("File uploaded successfully.")
        })
  })

  function onFileChangeHandler(e) {
    e.preventDefault();
    console.log(state)
    setState(e.target.files[0]);

};

  return (
    <div className="App">
      <form>
        <input
          id="file"
          type="file"
          onChange={onFileChangeHandler}
          multiple
        />
        <label> Upload your file   </label>
        <br />
        <button type="button" onClick={()=>setAsText(!asText)}>img/text</button>
      </form>
      
      <FileDisplay file={state} asText= {asText} />
    </div>
  );
}

export default FileSubmit;