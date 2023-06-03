import "./index.css";
import { useState } from "react";

const Naga = () => {
  const [click, setClick] = useState([]);
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);

  const taskHandler = (event) => {
    setTask(event.target.value);
  };
  const buttonClickHandler = () => {
    if (task.trim().length !== 0) {
      setError(false);
      setClick([...click, task]);
      setTask("");
    } else {
      setError(true);
    }
  };
  var numberOfTasks = click.length;
  return (
    <>
      <h1 className="h1-tag"> This page Describes about Naga </h1>
      <p className="p-tag">Unfortunately, This page doesn't have anything...</p>
      <div className="task-board">
        <h2> Task Board </h2>
        <input
          type="text"
          value={task}
          placeholder="Enter Task"
          required
          autoFocus
          onChange={taskHandler}
        />
        {error && <p style={{ color: "red" }}> Input Is Invalid</p>}
        <button className="button" onClick={buttonClickHandler}>
          Click
        </button>
        <h2> Tasks: </h2>
        <h1> You have {numberOfTasks} Tasks.</h1>
        <ul>
          {click.map((eachRow) => (
            <li key={Math.random().toString()}>
              {eachRow}
              {eachRow.key}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Naga;
