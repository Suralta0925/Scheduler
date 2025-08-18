import CardSection from "../../sections/cardSection";
import Header from "./Header";
import "../../style/TodoTabStyles/Body.css";
import { useState } from "react";

function Body() {
  // store which span is active
  const [activeTab, setActiveTab] = useState<string>("Notice");

  // click handler
  const handleClick = (tabName: string) => {
    setActiveTab(tabName); // change active tab
  };

  // helper to check if tab is active
  const getTabStyle = (tabName: string) => {

    return tabName === activeTab
      ? {
            position:"relative",
            bottom: "clamp(5%,1vh,20%)",
            height: "clamp(25px,3vw,35px)",
            fontSize: "clamp(12px, 1.5vh,18px)",
            border: "3px solid red",
        }
      : {};
  };

  return (
    <>
      <Header/>
      <div id="BodyContainer"></div>
      <div id="selection">
        <span
          id="Assignments"
          style={getTabStyle("Notice")}
          onClick={() => handleClick("Notice")}
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
        <CardSection status={activeTab}/>
      </div>
    </>
  );
}

export default Body;
