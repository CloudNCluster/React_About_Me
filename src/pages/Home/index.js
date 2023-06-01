import { Link } from "react-router-dom";
import logo from "./logo.svg";
import './index.css';


const Home = () => (
  <div className="App">
    <header className="App-header">
      
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <a href="Madhavi12222222">Madhavi</a>
      <Link className="link" to='naga'> Navigate to Naga </Link>
    </header>
    
    
  </div>
);
export default Home;
