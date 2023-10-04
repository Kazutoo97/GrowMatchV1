import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import GetProfileReducer from "./GetProfileReducer";
import RegisterReducer from "./RegisterReducer";

export const reducer = combineReducers({
  Auth: AuthReducer,
  Profile: GetProfileReducer,
  Email: RegisterReducer,
});
