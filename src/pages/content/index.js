// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../Home";
import Srikanth from "../srikanth";
import Naga from "../Naga";
import Error from "../Error";
import Madhavi from "../Madhavi";
import Venu from "../venu";

export default function Content() {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
      response.json().then((data) => {
        console.log(data);
        setTitle(data?.title);
        setCompleted(data?.id);
        console.log(data?.id);
      });
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        >
          <Route path="/srikanth" element={<Srikanth title={title} />} />
          <Route path="naga" element={<Naga completedValue={completed} />} />
          <Route path="*" element={<Error />} />
          <Route path="/venu" element={<Venu />} />
          <Route path="/Madhavi" element={<Madhavi />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Content />);
