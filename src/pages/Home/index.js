import { NavLink, Outlet } from "react-router-dom";
import classes from "./index.module.css";
import HeaderImage from "../HeaderImage/index";

const Home = () => (
  <>
    <header className={classes.header}>
      <NavLink
        to="/srikanth"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        end
      >
        srikanth
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        to="venu"
      >
        Venu
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        to="madhavi"
      >
        Madhavi
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        to="naga"
      >
        Naga
      </NavLink>
    </header>
    <HeaderImage />
    <Outlet />
  </>
);
export default Home;
