import { useState } from "react";
const Srikanth = () => {

  const [value, setValue]=useState(false)

  const handleClick = () => setValue(!value)

  return(
  <div>
    <h1>This is Srikanth</h1>
    <a href="/">Back to home</a><br/>
    <button onClick={handleClick}>click me</button>

      {value && <p>I am here</p>}
  </div>
  );
};

export default Srikanth;
