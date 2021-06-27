
import React from 'react';

import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import CalendarComponent from './components/CalendarComponent';

import TodoForm from './components/TodoForm';
import MyData from './components/MyData';
import Selected from './components/Selected';


function App() {
  return (

    <div className="d-flex justify-content-center container-fluid w-100">
      <div className="row  sm-w-50  mt-5 ">
        <CalendarComponent />

        <Card className="col-sm-12 col-md-12  w-100 ">
          <CardBody>
            <CardTitle tag="h5" className=" shadow-lg  p-3 mb-3 bg-white rounded text-center">TO DO LIST</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
            </CardSubtitle>
            <CardText className=" ">

            </CardText>
            <TodoForm />

            <div className="row">
              <div className="col-sm-9">
                <MyData />

              </div>
              <div className="col ">
                <Selected />

              </div>

            </div>

          </CardBody>
        </Card>
      </div>
    </div>



  );
}




export default App;
