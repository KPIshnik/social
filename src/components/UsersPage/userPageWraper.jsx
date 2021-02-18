import { connect } from "react-redux";
import {
  toggleFolowActionCreator,
  getUsersAC,
  setUsersAC,
} from "../state/usersReducer";
import UsersPage from "./UsersPage";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    toggleFolow: (userID) => dispatch(toggleFolowActionCreator(userID)),
    getUsers: () => dispatch(getUsersAC()),
    setUsers: (users) => dispatch(setUsersAC(users)),
  };
};

let UsersPageWraper = connect(mapStateToProps, mapDispatchToProps)(UsersPage);

export default UsersPageWraper;
