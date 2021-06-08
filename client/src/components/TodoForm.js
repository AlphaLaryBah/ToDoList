import React from 'react';
import uuid from 'uuid';
import { Button, Form, Input } from 'reactstrap';
import { BsPlus} from "react-icons/bs";



function TodoForm({ addTodo }) {
    const [todo, setTodo] = React.useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        //...todo brings in the old todo value , task: takes in the new value
        setTodo({ ...todo, task: e.target.value })

    }
    function handleSubmit(e) {
        e.preventDefault();
        // if todo task exist, clear all white spaces with trim() then take existing state and id number to it
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid.v4() });
            // console.log(addTodo)

        }
        //reset the form
        setTodo({ ...todo, task: "" });
    }

    return (
        <div className="d-flex justify-content-center shadow-lg  p-3 mb-3 bg-white rounded">

            <Form onSubmit={handleSubmit}>
                <Input
                    name="task"
                    type="text"
                    value={todo.task}
                    onChange={handleTaskInputChange} />
                <Button
                    type="submit"
                    className="bg-success mt-3 text-center rounded-circle"
                ><BsPlus/></Button>
            </Form>

        </div>





    );
}

export default TodoForm;