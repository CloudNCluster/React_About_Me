import { useState } from "react";
import "./index.css";

const Madhavi = () => {
  const [value, setValue] = useState(false);

  const handleClick = () => setValue(!value);

  const messages = ["Hello Madhavi", "Bye Madhavi"];

  const [currentIndex, setcurrentIndex] = useState(1);

  const handleClick1 = () => {
    const nextIndex = (currentIndex + 1) % 2;
    setcurrentIndex(nextIndex);
    alert(messages[nextIndex]);
  };

  return (
    <div>
      <h1 className="madhavi-title">This is Madhavi</h1>
      <h4>What is React?</h4>
      <p>
        React is a JavaScript library developed by Facebook which, among other
        things, was used to build Instagram.com. It aims to allow developers to
        create fast user interfaces for websites and applications alike easily.
        The main concept of React. js is virtual DOM.
      </p>
      <a href="/">Back to home</a>
      <br />

      <button onClick={handleClick}>click me</button>
      <br />
      <button onClick={handleClick1}>click here</button>

      {value && <p>I am here</p>}
    </div>
  );
};
export default Madhavi;
