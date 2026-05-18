import React from 'react';

const ExtraSection2 = () => {
    return (
        <div className='text-center max-w-7xl mx-auto my-20'>
            <h1 className='text-3xl font-bold mb-5 mt-10'>How It Works?</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="card bg-base-100 shadow-sm border border-gray-200">
                    <div className="card-body">
                        <h1 className='text-2xl text-primary font-bold'>01</h1>
                        <h2 className="text-xl font-bold">Search Tutor</h2>
                        <p className='text-muted'>Browse tutors by subject and availability.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm border border-gray-200">
                    <div className="card-body">
                        <h1 className='text-2xl text-primary font-bold'>02</h1>
                        <h2 className="text-xl font-bold">Select Slot</h2>
                        <p className='text-muted'>Choose your preferred date and time.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm border border-gray-200">
                    <div className="card-body">
                        <h1 className='text-2xl text-primary font-bold'>03</h1>
                        <h2 className="text-xl font-bold">Book Session</h2>
                        <p className='text-muted'>Confirm booking with one click.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm border border-gray-200">
                    <div className="card-body">
                        <h1 className='text-2xl text-primary font-bold'>04</h1>
                        <h2 className="text-xl font-bold">Start Learning</h2>
                        <p className='text-muted'>Join your session and begin learning.</p>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default ExtraSection2;