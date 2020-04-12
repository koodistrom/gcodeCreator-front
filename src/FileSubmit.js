import React, {useState} from "react";
import Requests from './Requests';
import './FileSubmit.css';



function FileSubmit(props) {

  const [gCodeLink, setGcodeLink] = useState('');

  function onFileChangeHandler(e) {
    e.preventDefault();
    const formData = new FormData();

    props.setSVG(e.target.files[0]);
    
    formData.append('file', e.target.files[0]);
    Requests.uploadSVG(formData)
        .then(res => {

                let fileName = res.headers["content-disposition"].split("filename=")[1];
                
                let file = new File([res.data], fileName, {type: "text/plain"});
                setGcodeLink(URL.createObjectURL(file));


                props.setGcode(file)
                alert("File uploaded successfully.")
        })

};

  return (
    <div >
      <form>
      <label>Upload svg: </label>
        <input
          id="file"
          type="file"
          onChange={onFileChangeHandler}
          multiple
        />
        
        <a  href={gCodeLink} download>Download gcode</a>
        <br />
      </form>
      
    </div>
  );
}

export default FileSubmit;