import React from 'react';
import { Button, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions';
import { selectItem } from '../redux/actions';
import axios from 'axios'

// import Selected from './Selected'

class MyData extends React.Component {



    componentDidMount() {
        //function from actions
        this.props.fetchData();


    }

    renderList() {


        return this.props.dataFromServer.map(list => {
            const payload = {
                delete: list._id

            }
            console.log(`payload Todoform : ${payload}`);

            axios({
                url: 'http://localhost:8080/api/save',
                method: 'POST',
                data: payload
            })
                .then(() => {
                    console.log("Data has been sent to the Sever")
                })
                .catch(() => {
                    console.log("Delete Data  NOT sent to the Sever")

                })

            return (<div key={list._id}>
                {/* <form key={list._id}> */}
                <Button type="submit" outline color="danger" onClick={() => this.props.selectItem(list)}>Delete</Button>

                <div className="" >

                    <div className='content'>
                        <Input addon type="checkbox" aria-label="Checkbox for following text input" className=" " />

                        <p>{list.date}</p>
                        <p >{list.body}</p>


                    </div>

                    <hr />
                </div>

                {/* </form> */}

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
    //key dataFromServer initialized combinerReducers
    return { dataFromServer: state.dataFromServer };


}

export default connect(mapStateToProps, { fetchData, selectItem })(MyData);