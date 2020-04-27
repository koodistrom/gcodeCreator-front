import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./react-tabs.css";
import React from "react";
import FileDisplay from "./FileDisplay";
function ContentTabs(props) {
    return(
        <div className="ContentTabs">
        <Tabs id="Tabs">
          <TabList id="TabList">
            <Tab id="Tab"><h4>SVG</h4></Tab>
            <Tab id="Tab"><h4>GCODE</h4></Tab>
          </TabList>

          <TabPanel>
            <FileDisplay file={props.svgFile} />
          </TabPanel>
          <TabPanel>
            <FileDisplay file={props.gCodeFile} />
          </TabPanel>
        </Tabs>
      </div>
    )
}
export default ContentTabs;