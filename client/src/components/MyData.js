import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions'




class MyData extends React.Component {
    componentDidMount() {
        //function from actions
        this.props.fetchData();
    }
    renderList() {
        return this.props.dataFromServer.map(list => {
            //  console.log(list._id)

            return (<div className="" key={list._id}>
                <div className="">
                    <button className=''

                    >
                        Delete
                    </button>

                </div>
                <div className='content'>
                    <p>{list.date}</p>
                    <p>{list.body}</p>


                </div>

            </div>

            )

        });
    }



    render() {
        // console.log(this.props.dataFromServer);

        return (
            //if you say this.props it will ==={songs:state.songs}
            <div className="">

                {/* <h1>Song List</h1> */}
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

export default connect(mapStateToProps, { fetchData })(MyData);