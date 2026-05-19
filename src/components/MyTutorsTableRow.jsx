import { Table } from '@heroui/react';
import React from 'react';
import { MdOutlineModeEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import TutorDeleteAlert from './TutorDeleteAlert';
import TutorEditModal from './TutorEditModal';

const MyTutorsTableRow = ({ myTutor }) => {
    const { _id, tutorName, subject, availableDays, fee, slot, sessionStartDate } = myTutor;
    // console.log('_id, ', myTutor);
    return (
        <Table.Row>
            <Table.Cell>{tutorName}</Table.Cell>
            <Table.Cell>{subject}</Table.Cell>
            <Table.Cell>{availableDays}</Table.Cell>
            <Table.Cell>${fee}</Table.Cell>
            <Table.Cell>{slot}</Table.Cell>
            <Table.Cell>{sessionStartDate}</Table.Cell>
            <Table.Cell>
                <div className="flex gap-5">
                    <TutorDeleteAlert myTutor={myTutor} />
                    <TutorEditModal myTutor={myTutor}/>
                </div>
            </Table.Cell>
        </Table.Row>

    );
};

export default MyTutorsTableRow;