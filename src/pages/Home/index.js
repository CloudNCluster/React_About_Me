import { Link } from "react-router-dom";
import "./index.css";

const Home = () => (
  <div className="App">
    <header className="App-header">
      <Link className="link" to="srikanth">
        srikanth
      </Link>
      <Link className="link" to="venu">
        Venu
      </Link>
      <Link className="link" to="madhavi">
        Madhavi
      </Link>

      <Link className="link" to="naga">
        Naga
      </Link>
    </header>
  </div>
);
export default Home;
