// import React from 'react';
// import { Button, Input } from 'reactstrap';
// import { BsTrash } from "react-icons/bs";
// import { BsCheckAll } from "react-icons/bs";




// function Todo({ todo, toggleComplete, removeTodo }) {
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

//                             <Input type="checkbox" onClick={handleCheckBoxClick} className="  shadow-lg  p-0 bg-dark text-dark rounded-circle"  /><BsCheckAll/>
//                         {/* </div> */}
//                         {/* <div className="d-flex justify-content-end mt-0 "> */}

//                             <Button onClick={handleRemoveClick} className=" shadow-lg border-0 m-1 p-0  bg-white text-center text-danger "> <BsTrash /></Button>
//                             </div>
//                         {/* </div> */}


//                         {todo.task}


//                         <hr className="" />


//                     </li>



//                 </div>
//             </div>


//         </div>

//     );
// }
// export default Todo;