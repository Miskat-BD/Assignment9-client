import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TutorCard = ({ tutor }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-sm border">
                <figure>
                    <Image
                        src={tutor.tutorImageUrl}
                        width={400} height={300}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{tutor.name || tutor.tutorName}</h2>
                    <p>Subject: {tutor.subject}</p>
                    <p>Session Start: {tutor.sessionStartDate}</p>
                    <div className="card-actions justify-center">
                        <Link href={`/tutors/${tutor._id}`}><button className="btn btn-primary w-full">Book Session</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorCard;