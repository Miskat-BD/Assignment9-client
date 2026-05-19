import TutorCard from "@/components/TutorCard";

const TutorsPage = async () => {
    const res = await fetch('http://localhost:8080/tutors');
    const tutors = await res.json();
    console.log(tutors, 'all');
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold my-10">All Tutors</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {
                tutors.map(tutor => <TutorCard key={tutor._id} tutor={tutor}></TutorCard>)
            }
            </div>
        </div>
    );
};

export default TutorsPage;