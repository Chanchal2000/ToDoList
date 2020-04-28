import React from 'react';
class ToDoList extends React.Component
{
 render()
  {
  let l=this.props.dis.map(((elem,index) => 
 <li>{elem}<button onClick={()=>this.props.handleDel(index)}>Delete</button></li>));
    return(<div><ol>{l}
          </ol>
        </div>);
}
}
export default ToDoList