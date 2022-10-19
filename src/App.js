import logo from "./LogoKniffeligeGruppe.svg";
import "./App.css";
import { StartpageComponent } from "./components/startpageComponent/startpageComponent.js";
import { TaskpageComponent } from "./components/taskpageComponent/taskpageComponent.js";
import { useState } from "react";
import { FooterComponent } from "./components/footerComponent/footerComponent";

function App() {
  console.log("I render");
  const [showTaskpage, setTaskpage] = useState(false);

  function changeToTaskpageComponent() {
    setTaskpage(true);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5 align-items-center">
          {showTaskpage ? (
            <TaskpageComponent />
          ) : (
            <StartpageComponent
              className="d-flex"
              title={"Herzlich Willkommen zur To Do App!"}
              logo={logo}
              buttonName={"Lege eine Liste an"}
              isVisible={true}
              functionShowTaskpageComponent={changeToTaskpageComponent}
            />
          )}
        </div>
      </div>
      <div>
        <FooterComponent/>
      </div>
    </div>
  );
}

export default App;
