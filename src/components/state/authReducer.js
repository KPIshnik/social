import { stopSubmit } from "redux-form";
import { authAPI } from "../../api/api";
//пепеписать логаут через сетЮзерДата
const setUserData = "SET_USER_DATA";
const logoutAction = "LOGOUT";

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
    case logoutAction:
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
    type: logoutAction,
  };
}

export const authMe = () => (dispatch) => {
  return authAPI.me().then((response) => {
    if (response.resultCode === 0) {
      dispatch(loginAC(response.data));
    }
  });
};

export const login = (loginData) => (dispatch) => {
  authAPI.login(loginData).then((response) => {
    if (response.data.resultCode === 0) {
      console.log(response.data);
      dispatch(authMe());
    } else {
      console.log(response.data.messages);
      dispatch(stopSubmit("login", { _error: response.data.messages[0] }));
    }
  });
};

export const logout = () => (dispatch) => {
  console.log("loggingout!!!!!!!!!!");
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(logoutAC());
    }
  });
};
