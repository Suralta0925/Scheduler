import "../style/addAssignment.css"

function AddAssigment(props : React.HTMLAttributes<HTMLDivElement>){
    return(
        <div id="body" style={props.style}>
            <div id="tag">
            <h3 style={{textAlign:"center"}} id="addTitle">+ Add Assignment</h3>
            <label htmlFor="subject" className="label">
                <span className="sp">Subject:</span> 
                <input type="text" name="subject" className="fields" />
            </label>
            <label htmlFor="assignment" className="label">
                <span className="sp">Assignment:</span> 
                <input type="text" name="assignment" className="fields"/>
            </label>
            <label htmlFor="deadline" className="label">
                <span className="sp">Deadline: </span>
                <input type="date" name="deadline" className="fields" />
            </label>
            <button id="submit">Done!</button>
            </div>

        </div>
    )
}

export default AddAssigment;