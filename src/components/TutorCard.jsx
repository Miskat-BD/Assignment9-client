import Image from 'next/image';
import React from 'react';

const TutorCard = ({tutor}) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <Image
                        src={tutor.tutorImageUrl}
                        alt="Shoes"
                        className="rounded-xl"
                        width={300} height={300}/>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Book Session</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorCard;