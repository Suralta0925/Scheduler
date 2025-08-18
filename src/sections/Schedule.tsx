import "../style/ScheduleTabComponents/Schedule.css"
import ScheduleCard from "../components/ScheduleTabComponents/scheduleCard";
import { useState } from "react";

function Schedule(){
    const now = new Date();
    const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    const initialDays = ["S","M","T","W","Th","F","S"];
    const [today,setToday] = useState(days[now.getDay()]);
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        const offset = Number(e.target.value);
        const newDay = days[(now.getDay() + offset) % 7];
        setToday(newDay);

    }
    return(
        <>
           <div id="ScheduleContainer">
                <h1 id="scheduleHeader">Schedule</h1>
                <div id="daysContainer">
                    <label htmlFor="day1">
                        <input type="radio" name="day" id="day1" onChange={handleChange} value={0} defaultChecked/>
                        {initialDays[now.getDay()]}
                        
                    </label>
                    <label htmlFor="day2">
                        <input type="radio" name="day" id="day2" onChange={handleChange} value={1}/>
                        {initialDays[(now.getDay()+1)%7]}
                    </label>
                    <label htmlFor="day3">
                        <input type="radio" name="day" id="day3" onChange={handleChange} value={2}/>
                        {initialDays[(now.getDay()+2)%7]}
                    </label>
                    <label htmlFor="day4">
                        <input type="radio" name="day" id="day4" onChange={handleChange} value={3}/>
                        {initialDays[(now.getDay()+3)%7]}
                    </label>
                    <label htmlFor="day5">
                        <input type="radio" name="day" id="day5" onChange={handleChange} value={4}/>
                        {initialDays[(now.getDay()+4)%7]}
                    </label>
                    <label htmlFor="day6">
                        <input type="radio" name="day" id="day6" onChange={handleChange} value={5}/>
                        {initialDays[(now.getDay()+5)%7]}
                    </label>
                    <label htmlFor="day7">
                        <input type="radio" name="day" id="day7" onChange={handleChange} value={6}/>
                        {initialDays[(now.getDay()+6)%7]}
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