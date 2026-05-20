import React from 'react';
import TutorDeleteAlert from './TutorDeleteAlert';
import TutorEditModal from './TutorEditModal';
import { Button, Table } from '@heroui/react';
import MyBookedSessionAlert from './MyBookedSessionAlert';

const MyBookedSessionTableRow = ({ myBooked }) => {
    // console.log(myBooked, 'booked');
    const { userName, userEmail, phone, tutorName, bookingStatus } = myBooked;
    return (
        <Table.Row>
            <Table.Cell>{userName}</Table.Cell>
            <Table.Cell>{userEmail}</Table.Cell>
            <Table.Cell>{phone}</Table.Cell>
            <Table.Cell>{tutorName}</Table.Cell>
            <Table.Cell><span className={`${myBooked.bookingStatus == 'Booked' ? 'bg-green-300' : 'bg-red-300'} p-1 rounded-full text-black`}>{bookingStatus}</span></Table.Cell>
            <Table.Cell>
                <MyBookedSessionAlert myBooked={myBooked}></MyBookedSessionAlert>
            </Table.Cell>
        </Table.Row>
    );
};

export default MyBookedSessionTableRow;