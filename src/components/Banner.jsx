import Link from "next/link";

const Banner = () => {
    return (
        <div className='my-10'>
            <div
                className="hero min-h-80 md:min-h-screen bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url(/banner-1.jpg)",
                }}
            >
                <div className="hero-overlay bg-black/60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl md:text-4xl font-bold">Learn from Expert Tutors</h1>
                        
                        
                        <Link href={'/tutors'}><button className="btn btn-primary w-28">Tutors</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;