import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

export default function Header(props) {
  return (
    <div className={styles.header} id="header">
      <NavLink to="/login">
        <h1>{props.isLoggedIn ? props.userName : "login"} </h1>
      </NavLink>
    </div>
  );
}
