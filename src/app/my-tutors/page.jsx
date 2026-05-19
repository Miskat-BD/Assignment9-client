import MyTutorsTableRow from '@/components/MyTutorsTableRow';
import { auth } from '@/lib/auth';
import { Table } from '@heroui/react';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

export const metadata = {
  title: "My Tutor | MediQueue",
  description: "Tutor Booking System",
};

const MyTutorsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    // console.log(session, 'mt-tutor');
    if (!session) {
        redirect('/')
    }
    const user = session?.user;
    const res = await fetch(`http://localhost:8080/my-tutor/${user.id}`,{
        cache: 'no-store'
    });
    const myTutors = await res.json();
    // console.log(myTutors, 'my');
    return (
        <div className='max-w-7xl mx-auto my-10'>
            {
                myTutors.length > 0 ? (<Table>
                    <Table.ScrollContainer>
                        <Table.Content aria-label="Team members" className="min-w-150">
                            <Table.Header>
                                <Table.Column isRowHeader>Tutor Name</Table.Column>
                                <Table.Column>Subject</Table.Column>
                                <Table.Column>Available</Table.Column>
                                <Table.Column>Hourly Fee</Table.Column>
                                <Table.Column>Total Slot</Table.Column>
                                <Table.Column>Session Start</Table.Column>
                                <Table.Column>Action</Table.Column>
                            </Table.Header>
                            <Table.Body>
                                {
                                    myTutors.map(myTutor => <MyTutorsTableRow key={myTutor._id} myTutor={myTutor}></MyTutorsTableRow>)
                                }
                            </Table.Body>
                        </Table.Content>
                    </Table.ScrollContainer>
                </Table>) : (<div className="">
                    <span className='text-muted flex justify-center items-center min-h-20'>No tutors available at the moment.</span>
                </div>)
            }
        </div>
    );
};

export default MyTutorsPage;