import { NavLink, Outlet } from "react-router-dom";
import classes from "./index.module.css";
import HeaderImage from "../HeaderImage/index";
import { FormControlLabel, Switch } from "@mui/material";

const Home = (props) => (
  <>
    <header
      className={classes.header}
      style={{
        backgroundColor: props.theme === "dark" ? "#222222" : "white",
        boxShadow:
          props.theme === "dark" ? "0 0 1px 1px white" : "0 0 5px 2px black",
      }}
    >
      <NavLink
        to="/"
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
      {/* <Switch onChange={props.toogleTheme} id="switch" />
      <label
        htmlFor="switch"
        style={{ color: props.theme === "dark" ? "white" : "black" }}
      >
        Enable {props.theme === "dark" ? "Default" : "Dark"} Mode
      </label> */}
      <FormControlLabel
        control={<Switch onChange={props.toogleTheme} />}
        label={props.theme === "dark" ? "Default Mode" : "Dark Mode"}
      />
    </header>
    <HeaderImage />
    <Outlet />
  </>
);
export default Home;
