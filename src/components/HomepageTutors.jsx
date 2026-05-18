import TutorCard from "./TutorCard";

const HomepageTutors = async () => {
    const res = await fetch('http://localhost:8080/featured');
    const tutors = await res.json();
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-10">Available Tutors</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {
                    tutors.map(tutor => <TutorCard key={tutor._id} tutor={tutor}></TutorCard>)
                }
            </div>
        </div>
    );
};

export default HomepageTutors;