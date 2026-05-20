'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const BookedSessionModal = ({ tutor }) => {
    const { data: session, error } = authClient.useSession()
    const user = session?.user;
    const router = useRouter();
    // console.log(user, 'user');
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // console.log(data, 'sessioon book');
        const bookingData = {
            ...data,
            slot: tutor.slot,
        }
        const res = await fetch('http://localhost:8080/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        const booking = await res.json();
        console.log(booking, 'res');
        if (booking.acknowledged) {
            toast.success("Session Booked Successfully");
            router.push(`/tutors/${tutor._id}`);
            router.refresh();
            
        }
        else if (!booking.success) {
            toast.error(`${booking.message}`)
        }
    }
    return (
        <div>
            <Modal>
                <Button className="btn btn-primary btn-outline text-primary">Book Session</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading className="text-center">Book Session</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                        <TextField defaultValue={user?.name} className="w-full" name="userName" type="text" variant="secondary">
                                            <Label>Student Name</Label>
                                            <Input placeholder="Enter your name" />
                                        </TextField>
                                        <TextField defaultValue={user?.email} className="w-full" name="userEmail" type="email" variant="secondary">
                                            <Label>Student Email</Label>
                                            <Input placeholder="Enter your email" />
                                        </TextField>
                                        <TextField className="w-full" name="phone" type="tel" variant="secondary">
                                            <Label>Phone</Label>
                                            <Input placeholder="Enter your phone number" />
                                        </TextField>
                                        <TextField defaultValue={tutor._id} className="w-full" name="tutorId" variant="secondary">
                                            <Label>Tutor ID</Label>
                                            <Input placeholder="Enter your company name" />
                                        </TextField>
                                        <TextField defaultValue={tutor.tutorName} className="w-full" name="tutorName" variant="secondary">
                                            <Label>Tutor Name</Label>
                                            <Input placeholder="Enter your message" />
                                        </TextField>
                                        <Modal.Footer>
                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>
                                            <Button type='submit' slot="close">Book Session</Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default BookedSessionModal;