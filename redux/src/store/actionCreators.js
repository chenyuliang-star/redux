import  { LIST_CHANGE, VALUE_CHANGE, LIST_DELETE, INIT_LIST_ACTION } from "./actionTypes";
import axios from "axios";

export const listChangeAction = (value) => ({
    type: LIST_CHANGE,
    value
})
export const valueChangeAction = (value) => ({
    type: VALUE_CHANGE,
    value
})
export const listDeleteAction = (index) => ({
    type: LIST_DELETE,
    value: index
})

export const initStateAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getListAction = () => {
    return (dispatch) => {
        axios.get("/data.json").then((res) => {
            const data =res.data;
            const action = initStateAction(data);
            dispatch(action); 
       })
    }
}