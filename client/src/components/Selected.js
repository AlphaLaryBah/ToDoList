import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { selectItem } from '../redux/actions';

const Selected = ({ selected }) => {

    const payload = {
        delete: selected,
    }

    //SAVE DATA SELECTED API DELETE
    axios({
        url: 'http://localhost:8080/api/delete',
        method: 'POST',
        data: payload
    })
        .then(() => {
            console.log("Data has been sent to the Sever")
        })
        .catch(() => {
            console.log("Delete Data  NOT sent to the Sever");


        });
    
    //SAVE DATA SELECTED API DELETE
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
    if (!selected) {
        return <div> </div>
    }
    return (
         <div className="" >

         </div>
    );

}
const mapStateToProps = (state) => {
    return {
        selected: state.selected
    }

}

export default connect(mapStateToProps, { selectItem })(Selected);

