import React, {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FileDisplay from './FileDisplay';
import Requests from './Requests';



function FileSubmit() {


  const [svgFile, setSVG] = useState(null);
  const [gCodeFile, setGcode] = useState(null);

  function onFileChangeHandler(e) {
    e.preventDefault();
    const formData = new FormData();
    console.log(e.target.files[0])
    setSVG(e.target.files[0]);
    console.log(svgFile)
    formData.append('file', e.target.files[0]);
    Requests.uploadSVG(formData)
        .then(res => {
                console.log("received data:")
                console.log(res);
                let fileName = res.headers["content-disposition"].split("filename=")[1];
                
                let file = new File([res.data], fileName, {type: "text/plain"});
                setGcode(file);
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
      <a href={gCodeFile==null ? '' : URL.createObjectURL(gCodeFile)} download>Click to download</a>
      <Tabs>
    <TabList>
      <Tab>SVG</Tab>
      <Tab>GCODE</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
      <FileDisplay file={svgFile} />
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
      <FileDisplay file={gCodeFile} />
    </TabPanel>
  </Tabs>
      
    </div>
  );
}

export default FileSubmit;