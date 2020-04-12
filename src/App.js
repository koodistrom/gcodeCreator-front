import React, {useState} from 'react';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import './App.css';
import FileSubmit from './FileSubmit';
import Grid from '@material-ui/core/Grid';
import Options from './Options';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FileDisplay from './FileDisplay';


function App(){
  const [svgFile, setSVG] = useState(null);
  const [gCodeFile, setGcode] = useState(null);


    return (
      
<div className="Wrapper">
  <Grid container spacing={3}>
    <Grid item xs={12}>
    <FileSubmit setSVG={setSVG} setGcode = {setGcode}></FileSubmit>
    </Grid>
    <Grid item xs={3}>
      <Options></Options>
    </Grid>
    <Grid item xs={9}>
      <div>
      <Tabs id="Tabs">
          <TabList id="TabList">
            <Tab>SVG</Tab>
            <Tab>GCODE</Tab>
          </TabList>

          <TabPanel id="Display">
            <h2>Any content 1</h2>
            <FileDisplay file={svgFile} />
          </TabPanel>
          <TabPanel id="Display">
            <h2>Any content 2</h2>
            <FileDisplay file={gCodeFile} />
          </TabPanel>
        </Tabs>
        </div>
    </Grid>

  </Grid>
</div>

    );
  }


export default App;
