import React from "react";
/**
 *Button for toggling between showing svg vectors and source code.
 *
 * @param {*} props contains boolean if content should be shown as text and a call back method to change the mentioned boolean.
 * @returns React Component
 */
function TextImgBtn(props){
    return(
        <button type="button" onClick={() => props.setAsText(!props.asText)}>
          {props.asText? "SHOW VECTORS":"SHOW XML CODE"}
        </button>
    );
}
export default TextImgBtn;