import { connect } from "react-redux";
import {
  setPageCountAC,
  getUsers,
  followUser,
  unFollowUser,
} from "../state/usersReducer";
import {
  currentPageSelector,
  followingInProgresSelector,
  getUsersSelector,
  getUsersSelectorSuper,
  isFatchingselector,
  pageCountSelector,
  usersOnPageSelector,
} from "../state/usersSelectors";
import UsersClassPage from "./UsersClassPage";

let mapStateToProps = (state) => {
  return {
    users: getUsersSelectorSuper(state),
    pageCount: pageCountSelector(state),
    usersOnPage: usersOnPageSelector(state),
    currentPage: currentPageSelector(state),
    isFatching: isFatchingselector(state),
    followingInProgres: followingInProgresSelector(state),
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
