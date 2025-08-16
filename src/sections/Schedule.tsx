import "../style/ScheduleTabComponents/Schedule.css"
import ScheduleCard from "../components/ScheduleTabComponents/scheduleCard";

function Schedule(){
    const now = new Date();
        const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
        const today = days[now.getDay()];
    return(
        <>
           <div id="ScheduleContainer">
                <h1 id="scheduleHeader">Schedule</h1>
                <div id="daysContainer">
                    <label htmlFor="day1">
                        <input type="radio" name="day" id="day1" defaultChecked/>
                        M
                    </label>
                    <label htmlFor="day2">
                        <input type="radio" name="day" id="day2"/>
                        T
                    </label>
                    <label htmlFor="day3">
                        <input type="radio" name="day" id="day3"/>
                        W
                    </label>
                    <label htmlFor="day4">
                        <input type="radio" name="day" id="day4"/>
                        Th
                    </label>
                    <label htmlFor="day5">
                        <input type="radio" name="day" id="day5"/>
                        F
                    </label>
                    <label htmlFor="day6">
                        <input type="radio" name="day" id="day6"/>
                        S
                    </label>
                    <label htmlFor="day7">
                        <input type="radio" name="day" id="day7"/>
                        S
                    </label>
                </div>

                <div id="schedCardContainer">
                    <ScheduleCard today={today}/>
                </div>
            </div> 
        </>
    )
}

export default Schedule;