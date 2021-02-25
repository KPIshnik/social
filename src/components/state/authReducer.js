const setUserData = "SET_USER_DATA";
const logout = "LOGOUT";

const initial = {
  isLoggedIn: false,
  id: null,
  login: null,
  email: null,
};

export default function authReducer(state = initial, action) {
  switch (action.type) {
    case setUserData:
      return { ...state, isLoggedIn: true, ...action.user };
    case logout:
      return { ...initial };
    default:
      return state;
  }
}

export function loginAC(user) {
  return {
    type: setUserData,
    user,
  };
}

export function logoutAC() {
  return {
    type: logout,
  };
}
