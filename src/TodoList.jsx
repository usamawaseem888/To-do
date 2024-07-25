import React from 'react'

const TodoList = (props) => {
 
   const {edit} =props

  return (
    <div>
      <ul className="list-group">
        {props.todo.map((item, index) => {
          return (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center ">
             {item}
              <div>
              <button type="button" className="btn btn-secondary mx-2 " aria-label="Close" onClick={() => props.del(index)}>Delete</button>
              <button type="button" className="btn btn-secondary " onClick={()=>{edit(index)}} 
              data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">Edit
              </button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default TodoList