import { connect } from "react-redux";
import {
  toggleFolowActionCreator,
  getUsersAC,
  setUsersAC,
  setPageCountAC,
  selectPageAC,
  setIsFetching,
  toggleDisableButton,
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
  toggleFolow: toggleFolowActionCreator,
  getUsers: getUsersAC,
  setUsers: setUsersAC,
  setNumberOfPages: setPageCountAC,
  selectPage: selectPageAC,
  setIsFetching,
  toggleDisableButton,
};

let UsersPageWraper = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersClassPage);

export default UsersPageWraper;
