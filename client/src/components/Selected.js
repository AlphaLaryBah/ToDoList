import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const Selected = ({ selected }) => {
    console.log(selected)
    // const payload = {
    //     delete: selected

    // }
    // console.log(`payload Todoform : ${payload}`);

    // axios({
    //     url: 'http://localhost:8080/api/save',
    //     method: 'POST',
    //     data: payload
    // })
    //     .then(() => {
    //         console.log("Data has been sent to the Sever")
    //     })
    //     .catch(() => {
    //         console.log("Delete Data  NOT sent to the Sever")

    //     })


    if (!selected) {
        return <div>List Of Delete Items</div>
    }
    return (
        
        <div className="">
            <h1>Deleted From List</h1>
            <p>Date: {selected.date} <br />
                Deleted Item: {selected.body}
                Deleted Item: {selected._id}
            </p>


        </div>
    );

}
const mapStateToProps = (state) => {
    console.log(state.selected)


    return {
        selected: state.selected
    }

}

export default connect(mapStateToProps)(Selected);