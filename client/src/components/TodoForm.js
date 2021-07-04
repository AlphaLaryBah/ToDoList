import React from 'react';
import { Button, Form, Input } from 'reactstrap';
import { BsPlusCircle } from "react-icons/bs";
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions';
import { selectItem } from '../redux/actions';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        };
        this.handleTaskInputChange = this.handleTaskInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTaskInputChange(e) {
        this.setState({ task: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();

        //SERVERSENDS INPUT TO SERVER
        const payload = {
            body: this.state.task,
        }
        axios({
            url: 'api/save',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log("Data has been sent to the Sever")
                this.props.fetchData();
                this.props.selectItem()
            })
            .catch(() => {
                console.log("Data  NOT sent to the Sever")

            })
        this.setState({ task: "" })

    }
    render() {
        return (
            <div className="d-flex justify-content-center shadow-lg  p-3 mb-3 bg-white rounded ">
                <Form onSubmit={this.handleSubmit} className="form-control rounded ">
                    <div className="container-fluid">
                        <div className="rov">
                            <div className="col">
                                <Input
                                    placeholder="What To Do?"
                                    name="task"
                                    type="text"
                                    value={this.state.task}
                                    autoComplete="off"
                                    onChange={this.handleTaskInputChange} />

                                <div className="col ">

                                    <Button
                                        type="submit"
                                        className=" form-control  mt-3 text-center rounded"
                                    ><BsPlusCircle /> Add To List</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    //key dataFromServer initialized combinerReducers
    return { dataFromServer: state.dataFromServer };
}

export default connect(mapStateToProps, { fetchData, selectItem })(TodoForm);