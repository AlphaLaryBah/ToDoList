import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarComponent() {


    const [date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date)
    }

    return (
        <div className="shadow-lg  p-1 mb-3 bg-white rounded">
            <Calendar
                onChange={onChange}
                value={date}
                className="shadow-lg  p-1 mb-3 bg-white rounded w-100"
            />
        </div>
    );
}
export default CalendarComponent;
