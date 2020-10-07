import React, { Component } from 'react'
import './App.js'

export class Addtodo extends Component {

    constructor(props){
        super();
    }

    state = {
        input : ""
    }

    handlechange(event){
        this.setState({input : event.tatget.value});
    }

    render() {
       
        return (
            <form>
                <input type = "text" className = "input" onChange = {this.handlechange}></input>
                <button type = "submit" className="btn">Submit</button>
            </form>
        )
    }
}

export default Addtodo
