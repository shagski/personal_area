import { combineReducers, createStore, applyMiddleware } from "redux";
import users from "./users_reducer";
import login from "./login_reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  users,
  login,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
