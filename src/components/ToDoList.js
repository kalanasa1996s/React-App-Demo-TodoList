import React from 'react';


const ToDoList = ({todoItems})=>{

return(


    <div>

    
        {todoItems.map((todoItem)=> {
        return <ul> <li key={todoItem.id}>{todoItem.name}</li></ul>


        })
        }
    
   
    </div>

)


}

export default ToDoList;