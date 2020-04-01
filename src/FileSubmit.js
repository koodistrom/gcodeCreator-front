import React, {useState} from "react";

import FileDisplay from './FileDisplay';
import Requests from './Requests';



function FileSubmit() {


  const [state, setState] = useState(null);
  

  function onFileChangeHandler(e) {
    e.preventDefault();
    const formData = new FormData();
    console.log(e.target.files[0])
    console.log(state)
    formData.append('file', e.target.files[0]);
    Requests.uploadSVG(formData)
        .then(res => {
                console.log("received data:")
                console.log(res);
                let fileName = res.headers["content-disposition"].split("filename=")[1];
                //let fileName = "gaymacgayface.svg";
                let file = new File([res.data], fileName, {type: "image/svg+xml"});
                setState(file);
                alert("File uploaded successfully.")
        })

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
      </form>
      
      <FileDisplay file={state} />
    </div>
  );
}

export default FileSubmit;