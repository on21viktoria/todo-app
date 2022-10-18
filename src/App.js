import logo from "./logo.svg";
import "./App.css";
import { StartpageComponent } from "./components/startpageComponent/startpageComponent.js";
import { TaskpageComponent } from "./components/taskpageComponent/taskpageComponent.js";
import { useState } from "react";

function App() {
  console.log("I render");
  const [showTaskpage, setTaskpage] = useState(false);

  function changeToTaskpageComponent() {
    setTaskpage(true);
  }

  return (
    <div className="App">
      {showTaskpage ? (
        <TaskpageComponent />
      ) : (
        <StartpageComponent
          title={"Herzlich Willkommen zur To Do App!"}
          logo={logo}
          buttonName={"Start"}
          isVisible={true}
          functionShowTaskpageComponent={changeToTaskpageComponent}
        />
      )}
    </div>
  );
}

export default App;
