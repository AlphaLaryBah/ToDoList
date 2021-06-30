import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { BsFolderCheck } from "react-icons/bs";

const DeleToggle = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='p-3 mb-1 rounded '>
            <Button color="outline-dark" onClick={toggle} style={{ marginBottom: '1rem' }} className="text-center "><BsFolderCheck /> Task History</Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        {props.erased}

                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}

export default DeleToggle;