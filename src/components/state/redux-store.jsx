import { combineReducers, createStore, applyMiddleware } from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import inicializedReducer from "./IticializeReducer";

const reducers = combineReducers({
  dialogPage: dialogReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  inicialize: inicializedReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
