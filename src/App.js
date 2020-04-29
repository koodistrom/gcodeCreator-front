import React, { useState } from "react";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import "./App.css";
import FileSubmit from "./FileSubmit";
import Grid from "@material-ui/core/Grid";
import Options from "./Options";
import "./react-tabs.css";
import Requests from "./Requests";
import ContentTabs from "./ContentTabs";


function App() {
  const [svgFile, setSVG] = useState(null);
  const [gCodeFile, setGcode] = useState(null);
  const [gCodeLink, setGcodeLink] = useState("");
  const update = () => {
    updateGcodeFile(options, svgFile);
  };
  const [options, setOptions] = useState({
    units: "mm",
    moveDepth: 1,
    workDepth: 0,
    feed: 100
  });

  function updateGcodeFile(options, file) {
    const formData = new FormData();
    formData.append("file", file);

    const optionsJson = JSON.stringify(options);
    const optionsBlob = new Blob([optionsJson], {
      type: "application/json"
    });
    formData.append("options", optionsBlob);
    Requests.uploadSVG(formData).then(res => {
      let fileName = res.headers["content-disposition"].split("filename=")[1];
      let GcodeFile = new File([res.data], fileName, { type: "text/plain" });
      setGcodeLink(URL.createObjectURL(GcodeFile));
      setGcode(GcodeFile);
      alert("File converted successfully.");
    });
  }

  return (
    <div className="Wrapper">

          <FileSubmit
            setSVG={setSVG}
            updateGcodeFile={updateGcodeFile}
            gCodeLink={gCodeLink}
            options={options}
          ></FileSubmit>
            <ContentTabs svgFile={svgFile} gCodeFile={gCodeFile}></ContentTabs>
          <Options
            options={options}
            setOptions={setOptions}
            svgFile={svgFile}
            update={update}
          ></Options>



    </div>
  );
}

export default App;
