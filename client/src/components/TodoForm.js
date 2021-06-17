import React from 'react';
import uuid from 'uuid';
import { Button, Form, Input } from 'reactstrap';
import { BsPlus } from "react-icons/bs";
import axios from 'axios';



function TodoForm({ addTodo }) {
    const [todo, setTodo] = React.useState({
        id: "",
        task: "",
        dataServer: [],
        completed: false,
    });

    // useEffect(() => {
    //     todo.dataServer
    //     // dataFromServer()
    // });

    //FETCH DATA FROM SERVER
    // function dataFromServer() {
    //     axios.get('http://localhost:8080/api')
    //         .then((response) => {
    //             const data = response.data;
    //             setTodo({ dataServer: data })
    //             console.log(`Fetched from server: TodoFor : ${todo.dataServer}`)


    //             console.log("Data has been received")
    //         })
    //         .catch(() => {
    //             console.log("Data  NOT  received")

    //         })
    // }

    function handleTaskInputChange(e) {
        //...todo brings in the old todo value , task: takes in the new value
        setTodo({ ...todo, task: e.target.value })

    }
    function handleSubmit(e) {
        e.preventDefault();

        //SERVER
        const payload = {
            body: todo.task,
            completed: todo.completed

        }
        // console.log(`payload TodoLis : ${payload}`)
        axios({
            url: 'http://localhost:8080/api/save',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log("Data has been sent to the Sever")
            })
            .catch(() => {
                console.log("Data  NOT sent to the Sever")

            })
        // if todo task exist, clear all white spaces with trim() then take existing state and add id number to it
        if (todo.task) {
            addTodo({ ...todo, id: todo.dataServer._id });

            addTodo({ ...todo, id: uuid.v4() });
            // console.log(addTodo)
            // console.log(todo.completed)
        }
        //reset the form
        setTodo({ ...todo, task: "", completed: false });

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
                ><BsPlus /></Button>
            </Form>
        </div>





    );
}

export default TodoForm;