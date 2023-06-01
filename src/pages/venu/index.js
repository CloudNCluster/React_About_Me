import React from "react";
import { useState } from "react";

const Venu = () => {
  const [buttonText, setButtonText] = useState("Click me");
  const [isButtonClicked, setIsButtonClicked] = useState(false);


  const handleClick = () => {
    setButtonText(!buttonText);
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <div className="App">
      {/* <header className="App-middle"> */}
      <h1>This function is For Venu</h1>
      <h5>This is sub heading</h5>
      <a href="/">Go to home page</a>
      {/* </header> */}
      <button onClick={handleClick}>click me</button>
      <p style={{ color: isButtonClicked ? 'red' : 'green' }}>button clicked</p>
      {buttonText && <p>buttons clicked</p>}
    </div>
  );
};

export default Venu;
