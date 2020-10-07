import React, {Component} from "react";
import './App.css'

class Source extends Component{

    constructor(){
        super();
        this.state = {
            input : "",
            todos : [],
        }
    }

    handlechange(e){
        this.setState({
            input : e.target.value,
        });
    }

    handleclick(){
       this.setState({
        todos : [...this.state.todos, this.state.input],
       });
    }

    handledelete(e){
        var del = this.state.todos.filter((todo) => {
            return todo != e;
        })
        this.setState({todos : del});
    }

    render(){
        return(
            <div className="container">
                <input type="text" onChange={(e) => this.handlechange(e)}/>
                <button onClick={() => this.handleclick()}>click me</button>
                <div className="todos">
                {this.state.todos.map((e) => {
                    return(
                        <div>
                        <input type="checkbox" />
                        <p>{e}</p>
                        <button onClick={() => this.handledelete(e)}>delete</button>
                    </div>
                    )
                })}
                 
                </div>
            </div>
        );
    }
}

export default Source;