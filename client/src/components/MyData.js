import React from 'react';
import { connect } from 'react-redux';
import { fetchData, selectItem } from '../redux/actions';
import { Button, Input, Table } from 'reactstrap';
import { BsCheckBox, BsTrash} from "react-icons/bs";
import axios from 'axios';
import './Mydata.css';
import DeleToggle from "./DeteToggle";
import TogleCalend from './TogleCalend'

class MyData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deletedList: [],
            query: ""
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

        console.log(this.state.query)
        //SERVER
        const payload = {
            body: this.state.query,

        }
        //  console.log(`payload Todoform : ${payload}`);

        axios({
            url: 'http://localhost:8080/api/query',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log("Query Data has been sent to the Sever")
            })
            .catch(() => {
                console.log(" Query Data  NOT sent to the Sever")

            })
        this.setState({ query: "" })


    }
    componentDidMount() {
        //function from actions
        this.props.fetchData();
        this.getDeletData();


    }
    getDeletData = () => {
        axios.get('http://localhost:8080/api/delete')
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
        // let time= this.state.query
        // const result = this.state.deletedList.filter(dates => {
        //     console.log(dates.createdAt)
        //     return dates.createdAt === this.state.query
        // });
        // console.log("result" + result)

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
                                <tr>
                                    <th scope="row">{deleted.date}</th>
                                    <td>  {deleted.body} </td> 
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
                    <div className="col d-flex justify-content-end">
                        <form>
                            <Button type="submit" className="float-right" outline color="danger" onClick={() => this.props.selectItem(list)}>Delete <BsTrash /></Button>
                        </form>
                    </div>
                    {/* <div className="row"> */}

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
                <div className="col-sm-6">

                    {this.renderList()}

                </div>
                <div className="col-sm-6">
                    {/* <div className="d-flex justify-content-center shadow-lg  p-3 mb-3 bg-white rounded ">
                        <label>                        Find Old List By Date
                        </label>
                        <Form onSubmit={this.handleSubmit} className="form-control rounded ">
                            <div className="container-fluid">


                                <div className="row">
                                    <div className="col">
                                         <Input
                                            placeholder="Enter Date"
                                            name="query"
                                            type="date"
                                            value={this.state.query}
                                            onChange={this.handleTaskInputChange} />
                                        
                                            <div className="col ">

                                                <Button
                                                    type="submit"
                                                    className=" form-control bg-primary mt-3 text-center rounded"

                                                > Find Old Task</Button>
                                            </div>


                                    </div>
                                </div>
                            </div>

                        </Form>
                    </div> */}

                    <div className=" shadow-lg  p-1 mb-3 bg-dark rounded  ">
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