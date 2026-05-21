'use client'
import { AlertDialog, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const MyBookedSessionAlert = ({myBooked}) => {
    const router = useRouter();
    const handleCancelSession = async ()=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${myBooked._id}`,{
            method: "PATCH",
            headers: {
                'content-type' : 'applicatiob/json'
            }
        })
        const data = await res.json();
        if(data.modifiedCount > 0){
            toast.error("Session is Cancelled")
            router.push('/my-booked-session')
            router.refresh();
        }
        // console.log(data, 'cancel update');
    }
    return (
        <div>
            <AlertDialog>
                <Button isDisabled={myBooked.bookingStatus === "Cancelled"} variant='danger'>X</Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-100">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Cancel Session permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently cancel <strong>{myBooked.tutorName}'s Session</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleCancelSession} slot="close" variant="danger">
                                    Cancel Session
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default MyBookedSessionAlert;