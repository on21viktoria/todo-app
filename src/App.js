import logo from "./logo.svg";
import "./App.css";
import { StartpageComponent } from "./components/startpageComponent/startpageComponent.js";

function App() {
  return (
    <div className="App">
      <StartpageComponent
        title={"Herzlich Willkommen zur To Do App!"}
        logo={logo}
        buttonName={"Start"}
        isVisible={true}
      />
    </div>
  );
}

export default App;
