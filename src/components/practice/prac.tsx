import { useState } from "react";
import "./prac.css";


function Practice(){

    const [color, setColor] = useState("#FFFF00");

    function colorOnChangeHandler(event : React.ChangeEvent<HTMLInputElement>){
        setColor(event.target.value)
    }

    return(
        <div style={{padding: "100px"}}>
            <div id="colorDisplay" style={{backgroundColor: color}}>
                <p>Selected Color:</p>
                <p id="selectedColor">{color}</p>
            </div>

            <div id="colorContainer">
                <label>
                    Select a Color: <br />
                </label>
                <input type="color" onChange={colorOnChangeHandler}  id="color" value={color}/>
            </div>
        </div>
    );
}

export default Practice;