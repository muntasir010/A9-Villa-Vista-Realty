import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
    const { signInUser } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit =(data) =>{
        const {email, password} = data;
        signInUser(email, password)
        .then(result =>{
            console.log(result);
        })
        .catch(error =>{
            console.error(error)
        })
    }


    return (
        <div className="card md:w-1/2 mx-auto my-10 shrink-0 shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className='text-red-600'>This field is required</span>}
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered"
                        {...register("password", { required: true })}
                    />
                    {errors.password && <span className='text-red-600'>This field is required</span>}

                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <SocialLogin></SocialLogin>
                <p className="text-center mb-4">Don't have an account? <Link to='/register' className="font-bold uppercase text-blue-700">Sign up</Link></p>
        </div>
    );
};

export default Login;