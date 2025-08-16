// App.tsx
import Navigator from "./components/navBar";
import FAB from "./components/TodoTabComponents/FAB";
import Body from "./components/TodoTabComponents/Body";
import Schedule from "./sections/Schedule";
// import Practice from "./components/practice/prac";
import { useState } from "react";

function App() {
  const [activeNav, setActiveNav] = useState("sched");

  return (
    <>
      {activeNav === "todo" && <Body />}
      {activeNav === "sched" && <Schedule/>}
      {activeNav === "acc" && <div>Account Component Here</div>}
      
      <Navigator className="nav" onNavChange={setActiveNav} />
      <FAB id="FAB" />
    </>
  );
}

export default App;
