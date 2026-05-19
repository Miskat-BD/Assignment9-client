import { RingLoader } from "react-spinners";

const LoadingPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <span className=""><RingLoader /></span>
        </div>
    );
};

export default LoadingPage;