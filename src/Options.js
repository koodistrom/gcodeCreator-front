import React from "react";
function Options(props) {
  return (
    <div className="Options">
      <h2>Options</h2>
      <form>
        <label>cut/draw depth (z): </label>
        <input type="text" />
        <label>mm</label>
        <br />
        <label>rapid move depth (z): </label>
        <input type="text" />
        <label>mm</label>
        <br />
      </form>
    </div>
  );
}
export default Options;
