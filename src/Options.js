import React, {useState, useEffect}  from "react";

function Options(props) {

    const options = props.options;
    
    const [changesMade, setChangesMade] = useState(false);
    const handleChange = e => {
       setChangesMade(true);
        const {name , value} = e.target
        props.setOptions( prevState => ({
            ...prevState,
            [name] : value
    }))
   
    }
    useEffect(() => { console.log(options)});
  return (
    <div className="Options" id="pop">
      <h2>Options</h2>
      <form onChange={handleChange} className="options-grid-container">
        <label >Units</label>
        <div id="right">       
        <input type="radio" id="mm" name="units" value="mm" checked={options.units==="mm"}/>
        <label for="mm">mm</label>
        <input type="radio" id="inch" name="units" value="inch"  checked={options.units==="inch"}/>
        <label for="inch">inch</label>
        </div>

        <label>Cut/draw depth (z): </label>
        <div id="right"> 
        <input type="number" name="workDepth" size="10" value={options.workDepth}/>
        <label>{options.units}</label>
        </div>

        <label>Rapid move depth (z): </label>
        <div id="right"> 
        <input type="number" name="moveDepth" size="10" value={options.moveDepth}/>
        <label>{options.units}</label>
        </div>
 
        <label>Speed</label>
        <div id="right"> 
        <input type="number" name="feed" size="10" value={options.speed}/>
        <label>{options.units}/min</label>
        </div>
        <br />
      </form>
      <div>{changesMade?
              <button onClick={()=>{
                setChangesMade(false);
                props.update()}}>refresh</button>
                : null
      }
      </div>
    </div>
  );
}
export default Options;
