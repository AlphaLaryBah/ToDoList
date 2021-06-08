import React from "react";
import { useSelector } from 'react-redux';

const Date = () => {
    const todayDate = useSelector(state => state.time.today);
    console.log("Date is: " + todayDate)


    return (
        <div className="d-flex justify-content-center ">
            <p> {todayDate }</p>
        </div>
    );

}

export default Date

