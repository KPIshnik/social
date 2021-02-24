import React from "react";
import * as axios from "axios";
import UsersPage from "./UsersPage";
import Preloader from "../common/Preloader";

class UsersClassPage extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`
      )
      .then((response) => {
        console.log(response.data.items);
        this.props.setUsers(response.data.items);
        this.props.setNumberOfPages(response.data.totalCount);
        this.props.setIsFetching(false);
      });
  }

  onPageChanged(i) {
    this.props.selectPage(i);
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${i}&count=${this.props.usersOnPage}`
      )
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <>
        {this.props.isFatching ? (
          <Preloader />
        ) : (
          <UsersPage
            users={this.props.users}
            onPageChanged={this.onPageChanged.bind(this)}
            toggleFolow={this.props.toggleFolow}
            pageCount={this.props.pageCount}
            currentPage={this.props.currentPage}
          />
        )}
      </>
    );
  }
}

export default UsersClassPage;
