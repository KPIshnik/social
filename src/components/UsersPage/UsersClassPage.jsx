import React from "react";
import UsersPage from "./UsersPage";
import Preloader from "../common/Preloader";
import { usersAPI } from "../../api/api";
class UsersClassPage extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.usersOnPage)
      .then((response) => {
        this.props.setUsers(response.items);
        this.props.setNumberOfPages(response.totalCount);
        this.props.setIsFetching(false);
      });
  }

  onPageChanged(i) {
    this.props.selectPage(i);
    this.props.setIsFetching(true);
    usersAPI.getUsers(i, this.props.usersOnPage).then((response) => {
      this.props.setIsFetching(false);
      this.props.setUsers(response.items);
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
            toggleDisableButton={this.props.toggleDisableButton}
            toggleFolow={this.props.toggleFolow}
            pageCount={this.props.pageCount}
            currentPage={this.props.currentPage}
            followingInProgres={this.props.followingInProgres}
          />
        )}
      </>
    );
  }
}

export default UsersClassPage;
