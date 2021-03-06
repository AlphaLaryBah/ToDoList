import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { BsFillCalendarFill} from "react-icons/bs";
import CalendarComponent from './CalendarComponent'
const TogleCalend = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className=' p-3 mb-1 rounded'>
            <Button color="outline-dark" onClick={toggle} style={{ marginBottom: '1rem' }} className="text-center "><BsFillCalendarFill /> Calendar</Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        <CalendarComponent/>
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}

export default TogleCalend;