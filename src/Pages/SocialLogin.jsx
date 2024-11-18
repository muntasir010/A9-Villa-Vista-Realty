import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLogin, githubLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';

    const handleSocialLogin = socialProvider =>{
        socialProvider()
        .then(result => {
            if(result.user){
               navigate(from)
            }
        })
    }

    return (
        <div>
            <div className="flex items-center px-8 py-5 space-x-1">
                <p className="flex-1 h-px sm:w-16 dark:bg-gray-300"></p>
                <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                <p className="flex-1 h-px sm:w-16 dark:bg-gray-300"></p>
            </div>

            <div className="flex w-10 my-5 mx-auto text-2xl gap-5">
                <button onClick={()=>handleSocialLogin(googleLogin)}><FaGoogle></FaGoogle></button>
                <button onClick={()=>handleSocialLogin(githubLogin)}><FaGithub></FaGithub></button>
            </div>
        </div>
    );
};

export default SocialLogin;