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
        <div className="row">
          <h1 className="mt-3">{title}</h1>
        </div>
        <div className="row justify-content-around">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <button className="btn btn-light btn-lg" onClick={hideStartpage}>
            {buttonName}
        </button>
      </div>
    );
  } else return;
};
