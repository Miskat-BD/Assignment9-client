'use client'
import { Input } from '@heroui/react';
import { useRouter } from 'next/navigation';

const TutorSearch = () => {
    const router = useRouter();
    const handleSearch = (e)=>{
        router.push(`/tutors?search=${e.target.value}`)
    }
    return (
        <div>
            <Input onChange={handleSearch} aria-label="Name" className="w-64 border-2" placeholder="Search Tutors" />
        </div>
    );
};

export default TutorSearch;