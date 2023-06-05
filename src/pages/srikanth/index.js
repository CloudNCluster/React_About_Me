import { useState } from "react";
import { Link } from "react-router-dom";

const Srikanth = ({ title = "", value1 = {} }) => {
  const [value, setValue] = useState(false);

  const handleClick = () => setValue(!value);

  return (
    <div>
      <div>{value1.length > 0 ? 10 : 20}</div>
      <h1>This is Srikanth</h1>
      <Link to="/">Back to home</Link>
      <br />
      <button onClick={handleClick}>click me</button>

      {value && <p>I am here</p>}
    </div>
  );
};

export default Srikanth;
