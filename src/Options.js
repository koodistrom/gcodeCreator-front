import React, {useEffect}  from "react";
function Options(props) {

    const options = props.options;

    
    const handleChange = e => {
       
        const {name , value} = e.target
        props.setOptions( prevState => ({
            ...prevState,
            [name] : value
    }))
   
    }
    useEffect(() => { console.log(options)});
  return (
    <div className="Options">
      <h2>Options</h2>
      <form onChange={handleChange}>
        <h4 >Units</h4>
        <input type="radio" id="mm" name="units" value="mm" checked={options.units==="mm"}/>
        <label for="mm">mm</label>
        <input type="radio" id="inch" name="units" value="inch"  checked={options.units==="inch"}/>
        <label for="inch">inch</label><br/>

        <h4 >Z</h4>
        <label>cut/draw depth (z): </label>
        <input type="number" name="workDepth" value={options.workDepth}/>
        <label>mm</label>
        <br />
        <label>rapid move depth (z): </label>
        <input type="number" name="moveDepth" value={options.moveDepth}/>
        <label>mm</label>
        <br />
        <h4 >Speed</h4>
        <input type="number" name="feed" value={options.speed}/>
        <label>mm/min</label>
        <br />
      </form>
    </div>
  );
}
export default Options;
