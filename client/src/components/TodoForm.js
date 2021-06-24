import React from 'react';
// import uuid from 'uuid';
import { Button, Form, Input } from 'reactstrap';
import { BsPlus } from "react-icons/bs";
import axios from 'axios';



function TodoForm({ addTodo }) {
    const [todo, setTodo] = React.useState({
        task: ""

    });
    // console.log(`todos form TodoForm : ${todo}`)



    function handleTaskInputChange(e) {
        //...todo brings in the old todo value , task: takes in the new value
        setTodo({ ...todo, task: e.target.value })

    }
    function handleSubmit(e) {
        // e.preventDefault();

        //SERVER
        const payload = {
            body: todo.task,

        }
        //  console.log(`payload Todoform : ${payload}`);

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
       

    }

    return (
        <div className="d-flex justify-content-center shadow-lg  p-3 mb-3 bg-white rounded ">
            <Form onSubmit={handleSubmit} className="form-control rounded bg-dark">
                <div className="container-fluid">
                    

                <div className="rov">
                    <div className="col">
                            <Input
                                placeholder="What To Do?"
                            name="task"
                            type="text"
                            value={todo.task}
                            onChange={handleTaskInputChange} />
                    
                    <div className="col ">

                        <Button
                            type="submit"
                                    className=" form-control bg-success mt-3 text-center rounded"
                        ><BsPlus /> Add To List</Button>


                    </div>
                    </div>
                </div>
</div>

            </Form>
        </div>





    );
}

export default TodoForm;