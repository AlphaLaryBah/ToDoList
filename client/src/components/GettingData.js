// import React from 'react';
// import axios from 'axios';


// class GettingData extends React.Component {
//     state = {
//         task: "",
//         dataServer: [],
//         // isCompleted: true,

//     }
//     componentDidMount = () => {
//         this.dataFromServer();
//     }
//     //FETCH DATA FROM SERVER
//     dataFromServer = () => {
//         axios.get('http://localhost:8080/api')
//             .then((response) => {
//                 const data = response.data;
//                 this.setState({ dataServer: data })
//                 // console.log(this.state.dataServer)

//                 console.log("Data has been received")
//             })
//             .catch(() => {
//                 console.log("Data  NOT  received")

//             })
//     }
//     //HANDLES INPUT
//     handleTaskInputChange = (event) => {

//         const target = event.target;
//         const name = target.name;
//         const value = target.type === 'checkbox' ? target.checked : target.value;

//         this.setState({
//             [name]: value
//         });
//     }
//     //HANDLES SUBMITED FORM SENDS TO SERVER
//     handleSubmit = (event) => {
//         event.preventDefault();
//         //SERVER
//         const payload = {
//             body: this.state.task
//         }
//         console.log(payload.body)

//         axios({
//             url: 'http://localhost:8080/api/save',
//             method: 'POST',
//             data: payload
//         })
//             .then(() => {
//                 console.log("Data has been sent to the Sever")
//                 //reset the form
//                 this.resetUserInputs();
//                 this.dataFromServer();
//             })
//             .catch(() => {
//                 console.log("Data  NOT sent to the Sever")

//             });
//     }

//     //RESETS FORM
//     resetUserInputs = () => {
//         this.setState({
//             task: ""
//         });

//     }


//     //MAP DATA TO DISPLAY
//     dataSServer = this.state.dataServer;

//     dispalyList = (dataSServer) => {

//         if (!dataSServer.length) {
//             return null;
//         } else {
//             return (<ul>
//                 {dataSServer.map((list, index) => {
//                     return (
//                         <div>
//                             <div className="mb-3 " key={list._id} >
//                                 <p> {list.date}</p>
//                                 <li  >
//                                     {list.body}
//                                 </li>
//                                 <hr className="" />
//                             </div>
//                         </div>
//                     )
//                 })}
//             </ul>
//             )
//         }
//     }
//     render() {

//         return (
//             <div className="d-flex justify-content-center shadow-lg  p-3 mb-3 bg-white rounded">
//                 {this.dispalyList(this.state.dataServer)}
//             </div>
//         );
//     }
// }

// export default GettingData;

