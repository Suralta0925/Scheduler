import finished from "../assets/statusIcon/finished.svg"
import ongoing from "../assets/statusIcon/ongoing.svg"
import notice from "../assets/statusIcon/notImportant.svg"
import important from "../assets/statusIcon/important.svg"
import urgent from "../assets/statusIcon/urgent.svg"

// import PropTypes from 'prop-types';

import "../style/card.css"

type CardItem = {
    status?: string;
    subject?: string;
    assignment?: string;
    deadline?: string;

}

type CardProps = {
    items?: CardItem[];
}


function Card({items = []}: CardProps){

    const getStatusIcon = (status?: string) => {
        switch(status){
            case "notice":
                return notice;
            case "ongoing":
                return ongoing;
            case "finished":
                return finished;
            case "important":
                return important;
            case "urgent":
                return urgent
            default:
                return "Empty";
        }
    }

    return(
        <>
        {items.map((item,index) => (
        <div className="card" key={index}>
            <div id="statusContainer">
                <img src={getStatusIcon(item.status)} id="progress" className="stat"/>
                <p id="status">{item.status?.toUpperCase()}</p>
            </div>

            <div id="contentContainer">
                <h1 id="subject">{item.subject?.toUpperCase()}</h1>
                <h2 id="assignment">{item.assignment?.toUpperCase()}</h2>
                <p id="deadline">Deadline: {item.deadline}</p>
            </div>
        </div>
    ))}
        </>
    );
}

// Card.propTypes = {
//     items: PropTypes.arrayOf(
//         PropTypes.shape({
//             status : PropTypes.string,
//             subject: PropTypes.string,
//             assignment: PropTypes.string,
//             deadline: PropTypes.string,
//         })
//     ),
// }

// Card.defaultProps = {
//     status : "",
//     items : [],
// }

export default Card;