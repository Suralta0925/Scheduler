import { useState } from "react";
import "../../style/TodoTabStyles/FAB.css"

import AddAssigment from "./addAssignment";

function FAB(props : React.HTMLAttributes<HTMLButtonElement>){

    const [rotated,setRotated] = useState(true);
    return(
        <>
            <button id={props.id} className="FABbtn" onClick={() => setRotated(!rotated)}
            style={{
                transition: "0.1s transform ease-in-out",
                transform: rotated ? "rotate(0deg)" : "rotate(45deg)",
                backgroundColor: rotated ? "aqua" : "red",
                color: rotated ? "rgb(72, 72, 72)": "white",
                
            }}>+</button>
            <AddAssigment style={{
                display : !rotated ? "block" : "none"}}/>
        </>
    );
}

export default FAB;