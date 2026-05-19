'use client'
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";

const TutorDeleteAlert = ({ myTutor }) => {
    const {_id, name, tutorImageUrl, subject, teachingMode, location, availableDays, sessionStartDate, slot, fee, experience, tutorName } = myTutor;
    const handleDelete = async () => {
        const res = await fetch(`http://localhost:8080/tutors/${_id}`,{
            method: "DELETE",
            headers: {
                'conetent-type': 'application/json'
            }
        });
        const data = await res.json();
        // console.log(data);
        if(data.deletedCount > 0){
            toast.warning('Tutor is Deleted');
            redirect('/my-tutors')
        }
    }
    return (
        <div>
            <AlertDialog>
                <Button variant="outline" className='text-red-500'><RiDeleteBin6Line /></Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-100">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete Tutor permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong>{name || tutorName}</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleDelete} slot="close" variant="danger">
                                    Delete Tutor
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default TutorDeleteAlert;