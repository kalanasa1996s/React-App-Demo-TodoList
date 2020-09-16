import React , {Component} from 'react';
import ToDoList from '../components/ToDoList'

class ToDo extends Component{

    constructor(props){
        super(props);

        this.state={
            todoItems:[],
            newTodo:''
        }
    }


    render(){



        const{todoItems,newTodo} = this.state;


        return(


            <div>
        
            <h1 >TO-DO LIST </h1>
    
            <h2>Add Your Task : </h2>
    
            <input  value={newTodo} onChange={(event)=>{
                this.setState({
                    newTodo: event.target.value
                })
            }}/>
        
            <button onClick={()=>{
                this.setState( 
                    {
                        todoItems:[...todoItems,{
                            id:newTodo,
                            name:newTodo
                        }]
                    }

                )
            }} >ADD Your Task</button>
            
    
            <h2> Today Task </h2>
    
            {/* import component */}
    
            <ToDoList todoItems={todoItems}/>
    
          
    
            </div>


        )

    }
}

export default ToDo;