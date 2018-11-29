import React from 'react';
 
import store from "./store/index"
import { getListAction, listChangeAction, valueChangeAction, listDeleteAction } from "./store/actionCreators";
import FatherUI from "./fatherUI";
 

class Father extends React.Component {
    constructor(props) {
        super(props);
        this.state =  store.getState();
        this.handleInput = this.handleInput.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        store.subscribe( () => this.setState(store.getState()));
    }

    render () {
        return (
           <FatherUI 
              value = { this.state.value }
              list = { this.state.list }
              handleInput = { this.handleInput }
              handleAdd = { this.handleAdd }
              handleDelete = { this.handleDelete }
            />
        )
    }

    componentDidMount () {
        const action = getListAction();
        store.dispatch(action);  
    }
    handleAdd = () => {
        const action = listChangeAction(this.state.value);
        store.dispatch(action);
    }
    handleInput = (event) => {
        const action = valueChangeAction(event.target.value);
        store.dispatch(action);
    }
    handleDelete = (index) => {
        const action = listDeleteAction(index);
        store.dispatch(action);
       
    }
}
export default Father;