import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <h1 className='text-[400px] font-bold'>
                404
            </h1>

            <h2 className='text-5xl font-bold'>
                NOT FOUND
            </h2>
            <Link to='/'><button className="btn btn-outline my-10">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;