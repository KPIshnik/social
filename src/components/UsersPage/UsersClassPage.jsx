import React from "react";
import UsersPage from "./UsersPage";
import Preloader from "../common/Preloader";

class UsersClassPage extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.usersOnPage);
  }

  onPageChanged(i) {
    this.props.getUsers(i, this.props.usersOnPage);
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
            pageCount={this.props.pageCount}
            currentPage={this.props.currentPage}
            followingInProgres={this.props.followingInProgres}
            followUser={this.props.followUser}
            unFollowUser={this.props.unFollowUser}
          />
        )}
      </>
    );
  }
}

export default UsersClassPage;
