import React, {Component} from 'react';
import Todos from './Todos.js'
import Addtodo from './Addtodo.js'


class App extends Component {
  constructor(props){
    super();
     alert(this.props);
  }


  state = {
    todos_s : [],
    new_todo : "",
  }

  changeStatus = (id) => {
    this.setState({todos_s : this.state.todos_s.map((todo) => {
      if(todo.id === id){
        todo.status = !todo.status
      }return todo;
    })});
  }

  onsubmit = (props) => {
   //alert("hi");
     alert(this.props.children);

  }

  render(){
    return (
      <div className="App">
        <Addtodo onsubmit={this.onsubmit} />
      <Todos todos_p = {this.state.todos_s} changeStatus_a = {this.changeStatus}/>
    </div>
    );
}}
  
export default App;
