
const TutorsPage = async () => {
    const res = await fetch('http://localhost:8080/tutors');
    const tutors = await res.json();
    console.log(tutors);
    return (
        <div>
            <h1 className="text-2xl font-bold">All Tutors</h1>
            <div className="">
            {
                tutors.map(tutor => <div key={tutor._id}>{tutor.name}</div>)
            }
            </div>
        </div>
    );
};

export default TutorsPage;