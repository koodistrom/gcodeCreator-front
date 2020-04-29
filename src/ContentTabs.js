import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./react-tabs.css";
import React from "react";
import FileDisplay from "./FileDisplay";
/**
 *Component holds the tabs that display svg and gcode file content
 *
 * @param {*} props the svg and gcode file to display are passed in props
 * @returns React Component 
 */
function ContentTabs(props) {
    return(
        <div className="ContentTabs">
        <Tabs id="Tabs">
          <TabList id="TabList">
            <Tab id="Tab"><h4>SVG</h4></Tab>
            <Tab id="Tab"><h4>GCODE</h4></Tab>
          </TabList>

          <TabPanel>
            <FileDisplay file={props.svgFile}  textOnly={false} />
          </TabPanel>
          <TabPanel>
            <FileDisplay file={props.gCodeFile} textOnly={true} />
          </TabPanel>
        </Tabs>
      </div>
    )
}
export default ContentTabs;