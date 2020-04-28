import ToDoList from "./ToDoList";
import React from 'react';
class ToDoApp extends React.Component
  {
    constructor(props)
    {
    super(props)
      this.state={todoarr:[],iv:""};
    }
    handleChange=(e)=>
    {
    this.setState({iv:e.target.value});
    }
    handleClick=()=>
    {
    this.setState({todoarr:[...this.state.todoarr,this.state.iv],iv:""});
    }
    handleDel=(index)=>
    {
      let temp=this.state.todoarr;
      temp.splice(index,1);
      this.setState({todoarr: temp})
    }
  render()
  {
    return(<div> 
         <input onChange={this.handleChange} placeholder="Enter" value={this.state.iv}></input>
         <button onClick={this.handleClick}>Submit</button>
         <ToDoList handleDel={this.handleDel} dis={this.state.todoarr}></ToDoList>
          </div>);
  }
}
export default ToDoApp
  
