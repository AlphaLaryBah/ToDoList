import React from 'react';
import axios from 'axios';
import { Button, Form, Input } from 'reactstrap';
import { BsPlus } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { BsCheckAll } from "react-icons/bs";


class GettingData extends React.Component {
    state = {
        id: '',
        date: "",
        task: "",
        dataServer: [],
        completed: false,

    }

    componentDidMount = () => {
        this.dataFromServer();
    }

    //FETCH DATA FROM SERVER
    dataFromServer = () => {
        axios.get('http://localhost:8080/api')
            .then((response) => {
                const data = response.data;
                this.setState({ dataServer: data })
                console.log(this.state.dataServer)


                console.log("Data has been received")
            })
            .catch(() => {
                console.log("Data  NOT  received")

            })

    }
    //HANDLES INPUT
    handleTaskInputChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });

    }
    //HANDLES SUBMITED FORM SENDS TO SERVER
    handleSubmit = (event) => {
        event.preventDefault();

        //SERVER
        const payload = {
            body: this.state.task

        }
        console.log(payload.body)
        axios({
            url: 'http://localhost:8080/api/save',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log("Data has been sent to the Sever")
                //reset the form
                this.resetUserInputs();
                this.dataFromServer();
            })
            .catch(() => {
                console.log("Data  NOT sent to the Sever")

            })


    }
    //RESETS FORM
    resetUserInputs = () => {
        this.setState({ task: "" });

    }

    //MAP DATA TO DISPLAY
    dataSServer = this.state.dataServer;
    dispalyList = (dataSServer) => {
        if (!dataSServer.length) {
            return null;
        } else {
            return dataSServer.map((list, index) => {
                // console.log(index)
                return (
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <div key={index} className="mb-3 "
                                    style={{
                                        textDecoration: this.state.dataServer.completed ? "line-through" : null
                                    }}>
                                    <ul>
                                        <p> {list.date}</p>
                                        <li><p> {list.body}</p>
                                            <div className="d-flex justify-content-end">


                                                <Input type="checkbox" className="  shadow-lg  p-0 bg-dark text-dark rounded-circle" /><BsCheckAll />

                                                <Button className=" shadow-lg border-0 m-1 p-0  bg-white text-center text-danger "> <BsTrash /></Button>
                                            </div>


                                            {/* {todo.task} */}


                                            <hr className="" />
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>

                )
            });

        }

    }

    render() {
        return (
            <div className="d-flex justify-content-center shadow-lg  p-3 mb-3 bg-white rounded">

                <Form onSubmit={this.handleSubmit}>
                    <Input
                        name="task"
                        type="text"
                        value={this.state.task}
                        onChange={this.handleTaskInputChange} />
                    <Button
                        type="submit"
                        className="bg-success mt-3 text-center rounded-circle"
                    ><BsPlus /></Button>
                </Form>
                <div className="list">
                    {this.dispalyList(this.state.dataServer)}

                </div>
            </div>

        );
    }

}

export default GettingData