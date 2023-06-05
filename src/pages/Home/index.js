import { Link, Outlet } from "react-router-dom";
import "./index.css";
import Header from "../venu/Header";
import Footer from "../venu/Footer";

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
    <Header/>

   
    <Outlet />
    <Footer />
  </>
  
);
export default Home;
