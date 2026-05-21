import MyBookedSessionTableRow from '@/components/MyBookedSessionTableRow';
import { auth } from '@/lib/auth';
import { Table } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';

export const metadata = {
    title: "My Booking Session | MediQueue",
    description: "Tutor Booking System",
};

const MyBookedSession = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user;
    // console.log(user, 'user session');
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    console.log(data, 'session my');
    const myBookedSessions = data?.filter(myBookedSession => myBookedSession.userEmail == user.email);
    // console.log(myBookedSessions, 'email');
    return (
        <div className="max-w-7xl mx-auto my-10">
            {
                myBookedSessions.length > 0 ? (<Table>
                    <Table.ScrollContainer>
                        <Table.Content aria-label="Team members" className="min-w-150]">
                            <Table.Header>
                                <Table.Column isRowHeader>Student Name</Table.Column>
                                <Table.Column>Student Email</Table.Column>
                                <Table.Column>Phone</Table.Column>
                                <Table.Column>Tutor Name</Table.Column>
                                <Table.Column>Status</Table.Column>
                                <Table.Column>Cancel</Table.Column>
                            </Table.Header>
                            <Table.Body>
                                {
                                    myBookedSessions.map(myBooked => <MyBookedSessionTableRow key={myBooked._id} myBooked={myBooked}></MyBookedSessionTableRow>)
                                }
                            </Table.Body>
                        </Table.Content>
                    </Table.ScrollContainer>
                </Table>) : (
                    <div className="">
                        <span className='text-muted flex justify-center items-center min-h-20'>No Bookings at the moment.</span>
                    </div>
                )
            }

        </div>
    );
};

export default MyBookedSession;