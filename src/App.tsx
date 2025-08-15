// App.tsx
import Navigator from "./components/navBar";
import FAB from "./components/FAB";
import Body from "./components/Body";
import Practice from "./components/practice/prac";
import { useState } from "react";

function App() {
  const [activeNav, setActiveNav] = useState("todo");

  return (
    <>
      {activeNav === "todo" && <Body />}
      {activeNav === "sched" && <Practice/>}
      {activeNav === "acc" && <div>Account Component Here</div>}
      
      <Navigator className="nav" onNavChange={setActiveNav} />
      <FAB id="FAB" />
    </>
  );
}

export default App;
