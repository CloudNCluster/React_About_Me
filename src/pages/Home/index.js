import { NavLink, Outlet } from "react-router-dom";
import classes from "./index.module.css";
import Header from "../venu/Header";
import Footer from "../venu/Footer";

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
    <Header />

    <Outlet />
    <Footer />
  </>
);
export default Home;
