//import axios from "axios";

const toggleFollow = "TOGGLE-FOLLOW";
const getUsers = "GET-USERS";
const setUsers = "SET-USERS";

export * as axios from "axios";

let initial = {
  users: [],
};

export default function usersReducer(state = initial, action) {
  switch (action.type) {
    case toggleFollow:
      let newState = {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, isFolowed: !u.isFolowed };
          }
          return u;
        }),
      };
      return newState;
    case getUsers:
      // axios
      //   .get("https://social-network.samuraijs.com/api/1.0/users")
      //   .then((response) => {
      //     console.log(response);
      //     return { ...state, users: [...state.users].push(response.items) };
      //   });
      return state;
    case setUsers:
      return { ...state, users: state.users.concat(...action.users) };
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
