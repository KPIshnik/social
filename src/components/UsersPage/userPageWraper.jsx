import { connect } from "react-redux";
import {
  setPageCountAC,
  getUsers,
  followUser,
  unFollowUser,
} from "../state/usersReducer";
import UsersClassPage from "./UsersClassPage";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageCount: state.usersPage.pageCount,
    usersOnPage: state.usersPage.usersOnPage,
    currentPage: state.usersPage.currentPage,
    isFatching: state.usersPage.isFatching,
    followingInProgres: state.usersPage.followingInProgres,
  };
};

let mapDispatchToProps = {
  setNumberOfPages: setPageCountAC,

  getUsers,
  followUser,
  unFollowUser,
};

let UsersPageWraper = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersClassPage);

export default UsersPageWraper;
