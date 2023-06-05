import { NavLink, Outlet } from "react-router-dom";
import classes from "./index.module.css";
const Home = () => (
  <>
    <header className={classes.header}>
      <NavLink
        to="srikanth"
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
    <Outlet />
  </>
);
export default Home;
