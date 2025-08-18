// navBar.tsx
import "../style/navBar.css";
import assignment from "../assets/navIcons/assignment.svg";
import schedule from "../assets/navIcons/schedule.svg";
import user from "../assets/navIcons/user.svg";

import type { ChangeEvent } from "react";

interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {
  onNavChange?: (nav: string) => void;
}

function NavBar(props: NavBarProps) {
  const onActive = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked && props.onNavChange) {
      props.onNavChange(event.target.value);
    }
  };

  return (
    <div id="container" className={props.className}>
      <label htmlFor="todo" className="toolTip">
        <input
          type="radio"
          className="icons"
          id="todo"
          name="icons"
          onChange={onActive}
          value="todo"
        />
        <img src={assignment} alt="assignment" className="ico" />
        <span>TODO</span>
      </label>

      <label htmlFor="sched" className="toolTip">
        <input
          type="radio"
          className="icons"
          id="sched"
          name="icons"
          onChange={onActive}
          value="sched"
          defaultChecked
        />
        <img src={schedule} alt="schedule" className="ico" />
        <span>SCHEDULE</span>
      </label>

      <label htmlFor="acc" className="toolTip">
        <input
          type="radio"
          className="icons"
          id="acc"
          name="icons"
          onChange={onActive}
          value="acc"
        />
        <img src={user} alt="user" className="ico" />
        <span>ACCOUNT</span>
      </label>
    </div>
  );
}

export default NavBar;
