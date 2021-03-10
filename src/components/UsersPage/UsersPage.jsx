import Paginator from "./Paginatoer";
import UserItem from "./userItem/userItem";
import style from "./UserPage.module.css";

export default function UsersPage(props) {
  const users = props.users.map((u) => (
    <UserItem
      user={u}
      followingInProgres={props.followingInProgres}
      key={u.id}
      followUser={props.followUser}
      unFollowUser={props.unFollowUser}
    />
  ));

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
  return (
    <div className={style.main}>
      <h3> Users: </h3>
      {/* <ul className={style.pagesList}>{pages}</ul> */}
      <Paginator
        pageCount={props.pageCount}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
      {users}

      <button onClick={props.loadMoreUsers} className={style.button}>
        Show more
      </button>
    </div>
  );
}
