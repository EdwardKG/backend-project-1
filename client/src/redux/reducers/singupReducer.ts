import {SIGNUP_DATA} from "../actions/actions";

interface IAction {
    type: string,
    payload: any,
}

const initialState = {};

function singupReducer(state = initialState, action: IAction) {
    switch (action.type) {
        case SIGNUP_DATA:
            console.log(`${action.payload}`);
            return Object.assign(state, action.payload);
        default:
            return state;
    }

}

export default singupReducer;
