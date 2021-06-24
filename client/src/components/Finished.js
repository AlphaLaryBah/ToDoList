import React from 'react';
// import { Button, Input } from 'reactstrap';
import { connect } from 'react-redux';
// import { doneData } from '../redux/actions';
// import axios from 'axios'
// class MyData extends React.Component {


//     componentDidMount() {
//         //function from actions
//          this.props.doneData();
//         // const d = [];
//         // console.log(d)
       
//     }
// //FETCH DATA FROM SERVER
//     //  dataFromServer = () => {
        
//     //  }

//     renderList() {
       

//         return this.props.done.map(list => {

//             return (<div key={list._id} className="border-bottom p-1" >
//                 <div className="" >
//                     <div className='content' >

//                         <p key={list.body}>{list.body}</p>
//                         <p>{list.date}</p>

//                     </div>

//                 </div>


//             </div>
//             )





//         });
//     }



//     render() {
//         // console.log(this.props.done);

//         return (
//             <div className="">

//                 {this.renderList()}

//             </div>
//         );
//     }
// }

// //getting all of the Data from the store map through and return it as props
// const mapStateToProps = (state) => {
//     console.log(state)
//     return { done: state.done };


// }

// export default connect(mapStateToProps, { doneData })(MyData);