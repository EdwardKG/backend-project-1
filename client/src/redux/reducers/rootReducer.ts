import {combineReducers} from "redux";
import singupReducer from "./singupReducer";

const rootReducer = combineReducers({
    signup: singupReducer,
});

export default rootReducer;
