import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className={styles.navbar} id="navbar">
      <NavLink to="/profile" activeClassName={styles.active}>
        <h2>profile</h2>
      </NavLink>
      <NavLink to="/dialogs" activeClassName={styles.active}>
        <h2>dialogs</h2>
      </NavLink>
      <NavLink to="/users" activeClassName={styles.active}>
        <h2>Users</h2>
      </NavLink>
    </div>
  );
}
