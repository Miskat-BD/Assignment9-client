import React from 'react';

const ExtraSection1 = () => {
    return (
        <div className='text-center max-w-7xl mx-auto my-7'>
            <h1 className='text-3xl font-bold mb-5 mt-10'>Why Choose MediQueue?</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="card bg-base-100 shadow-sm border border-gray-200">
                    <div className="card-body">
                        <h2 className="card-title justify-center">Easy Booking</h2>
                        <p className='text-muted'>Book tutors instantly with a smooth and simple interface.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm border border-gray-200">
                    <div className="card-body">
                        <h2 className="card-title justify-center">Verified Tutors</h2>
                        <p className='text-muted'>All tutors are verified to ensure quality education.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm border border-gray-200"> 
                    <div className="card-body">
                        <h2 className="card-title justify-center ">Flexible Scheduling</h2>
                        <p className=''>Choose time slots that fit your daily routine.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm border border-gray-200">
                    <div className="card-body">
                        <h2 className="card-title justify-center">Affordable Pricing</h2>
                        <p className='text-muted'>Find tutors that match your budget easily.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection1;