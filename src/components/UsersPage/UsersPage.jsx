import style from "./UserPage.module.css";
import UserItem from "./userItem/userItem";
import React from "react";
import * as axios from "axios";
//props.getUsers();

class UsersPage extends React.Component {
  componentDidMount() {
    axios
      .get(
        "https://social-network.samuraijs.com/api/1.0/users?page=150&count=4"
      )
      .then((response) => {
        console.log(response.data.items);
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    console.log("my debug");
    console.log(this.props.getUsers());
    const users = this.props.users.map((u) => (
      <UserItem user={u} toggleFolow={this.props.toggleFolow} key={u.id} />
    ));
    return (
      <div className={style.main}>
        <h3> Users: </h3>
        <ul className={style.pagesList}>
          <li>1</li>
          <li className={style.active}>2</li>
          <li>3</li>
          <li>4</li>
        </ul>

        {users}

        <button onClick={this.props.loadMoreUsers} className={style.button}>
          Show more
        </button>
      </div>
    );
  }
}

export default UsersPage;
