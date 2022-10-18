import logo from "./logo.svg";
import "./App.css";
import { StartpageComponent } from "./components/startpageComponent/startpageComponent.js";
import { AddTaskComponent } from "./components/addTaskComponent/addTaskComponent.js";

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
      <AddTaskComponent />
    </div>
  );
}

export default App;
