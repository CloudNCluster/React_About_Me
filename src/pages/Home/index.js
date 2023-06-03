import { Link, Outlet } from "react-router-dom";
import "./index.css";

const Home = () => (
  <>
    <header className="header">
      <Link to="srikanth" className="link">
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
    <Outlet />
  </>
);
export default Home;
