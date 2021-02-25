//import axios from "axios";

const toggleFollow = "TOGGLE-FOLLOW";
const getUsers = "GET-USERS";
const setUsers = "SET-USERS";
const setPageCount = "SET-PAGE-COUNT";
const selectPage = "SELECT-PAGE";
const IsFetching = "SET_ISFETCHING";

export * as axios from "axios";

let initial = {
  users: [],
  pageCount: 0,
  usersOnPage: 4,
  currentPage: 1,
  isFatching: true,
};

export default function usersReducer(state = initial, action) {
  switch (action.type) {
    case toggleFollow:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: !u.followed };
          }
          return u;
        }),
      };
    case getUsers:
      return state;
    case setUsers:
      return { ...state, users: action.users };
    case setPageCount:
      let numberOfPages = Math.ceil(action.usersCount / action.usersOnPage);
      return { ...state, pageCount: numberOfPages };
    case selectPage:
      return { ...state, currentPage: action.page };
    case IsFetching:
      return { ...state, isFatching: action.isFatching };
    default:
      return state;
  }
}

export function toggleFolowActionCreator(userID) {
  return {
    type: toggleFollow,
    userID: userID,
  };
}

export function getUsersAC() {
  return {
    type: getUsers,
  };
}

export function setUsersAC(users) {
  return {
    type: setUsers,
    users: users,
  };
}

export function setPageCountAC(usersCount) {
  return {
    type: setPageCount,
    usersCount: usersCount,
    usersOnPage: 4,
  };
}

export function selectPageAC(page) {
  return {
    type: selectPage,
    page: page,
  };
}

export function setIsFetching(isFatching) {
  return {
    type: IsFetching,
    isFatching,
  };
}
