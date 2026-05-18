import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white text-center px-4">
            {/* Big 404 Text */}
            <h1 className="text-9xl font-extrabold text-primary tracking-widest drop-shadow-md relative">
                404
            </h1>
            
            {/* Badged text overlay */}
            <div className="bg-[#f3f0ff] text-primary px-3 py-1 text-sm rounded-md rotate-12 absolute mb-24 font-semibold">
                Page Not Found
            </div>

            <div className="mt-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-3">
                    Oops! Something went wrong.
                </h2>
                <p className="text-slate-500 max-w-md mx-auto mb-8 text-base">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Please check the URL.
                </p>

                {/* Back to Home Button */}
                <Link 
                    href="/" 
                    className="btn btn-primary px-8 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
                >
                    Back to Homepage
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;