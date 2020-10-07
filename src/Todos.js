import React, { Component } from 'react'
import Eachtodo from './Eachtodo'

class Todos extends Component {

    render() {
        return (
        this.props.todos_p.map((todo => (
                <Eachtodo key={todo.id} todo_f = {todo} changeStatus_t = {this.props.changeStatus_a}/>
        )))
        )
    }
}

export default Todos
