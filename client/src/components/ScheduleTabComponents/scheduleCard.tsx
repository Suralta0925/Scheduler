import {schedules} from "../../Data/scheduleData"

type CardProps = {
    today: string;
}

function ScheduleCard({today} : CardProps){
    return(
        schedules.filter((sched) => 
            sched.schedule.some((s) => s.day.toLowerCase() === today))
            .map((item,index)=> (
                <div id="card" key={index}>
                    <p id="time">{item.schedule[0].start} - {item.schedule[0].end}</p>
                    <p id="subject">{item.subject}</p>
                    <div id="RoomAndProf">
                        <p id="room">{item.room}</p>
                        <p id="prof">{item.instructor}</p>
                    </div>
                </div>
            ))
    )
}

export default ScheduleCard;