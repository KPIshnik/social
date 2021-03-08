import styles from "./header.module.css";

export default function Header(props) {
  const handdleClick = (ev) => {
    if (ev.target.textContent === "login") return;

    props.logout();
  };
  console.log("aSdaf");
  return (
    <div className={styles.header} id="header">
      <h1 onClick={handdleClick}>
        {props.isLoggedIn ? props.userName : "login"}
      </h1>
    </div>
  );
}
