import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const Naga = (props) => {
  const [click, setClick] = useState([]);
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);
  const [showText, setShowText] = useState(false);

  var textBox = {
    backgroundColor: props.theme === "dark" ? "white" : "white",
    color: props.theme === "dark" ? "black" : "black",
    borderRadius: "5px",
  };

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
  const mUiButtonAction = () => {
    setShowText(!showText);
  };
  return (
    <>
      <h1> {props.completedValue} </h1>
      <p style={{ textAlign: "center", padding: "20px" }}>
        The above number is the value brought from the content page via props.
      </p>
      <h1 className="h1-tag"> This page Describes about Naga </h1>
      <p className="p-tag">Unfortunately, This page doesn't have anything...</p>
      <Button
        variant="outlined"
        onClick={mUiButtonAction}
        style={{
          position: "relative",
          right: -400,
        }}
      >
        {showText ? "Hide Text" : "Click me"}
      </Button>
      {showText && (
        <p style={{ textAlign: "center" }}>
          This Button Created using Meterial-UI
        </p>
      )}
      <div className="task-board" style={textBox}>
        <h2> Task Board </h2>

        {/* <input
          type="text"
          value={task}
          placeholder="Enter Task"
          required
          autoFocus
          onChange={taskHandler}
        /> */}

        <TextField
          label="Enter Task"
          type="text"
          onChange={taskHandler}
          value={task}
          style={textBox}
        />

        {error && <p style={{ color: "red" }}> Input Is Invalid</p>}
        {/* <button className="button" onClick={buttonClickHandler}>
          Click
        </button> */}
        <Button
          variant="contained"
          color="success"
          // className="button"
          onClick={buttonClickHandler}
        >
          Submit
        </Button>
        <h2> Tasks: </h2>
        <h1> You have {numberOfTasks} Tasks.</h1>
        <Link to="/"> Home </Link>
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
