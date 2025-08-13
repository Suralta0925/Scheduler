import CardSection from "../sections/cardSection";
import "../style/Body.css";
import { useState } from "react";

function Body() {
  // store which span is active
  const [activeTab, setActiveTab] = useState<string>("Assignments");

  // click handler
  const handleClick = (tabName: string) => {
    setActiveTab(tabName); // change active tab
  };

  // helper to check if tab is active
  const getTabStyle = (tabName: string) => {
    return tabName === activeTab
      ? {
            position:"relative",
            bottom: "clamp(5%,1vw,50%)",
            height: "35px",
        }
      : {};
  };

  return (
    <>
      <div id="BodyContainer"></div>
      <div id="selection">
        <span
          id="Assignments"
          style={getTabStyle("Assignments")}
          onClick={() => handleClick("Assignments")}
        >
          ASSIGNMENTS
        </span>
        <span
          id="ongoing"
          style={getTabStyle("Ongoing")}
          onClick={() => handleClick("Ongoing")}
        >
          ONGOING
        </span>
        <span
          id="finished"
          style={getTabStyle("Finished")}
          onClick={() => handleClick("Finished")}
        >
          FINISHED
        </span>
      </div>
      <div id="cardContainer">
        <CardSection />
      </div>
    </>
  );
}

export default Body;
