import Image from 'next/image';
import React from 'react';

const TutorCard = ({ tutor }) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm border">
                <figure>
                    <Image
                        src={tutor.tutorImageUrl}
                        width={300} height={300}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{tutor.name}</h2>
                    <p>Subject: {tutor.subject}</p>
                    <p>Session Start: {tutor.sessionStartDate}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Book Session</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorCard;