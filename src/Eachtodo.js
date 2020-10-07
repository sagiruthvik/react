import React, { Component } from 'react'

class Eachtodo extends Component {

    getStyle = () => {
       return{
        textDecoration : this.props.todo_f.status ? "line-through" : "none",
        background : "grey",
        color : "black",
        padding : "20px",
        borderBottom : "1px grey solid"
        }
    }

    render() {
         const {id, title} = this.props.todo_f;
        return (
            <div>
                <p style={this.getStyle()}>
                    <input type="checkbox" onChange={this.props.changeStatus_t.bind(this, id)}/> {' '}
                     {title}
                </p>
            </div>
        )
    }
}

export default Eachtodo
