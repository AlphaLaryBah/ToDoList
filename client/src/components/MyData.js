import React from 'react';
import { connect } from 'react-redux';
import { fetchData, selectItem } from '../redux/actions';
import { Button, Input, Table } from 'reactstrap';
import { BsCheckBox, BsTrash } from "react-icons/bs";
import axios from 'axios';
import './Mydata.css';
import DeleToggle from "./DeleToggle";
import TogleCalend from './TogleCalend'

class MyData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deletedList: [],
        };
        this.handleTaskInputChange = this.handleTaskInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleTaskInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });

    }

    handleSubmit(e) {
        e.preventDefault();
    }

    componentDidMount() {
        //function from actions
        this.props.fetchData();
        //call deleletd data function
        this.getDeletData();
    }
    //GET DELETED DATA FROM MONGOOSE
    getDeletData = () => {
        axios.get('/api/delete')
            .then((response) => {
                // console.log(response.data)
                this.setState({ deletedList: response.data })
                console.log("Deleted Data has been received")
            })
            .catch(() => {
                console.log(" Deleted Data  NOT  received")
            })
    }
    mapDelete() {
        return this.state.deletedList.map(deleted => {

            return <div key={deleted._id}>
                <ul>
                    <li>
                        <Table>
                            <thead>
                                <tr>
                                    <th> Created</th>
                                    <th> Task</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="shadow-lg  p-1 mb-1 bg-white rounded">
                                    <th scope="row" className='text-muted bg-dark text-light '>{deleted.date}</th>
                                    <td className=' '>  {deleted.body} </td>
                                    <td>  <BsCheckBox className="text-danger" /></td>
                                </tr>
                            </tbody>
                        </Table>
                    </li>
                </ul>
            </div>
        })
    }
    renderList() {
        return this.props.dataFromServer.map(list => {
            return (<div key={list._id} className="border-bottom p-1 container-fluid" >
                <div className="row">
                    <div className=" col-lg-12  d-flex justify-content-end">
                        <form>
                            <Button type="submit" className="float-right" outline color="danger" onClick={() => this.props.selectItem(list)}>Delete <BsTrash /></Button>
                        </form>
                    </div>
                    <div className="col-sm-12 d-flex justify-content-start">
                        <Input addon type="checkbox" value={list._id} className="ml-0" />
                        <p key={list.body}>{list.body}</p>
                    </div>
                    <div className="col d-flex justify-content-start">
                        <p>{list.date}</p>
                    </div>
                </div>
            </div>
            )
        });
    }

    render() {
        // console.log(this.props.dataFromServer);
        return (<div className="container-fluid ">
            <div className="row">
                <div className="col-sm-6 shadow-lg  p-1 mb-2 bg-white rounded ">

                    {this.renderList()}

                </div>
                <div className="col-sm-6">
                    <div className=" shadow-lg  p-1 mb-3 rounded  ">
                        <div className='d-flex  '>
                            <DeleToggle erased={this.mapDelete()} />
                        </div>
                        <div className=' '>
                            <TogleCalend />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

//getting all of the Data from the store map through and return it as props
const mapStateToProps = (state) => {
    //    console.log(state)
    //key dataFromServer initialized combinerReducers
    return { dataFromServer: state.dataFromServer };
}

export default connect(mapStateToProps, { fetchData, selectItem })(MyData);