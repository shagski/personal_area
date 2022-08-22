const initialState = {
  name: "",
  password: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, name: action.payload.name };
    case "SET_USER":
      return { ...state, password: action.payload.password };
    default:
      return state;
  }
};

export const login = (obj) => ({ type: "SET_USER", payload: obj });

export default loginReducer;
