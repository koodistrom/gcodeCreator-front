import React from "react";

import "./FileSubmit.css";
/**
 *Returns react component with file submit form.
 *
 * @param {*} props contains: call back method to set the file from form as a state to App component, options for generating the file,
 * and method for generting the gcode file
 * @returns
 */
function FileSubmit(props) {
  /**
   *Called when user selects file. sets the selected svg to App components state and calls the function to generate gcode.
   *
   * @param {*} e event
   */
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
