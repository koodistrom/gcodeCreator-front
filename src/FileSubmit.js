import React from "react";

import "./FileSubmit.css";

function FileSubmit(props) {
  function onFileChangeHandler(e) {
    e.preventDefault();

    props.setSVG(e.target.files[0]);

    props.updateGcodeFile(props.options, e.target.files[0]);
  }

  return (
    <div>
      <form>
        <label>Upload svg: </label>
        <input id="file" type="file" onChange={onFileChangeHandler} multiple />

        <a href={props.gCodeLink} download>
        {props.gCodeLink === ""? null:"Download gcode"}
        </a>
        <br />
      </form>

    </div>
  );
}

export default FileSubmit;
