import BookedSessionModal from '@/components/BookedSessionModal';
import Image from 'next/image';
export const metadata = {
    title: "Tutor Details | MediQueue",
    description: "Tutor Booking System",
};
const TutorDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:8080/tutors/${id}`);
    const tutor = await res.json();
    // console.log(tutor, 'tutor');
    const { name, tutorImageUrl, subject, teachingMode, location, availableDays, sessionStartDate, slot, fee, experience, tutorName } = tutor;
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <div className="card lg:card-side  shadow-sm">
                <figure>
                    <Image
                        src={tutorImageUrl}
                        alt={name || tutorName}
                        width={500} height={500} />
                </figure>
                <div className="space-y-10 mt-5 card-body">
                    <div className="space-y-3">
                        <h2 className="font-bold text-2xl">{name || tutorName}</h2>
                        <p className='text-muted mb-10'>{subject}</p>
                        <p className=''><span className='font-bold'>Experience: </span>{experience}</p>
                        <p className=''><span className='font-bold'>Location: </span>{location}</p>
                        <p className=''><span className='font-bold'>Mode: </span>{teachingMode}</p>
                        <p className=''><span className='font-bold'>Available days: </span>{availableDays}</p>
                        <p className=''><span className='font-bold'>Hourly Fee: </span>${fee}</p>
                        <p className=''><span className='font-bold'>Session Start Date: </span>{sessionStartDate}</p>
                        <p className=''><span className='font-bold'>Remaininig Slot: </span>{slot}</p>
                    </div>
                    <div className="flex justify-center sm:justify-end">
                        <BookedSessionModal tutor={tutor}></BookedSessionModal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorDetailsPage;