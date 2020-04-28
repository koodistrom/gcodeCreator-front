import React from "react";
function TextImgBtn(props){
    return(
        <button type="button" onClick={() => props.setAsText(!props.asText)}>
          {props.asText? "SHOW VECTORS":"SHOW XML CODE"}
        </button>
    );
}
export default TextImgBtn;