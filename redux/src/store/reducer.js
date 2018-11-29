import  { LIST_CHANGE, VALUE_CHANGE, LIST_DELETE, INIT_LIST_ACTION } from "./actionTypes";


const defaultState = {
    value: "",
    list: [1,2]
}
export default ( state = defaultState, action) => {
    switch (action.type) {
        case VALUE_CHANGE: {
            let newState = JSON.parse(JSON.stringify(state));
            newState.value = action.value;
            return newState;
        }
        case INIT_LIST_ACTION: {
            let newState = JSON.parse(JSON.stringify(state));
            newState.list = action.data;
            return newState;
        }
        case LIST_CHANGE: {
            let newState = JSON.parse(JSON.stringify(state));
            newState.list = [...newState.list, action.value];
            newState.value = ""
            return newState;
        }
        case LIST_DELETE: {
            let newState = JSON.parse(JSON.stringify(state));
            newState.list.splice(action.value, 1);
            return newState;
        }
        default: break;
    }
    return state;
}