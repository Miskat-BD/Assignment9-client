import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;

    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
                <p className="text-xl font-medium text-gray-500">You are not logged in!</p>
                <a href="/login" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    Go to Login
                </a>
            </div>
        );
    }

    const defaultAvatar = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80";

    return (
        <div className='flex justify-center items-center my-20 px-4'>
            
            <div className="relative bg-white max-w-sm w-full p-8 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                
                <div className="absolute top-4 inset-e-4">
                    <span className="px-2.5 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full capitalize">
                        {user?.role || "Student"}
                    </span>
                </div>

                <div className="flex flex-col items-center text-center">
                    
                    <div className="relative w-28 h-28 mb-4 rounded-full p-1 border-2 border-blue-500">
                        <Image 
                            className="rounded-full object-cover" 
                            src={user?.image || defaultAvatar} 
                            alt={user?.name || "User Profile"} 
                            fill
                            sizes="112px"
                            priority
                        />
                    </div>

                    <h5 className="mb-1 text-2xl font-bold text-gray-900">
                        {user?.name || "Anonymous User"}
                    </h5>
                    
                    <p className="text-sm text-gray-500 font-medium mb-4">
                        {user?.email}
                    </p>

                    <div className="w-full bg-gray-50 rounded-xl p-4 mb-6 flex justify-around text-center">
                        <div>
                            <span className="block text-xs text-gray-400 uppercase font-bold">Status</span>
                            <span className="text-sm font-semibold text-green-600">Active</span>
                        </div>
                        <div className="border-l border-gray-200" />
                        <div>
                            <span className="block text-xs text-gray-400 uppercase font-bold">Verified</span>
                            <span className="text-sm font-semibold text-blue-600">{user?.emailVerified ? "Yes" : "No"}</span>
                        </div>
                    </div>

                    <div className="flex gap-3 w-full">
                        <button type="button" className="flex-1 justify-center inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 transition-colors font-medium rounded-xl text-sm px-4 py-2.5 shadow-sm focus:outline-none">
                            Edit Profile
                        </button>
                        <button type="button" className="flex-1 justify-center inline-flex items-center text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors font-medium rounded-xl text-sm px-4 py-2.5 focus:outline-none">
                            Settings
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ProfilePage;