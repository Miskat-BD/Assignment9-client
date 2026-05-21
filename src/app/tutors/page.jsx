import DateFilter from "@/components/DateFilter";
import TutorCard from "@/components/TutorCard";
import TutorSearch from "@/components/TutorSearch";

export const metadata = {
    title: "Tutors | MediQueue",
    description: "Tutor Booking System",
};

const TutorsPage = async ({searchParams}) => {
    const search = await searchParams || ''
    console.log(search);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors?search=${search?.search}`,{
        cache: 'no-store'
    });
    const tutors = await res.json();
    // console.log(tutors, 'all');
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold my-10">All Tutors</h1>
            <div className="sm:flex justify-around items-center">
                <div className=""><TutorSearch /></div>
                <div className=""><DateFilter title={'Start Date'}/></div>
                <div className=""><DateFilter title={'End Date'} /></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
                {
                    tutors.map(tutor => <TutorCard key={tutor._id} tutor={tutor}></TutorCard>)
                }
            </div>
        </div>
    );
};

export default TutorsPage;