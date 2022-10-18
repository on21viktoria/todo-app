import logo from "./logo.svg";
import "./App.css";
import { StartpageComponent } from "./components/startpageComponent/startpageComponent.js";
import { TaskpageComponent } from "./components/taskpageComponent/taskpageComponent.js";

function App() {
  console.log("I render");
  return (
    <div className="App">
      <StartpageComponent
        title={"Herzlich Willkommen zur To Do App!"}
        logo={logo}
        buttonName={"Start"}
        isVisible={true}
      />
      <TaskpageComponent />
    </div>
  );
}

export default App;
