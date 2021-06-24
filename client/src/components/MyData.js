import React from 'react';
import { connect } from 'react-redux';
import { fetchData, selectItem } from '../redux/actions';
import { Button, Form, Input } from 'reactstrap';
import { BsPlus } from "react-icons/bs";
// import { selectItem } from '../redux/actions';
import axios from 'axios';
import './Mydata.css';


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



    handleTaskInputChange(e) {
        this.setState({ task: e.target.value })

    }
    handleSubmit(e) {
        e.preventDefault();
    }
    componentDidMount() {
        //function from actions
        this.props.fetchData();
        this.getDeletData();
    }
    getDeletData = () => {
        axios.get('http://localhost:8080/api/delete')
            .then((response) => {
                console.log(response.data)
                this.setState({ deletedList: response.data })
                console.log("Data has been received")
            })
            .catch(() => {
                console.log("Data  NOT  received")

            })

    }
    mapDelete() {
        return this.state.deletedList.map(deleted => {
            return <di>
                <p>{deleted.date}</p>
                <p>{deleted.body}</p>
            </di>

        })

    }



    renderList() {

        return this.props.dataFromServer.map(list => {

            return (<div key={list._id} className="border-bottom p-1 container-fluid" >
                <div className="row">
                    <div className="col d-flex justify-content-end">
                        <form>
                            <Button type="submit" className="float-right" outline color="danger" onClick={() => this.props.selectItem(list)}>Delete</Button>
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
                {/* </div> */}



                {/* <div className="" >
                    <div className='content' >
                        
                     

                    </div>

                </div> */}


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
                    <div className="d-flex justify-content-center shadow-lg  p-3 mb-3 bg-white rounded ">
                        <Form onSubmit={this.handleSubmit} className="form-control rounded bg-dark">
                            <div className="container-fluid">


                                <div className="rov">
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
                    </div>

                    <div className=" shadow-lg  p-3 mb-3 bg-white rounded ">
                        {this.mapDelete()}

                    </div>
                </div>

            </div>

        </div>

        );
        // })
    }

}

//getting all of the Data from the store map through and return it as props
const mapStateToProps = (state) => {
    //    console.log(state)
    //key dataFromServer initialized combinerReducers
    return { dataFromServer: state.dataFromServer };


}

export default connect(mapStateToProps, { fetchData, selectItem })(MyData);