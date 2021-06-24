import React from 'react';
import { Button, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions';
import { selectItem } from '../redux/actions';
import axios from 'axios';
import './Mydata.css';

// import Selected from './Selected'

class MyData extends React.Component {


    componentDidMount() {
        //function from actions
        this.props.fetchData();
        this.renderList()
    }
    RenderData() {

    }

    renderList() {

        return this.props.dataFromServer.map(list => {

            return (<div key={list._id} className="border-bottom p-1 container-fluid" >
                <div className="row">
                    <div className="col d-flex justify-content-end">
                        
                        <Button type="submit" className="float-right"outline color="danger" onClick={() => this.props.selectItem(list)}>Delete</Button>

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

        return (
                <div className="">

                    {this.renderList()}

                </div>
                );
    }
}

//getting all of the Data from the store map through and return it as props
const mapStateToProps = (state) => {
    // console.log(state)
    //key dataFromServer initialized combinerReducers
    return {dataFromServer: state.dataFromServer };


}

                export default connect(mapStateToProps, {fetchData, selectItem})(MyData);