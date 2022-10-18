import React, { useState } from "react";
import "./startpageComponent.css";

// Zeigt eine Startseite an, die mit Klick auf einen Button ausgeblendet werden kann.
export const StartpageComponent = ({
  title,
  logo,
  isVisible,
  buttonName,
  functionShowTaskpageComponent,
}) => {
  const [startpageVisibility, setStartpageVisibility] = useState(isVisible);

  function hideStartpage() {
    setStartpageVisibility(false);
    functionShowTaskpageComponent();
  }

  if (startpageVisibility) {
    return (
      <div>
        <h1>{title}</h1>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <button className="startpageComponent_button" onClick={hideStartpage}>
          {buttonName}
        </button>
      </div>
    );
  } else return;
};
