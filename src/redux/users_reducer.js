import axios from "axios";

const initialState = {
  users: [],
  inputValue: "",
  stri: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "SET_REMOVE_USER":
      return {
        ...state.users,
        users: state.users.filter((user) => user.id != action.payload),
      };
    case "SET_VALUE":
      return {
        ...state.inputValue,
        inputValue: action.payload,
      };
    case "UPDATE_INPUT_VALUE":
      return {
        ...state.stri,
        stri: action.payload,
      };
    default:
      return state;
  }
};

export const fetchUsers = () => (dispatch) => {
  axios
    .get("/server_users")
    .then((res) => res.data)
    .then((data) => dispatch(setUsers(data)));
};

export const setUsers = (users) => ({ type: "SET_USERS", payload: users });
export const removeUser = (user) => ({
  type: "SET_REMOVE_USER",
  payload: user,
});
export const setValue = (value) => ({ type: "SET_VALUE", payload: value });
export const updateInputValue = (str) => ({
  type: "UPDATE_INPUT_VALUE",
  payload: str,
});

export default usersReducer;
