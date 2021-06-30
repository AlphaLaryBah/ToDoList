// import React from 'react';
// import { Button, Input } from 'reactstrap';
// import { BsTrash } from "react-icons/bs";
// import { BsCheckAll } from "react-icons/bs";

// function Todo({ todo, toggleComplete, removeTodo }) {
//     console.log(`todo form Todo : ${todo}`)
    
//     function handleCheckBoxClick() {
//         toggleComplete(todo.id);
//     }
//     function handleRemoveClick() {
//         removeTodo(todo.id)
//     }
//     return (
//         <div className="container-fluid">
//             <div className="row">
//                 <div className="col">


//                     <li className="mb-3 "
//                         style={{
//                             textDecoration: todo.completed ? "line-through" : null
//                         }} >
//                         <div className="d-flex justify-content-end">

//                             <Input type="checkbox" onClick={handleCheckBoxClick} className="  shadow-lg  p-0 bg-dark text-dark rounded-circle" /><BsCheckAll />


//                             <Button onClick={handleRemoveClick} className=" shadow-lg border-0 m-1 p-0  bg-white text-center text-danger "> <BsTrash /></Button>
//                         </div>


//                         {todo.task}


//                         <hr className="" />


//                     </li>



//                 </div>
//             </div>


//         </div>

//     );
// }
// export default Todo;


////////////////////////////////////////////////////////////////////////

//APJS
// import React from 'react';
// // import TodoForm from './components/TodoForm';
// // import TodoList from './components/TodoList';
// import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
// // import Date from './components/Date'
// // import GettingData from "./components/GettingData"
// // import axios from "axios";
// import CalendarComponent from './components/CalendarComponent';

// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
// import MyData from './components/MyData';
// import Selected from './components/Selected';
// function App() {


//     // const [todos, setTodos] = React.useState([])
//     // console.log(`todos from appjs : ${todos}`)

//     //a new todo to add into todo list
//     // function addTodo(todo) {
//     //new todo added to old ...todos array
//     // setTodos([todo, ...todos]);
//     // 
//     // }


//     // function toggleComplete(id) {
//     //   setTodos(
//     //     todos.map(todo => {
//     //       if (todo.id === id) {
//     //         return {
//     //           ...todo,
//     //           completed: !todo.completed
//     //         };
//     //       }
//     //       return todo;
//     //     })
//     //   )
//     // }
//     // function removeTodo(id) {
//     //   setTodos(todos.filter(todo => todo.id !== id));

//     // }
//     // render() {
//     return (

//         <div className="d-flex justify-content-center container-fluid w-100">
//             <div className="row  sm-w-50  mt-5 ">
//                 <CalendarComponent />

//                 <Card className="col-sm-12 col-md-12  w-100 ">
//                     <CardBody>
//                         <CardTitle tag="h5" className=" shadow-lg  p-3 mb-3 bg-white rounded text-center">TO DO LIST</CardTitle>
//                         <CardSubtitle tag="h6" className="mb-2 text-muted">
//                             {/* <Date /> */}
//                         </CardSubtitle>
//                         <CardText className=" ">

//                         </CardText>

//                         <TodoForm />
//                         {/* <TodoList todos={todos} */}
//                         {/* toggleComplete={toggleComplete}
//                removeTodo={removeTodo} */}
//                         {/* /> */}
//                         <MyData />
//                         <Selected />

//                         {/* <GettingData /> */}

//                     </CardBody>
//                 </Card>
//             </div>
//         </div>



//     );
// }




// export default App;


////////////////////////////////////////////////////////////////////////
//TODOLIST

// import React from "react";
// import Todo from './Todo';

// const TodList = ({ todos, toggleComplete, removeTodo }) => {
//      console.log(`todos form TodoList : ${todos}`)

//     //data from appjs
//     return (
//         <ul className=''>
//             {todos.map(todo => (
//                 <Todo key={todo.id}
//                     todo={todo}
//                     toggleComplete={toggleComplete}
//                     removeTodo={removeTodo}
//                 />

//             ))}
//         </ul>

//     );


// }

// export default TodList


////////////////////////////////////////////////////////////////////////


//GETINGDATA


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


////////////////////////////////////////////////////////////////////////


//DATE.JS

// import React from "react";
// import { useSelector } from 'react-redux';

// const Date = () => {
//     const todayDate = useSelector(state => state.time.today);
//     // console.log("Date is: " + todayDate)


//     return (
//         <div className="d-flex justify-content-center ">
//             <p> {todayDate}</p>
//         </div>
//     );

// }

// export default Date
/////////////////////////////////////

// import React from 'react';
// import { Button, Input } from 'reactstrap';
// import { connect } from 'react-redux';
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



/////////////////////////////////////////////////////


//  DATA FOR QUERY BY DATE



//SERVER
        // const payload = {
        //     body: this.state.query,

        // }
    //     axios({
    //         url: 'http://localhost:8080/api/query',
    //         method: 'POST',
    //         data: payload
    //     })
    //         .then(() => {
    //             console.log("Query Data has been sent to the Sever")
    //         })
    //         .catch(() => {
    //             console.log(" Query Data  NOT sent to the Sever")

    //         })
    //     this.setState({ query: "" })
//                      <div className="d-flex justify-content-center shadow-lg  p-3 mb-3 bg-white rounded ">
//                         <label>                        Find Old List By Date
//                         </label>
//                         <Form onSubmit={this.handleSubmit} className="form-control rounded ">
//                             <div className="container-fluid">


//                                 <div className="row">
//                                     <div className="col">
//                                          <Input
//                                             placeholder="Enter Date"
//                                             name="query"
//                                             type="date"
//                                             value={this.state.query}
//                                             onChange={this.handleTaskInputChange} />
                                        
//                                             <div className="col ">

//                                                 <Button
//                                                     type="submit"
//                                                     className=" form-control bg-primary mt-3 text-center rounded"

//                                                 > Find Old Task</Button>
//                                             </div>


//                                     </div>
//                                 </div>
//                             </div>

//                         </Form>
// </div>  