import { useState } from "react"
import "../style/addAssignment.css"
import { cards } from "../Data/cardData"


function AddAssigment(props : React.HTMLAttributes<HTMLDivElement>){

    const [assignment,setAssignment] = useState({
    status:"notice",
    subject:"",
    assignment:"",
    deadline:"",
    })

    function handleSubject(event : React.ChangeEvent<HTMLInputElement>){
        setAssignment({...assignment,subject: event.target.value.toUpperCase()})
    }

    function handleAssigment(event : React.ChangeEvent<HTMLInputElement>){
        setAssignment({...assignment,assignment: event.target.value});
    }

    function handleDeadline(event : React.ChangeEvent<HTMLInputElement>){
        const date : Date = new Date(event.target.value);
        const formattedDate = date.toLocaleString("en-US", {
            year: "numeric",
            month:"long",
            day: "numeric"
        })
        setAssignment({...assignment,deadline: formattedDate})
    }

    function handleClick(){
        if (assignment.assignment.trim() && assignment.deadline.trim() && assignment.subject.trim()){
            cards.push(assignment);
        }
        else{
            alert("Make sure all fields is not empty!")
        }
    }

    return(
        <div id="body" style={props.style}>
            <div id="tag">
            <h3 style={{textAlign:"center"}} id="addTitle">+ Add Assignment</h3>
            <label htmlFor="subject" className="label">
                <span className="sp">Subject:</span> 
                <input type="text" name="subject" className="fields" onChange={handleSubject}/>
            </label>
            <label htmlFor="assignment" className="label">
                <span className="sp">Assignment:</span> 
                <input type="text" name="assignment" className="fields" onChange={handleAssigment}/>
            </label>
            <label htmlFor="deadline" className="label">
                <span className="sp">Deadline: </span>
                <input type="date" name="deadline" className="fields" onChange={handleDeadline}/>
            </label>
            <button id="submit" onClick={handleClick}>Confirm!</button>
            </div>

        </div>
    )
}

export default AddAssigment;