import React from "react";
import Todo from './Todo';

const TodList = ({ todos, toggleComplete, removeTodo }) => {
    console.log(`todos form TodoLis : ${todos}`)

    //data from appjs
    return (
        <ul className=''>
            {todos.map(todo => (
                <Todo key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}
                />
            ))}
        </ul>

    );


}

export default TodList

