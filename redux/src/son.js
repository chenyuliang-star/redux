import React from 'react';


class Son extends React.Component {
    

    render () {
        return (
            <li  
              onClick = { this.props.handleDelete } 
              dangerouslySetInnerHTML = {{__html: this.props.data}}
            ></li>
        );
    }
}
 
export default Son;