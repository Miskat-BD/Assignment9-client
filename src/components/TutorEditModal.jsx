"use client";
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MdOutlineModeEdit } from "react-icons/md";

const TutorEditModal = ({ myTutor }) => {
    // console.log(myTutor, 'edit');
    const { _id, tutorName, subject, availableDays, fee, slot, sessionStartDate, userName, userId, experience, tutorImageUrl, teachingMode, location } = myTutor;
    const router = useRouter();
    const formatForInput = sessionStartDate ? new Date(sessionStartDate).toISOString().split('T')[0] : "";
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const updateData = Object.fromEntries(formData.entries());
        if (updateData.sessionStartDate) {
            updateData.sessionStartDate = new Date(updateData.sessionStartDate);
        }
        // console.log(updateData, 'upadted');
        const res = await fetch(`http://localhost:8080/tutors/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(updateData)
        });
        const tutor = await res.json();
        console.log(tutor, 'updated data');
        if(tutor.modifiedCount > 0){
            toast.success('Tutor Information Updated');
            router.push('/my-tutors');
            router.refresh();
        }
    }
    return (
        <div>
            <Modal>
                <Button variant="outline" className='text-green-500'><MdOutlineModeEdit /></Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading>Edit Tutor Information</Modal.Heading>

                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form
                                        onSubmit={onSubmit}
                                        className="p-10 space-y-8  mx-auto"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {/* Tutor Name */}
                                            <div className="md:col-span-2">
                                                <TextField defaultValue={tutorName} name="tutorName" isRequired>
                                                    <Label>Tutor Name</Label>
                                                    <Input placeholder="Write Tutor Name" className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* experience */}
                                            <TextField defaultValue={experience} name="experience" isRequired>
                                                <Label>Experience</Label>
                                                <Input placeholder="" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>

                                            {/* Subject - Updated Select Component */}
                                            <div>
                                                <Select
                                                    name="subject"
                                                    isRequired
                                                    className="w-full"
                                                    placeholder="Select Subject"
                                                    defaultValue={subject}
                                                >
                                                    <Label>Subject</Label>
                                                    <Select.Trigger className="rounded-2xl">
                                                        <Select.Value />
                                                        <Select.Indicator />
                                                    </Select.Trigger>
                                                    <Select.Popover>
                                                        <ListBox>
                                                            <ListBox.Item id="Machematics" textValue="Machematics">
                                                                Machematics
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Physics" textValue="Physics">
                                                                Physics
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Chemistry" textValue="Chemistry">
                                                                Chemistry
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Biology" textValue="Biology">
                                                                Biology
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="ICT" textValue="ICT">
                                                                ICT
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="English" textValue="English">
                                                                English
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>

                                            {/* fee */}
                                            <TextField defaultValue={fee} name="fee" type="number" isRequired>
                                                <Label>Hourly fee</Label>
                                                <Input
                                                    type="number"
                                                    placeholder="1299"
                                                    className="rounded-2xl "
                                                />
                                                <FieldError />
                                            </TextField>


                                            {/* Session Start Date */}
                                            <div className="md:col-span-2">
                                                <TextField defaultValue={formatForInput} name="sessionStartDate" type="date" isRequired>
                                                    <Label>Session Start Date</Label>
                                                    <Input type="date" className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Image URL - Removed preview */}
                                            <div className="md:col-span-2">
                                                <TextField defaultValue={tutorImageUrl} name="tutorImageUrl" isRequired>
                                                    <Label>Tutor Image URL</Label>
                                                    <Input
                                                        type="url"
                                                        placeholder="https://example.com/bali-paradise.jpg"
                                                        className="rounded-2xl"
                                                    />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Available Days */}
                                            <div className="md:col-span-2">
                                                <TextField defaultValue={availableDays} name="availableDays" isRequired>
                                                    <Label>Available Days</Label>
                                                    <TextArea
                                                        placeholder="Sun, Mon, Tues,..."
                                                        className="rounded-3xl"
                                                    />
                                                    <FieldError />
                                                </TextField>
                                            </div>
                                            {/* Location */}
                                            <div className="md:col-span-2">
                                                <TextField defaultValue={location} name="location" isRequired>
                                                    <Label>Location</Label>
                                                    <TextArea
                                                        placeholder="Write the location..."
                                                        className="rounded-3xl"
                                                    />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Teaching Mode */}
                                            <div>
                                                <Select
                                                    name="teachingMode"
                                                    isRequired
                                                    className="w-full"
                                                    placeholder="Select Subject"
                                                    defaultValue={teachingMode}
                                                >
                                                    <Label>Teaching Mode</Label>
                                                    <Select.Trigger className="rounded-2xl">
                                                        <Select.Value />
                                                        <Select.Indicator />
                                                    </Select.Trigger>
                                                    <Select.Popover>
                                                        <ListBox>
                                                            <ListBox.Item id="Online" textValue="Online">
                                                                Online
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Offline" textValue="Offline">
                                                                Offline
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Both" textValue="Both">
                                                                Both
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>
                                        </div>

                                        {/* Buttons */}

                                        <Button
                                            type="submit"
                                            variant="outline"
                                            // isLoading={isPending}
                                            className=" rounded-none w-full bg-cyan-500 text-white"
                                        >
                                            {/* {isPending ? "Adding Package..." : "Add Travel Package"} */}
                                            Update
                                        </Button>
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

export default TutorEditModal;