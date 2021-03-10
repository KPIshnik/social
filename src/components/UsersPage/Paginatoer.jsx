import { useState } from "react";
import style from "./UserPage.module.css";

const Paginator = (props) => {
  const itemCount = 10;
  const portionsCount = Math.ceil(props.pageCount / itemCount);
  let [porcion, setPorcion] = useState(
    Math.floor(props.currentPage / itemCount)
  );

  let pages = [];
  for (let i = 1; i <= props.pageCount; i++) {
    pages.push(
      <li
        key={i}
        className={i === props.currentPage ? style.active : ""}
        onClick={() => {
          props.onPageChanged(i);
        }}
      >
        {i}
      </li>
    );
  }
  let pagesPorcion = pages.filter(
    (p, i) => i < porcion * itemCount + 10 && i >= porcion * itemCount
  );
  return (
    <div>
      {porcion > 0 && (
        <button onClick={() => setPorcion(--porcion)}>prev</button>
      )}
      <ul className={style.pagesList}>{pagesPorcion}</ul>
      {porcion < portionsCount && (
        <button onClick={() => setPorcion(++porcion)}>next</button>
      )}
    </div>
  );
};

export default Paginator;
