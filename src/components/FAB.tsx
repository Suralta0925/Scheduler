import { useState } from "react";
import "../style/FAB.css"

function FAB(props : React.HTMLAttributes<HTMLButtonElement>){

    const [rotated,setRotated] = useState(true);
    return(

        <button id={props.id} onClick={() => setRotated(!rotated)}
        style={{

            transition: "0.1s transform ease-in-out",
            transform: rotated ? "rotate(0deg)" : "rotate(45deg)",
            
        }}>+</button>
    );
}

export default FAB;