// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Srikanth from "../srikanth";
import Naga from "../Naga";
import Error from "../Error";
import Madhavi from "../Madhavi";

export default function Content() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/srikanth" element={<Srikanth />} />
        <Route path='naga' element={<Naga />} />
        <Route path='*' element={<Error />} />
        <Route path="/Madhavi" element={<Madhavi />} />
      </Routes>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Content />);
