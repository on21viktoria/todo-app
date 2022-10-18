import React, { useState } from "react";

export const StartpageComponent = ({ title, logo, isVisible, buttonName }) => {
  const [internalVisibility, setVisibility] = useState(isVisible);

  function hideStartpage() {
    setVisibility(false);
  }

  if (internalVisibility) {
    return (
      <div>
        <h1>{title}</h1>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <button onClick={hideStartpage}>{buttonName}</button>
      </div>
    );
  } else return <></>;
};
