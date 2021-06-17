
import React from 'react';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Date from './components/Date'
// import GettingData from "./components/GettingData"
// import axios from "axios";
import CalendarComponent from './components/CalendarComponent';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import MyData from './components/MyData';

function App() {


  const [todos, setTodos] = React.useState([])

  //a new todo to add into todo list
  function addTodo(todo) {
    //new todo added to old ...todos array
    setTodos([todo, ...todos])
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    )

  }
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));

  }
  // render() {
  return (

    <div className="d-flex justify-content-center container-fluid w-100">
      <div className="row  sm-w-50  mt-5 ">
        <CalendarComponent />

        <Card className="col-sm-12 col-md-12  w-100 ">
          <CardBody>
            <CardTitle tag="h5" className=" shadow-lg  p-3 mb-3 bg-white rounded text-center">TO DO LIST</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {/* <Date /> */}
            </CardSubtitle>
            <CardText className=" ">

            </CardText>

            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo}
            />
            <MyData />

            {/* <GettingData /> */}

          </CardBody>
        </Card>
      </div>
    </div>



  );
}




export default App;
