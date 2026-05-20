import React from 'react';

const MyBookedSession = async () => {
    const res = await fetch('http://localhost:8080/bookings');
    const data = await res.json();
    console.log(data, 'session my');

    // console.log((new Date()) < (new Date(data[0].sessionStartDate)));
    return (
        <div>
            my booked session
        </div>
    );
};

export default MyBookedSession;