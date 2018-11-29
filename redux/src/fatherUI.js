import React, { Fragment } from "react";
import Son from "./son";

//写UI组件时 用无状态组件代替class 性能好一些
const FatherUI = (props) => {
    return (
        <Fragment >
            <input value = { props.value } onChange = { event => { props.handleInput(event) } }/>
            <button onClick = { props.handleAdd}>Submit</button>
            <ul>
                {
                    props.list.map( (data, index) => {
                    return (<Son key = { data } data = { data } handleDelete = { () => { props.handleDelete(index) }} />)
                    })
                }
            </ul>
        </Fragment>
    );
}
// class FatherUI extends React.Component {
//     render () {
//         return (
//             <Fragment >
//                 <input value = { this.props.value } onChange = { event => { this.props.handleInput(event) } }/>
//                 <button onClick = { this.props.handleAdd}>Submit</button>
//                 <ul>
//                     {
//                         this.props.list.map( (data, index) => {
//                         return (<Son key = { data } data = { data } handleDelete = { () => {this.props.handleDelete(index) }} />)
//                         })
//                     }
//                 </ul>
//             </Fragment>
//         );
//     }
// }
export default FatherUI;