import styles from "./dialogs.module.css";
import { NavLink } from "react-router-dom";

export default function Dialogs(props) {
  const dilogsItems = props.dialogs.map((dialog) => (
    <li key={dialog.id} className={styles.link}>
      <NavLink to={`/dialogs/${dialog.id}`} activeClassName={styles.active}>
        {dialog.name}
      </NavLink>
    </li>
  ));
  return (
    <div className={styles.dialogs}>
      <ul className={styles.list}>{dilogsItems}</ul>
    </div>
  );
}
