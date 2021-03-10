import { authMe } from "./authReducer";

const setInicializedSaccess = "set_inicialized_saccess";

const initial = {
  inicialized: false,
};

export default function inicializedReducer(state = initial, action) {
  switch (action.type) {
    case setInicializedSaccess:
      return { ...state, inicialized: true };

    default:
      return state;
  }
}

const setInicializedAC = () => {
  return {
    type: setInicializedSaccess,
  };
};

export const setInicialized = () => (dispatch) => {
  dispatch(authMe()).then((res) => dispatch(setInicializedAC()));
};
