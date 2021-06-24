import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const Selected = ({ selected }) => {

    const payload = {
        delete: selected,
    }
    // console.log(`payload Todoform : ${payload}`);

    axios({
        url: 'http://localhost:8080/api/delete',
        method: 'POST',
        data: payload
    })
        .then(() => {
            console.log("Data has been sent to the Sever")
        })
        .catch(() => {
            console.log("Delete Data  NOT sent to the Sever")

        });
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

        <div className=" shadow-lg  p-3 mb-3 bg-white rounded border-left" >
            <h1 className="text-center">Yay!!!</h1>
            <ul>
                <li>  <h3> Task Completed : <br /></h3>
                    <ul>
                        <li><p>{`" ${selected.body} " `}</p></li>
                    </ul>

                </li>
            </ul>

        </div>
    );

}
const mapStateToProps = (state) => {
    // console.log(state.selected)


    return {
        selected: state.selected
    }

}

export default connect(mapStateToProps)(Selected);

