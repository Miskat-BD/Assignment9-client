import Link from "next/link";

const Banner = () => {
    return (
        <div className='my-10'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div
                        className="hero min-h-80 md:max-h-4/5 bg-cover bg-center"
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
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div
                        className="hero min-h-80 md:max-h-4/5 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url(/banner-2.jpg)",
                        }}
                    >
                        <div className="hero-overlay bg-black/60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-2xl md:text-4xl font-bold">Book Your Sessions Easily</h1>


                                <Link href={'/tutors'}><button className="btn btn-primary w-28">Tutors</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div
                        className="hero min-h-80 md:max-h-4/5 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url(/banner-4.jpg)",
                        }}
                    >
                        <div className="hero-overlay bg-black/60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-2xl md:text-4xl font-bold">Upgrade Your Skills</h1>


                                <Link href={'/tutors'}><button className="btn btn-primary w-28">Tutors</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;
{/* <>
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

    <div
        className="hero min-h-80 md:min-h-screen bg-cover bg-center"
        style={{
            backgroundImage:
                "url(/banner-2.jpg)",
        }}
    >
        <div className="hero-overlay bg-black/60"></div>
        <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
                <h1 className="mb-5 text-2xl md:text-4xl font-bold">Book Your Sessions Easily</h1>


                <Link href={'/tutors'}><button className="btn btn-primary w-28">Tutors</button></Link>
            </div>
        </div>
    </div>

    <div
        className="hero min-h-80 md:min-h-screen bg-cover bg-center"
        style={{
            backgroundImage:
                "url(/banner-3.avif)",
        }}
    >
        <div className="hero-overlay bg-black/60"></div>
        <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
                <h1 className="mb-5 text-2xl md:text-4xl font-bold">Book Your Sessions Easily</h1>


                <Link href={'/tutors'}><button className="btn btn-primary w-28">Tutors</button></Link>
            </div>
        </div>
    </div>
</> */}