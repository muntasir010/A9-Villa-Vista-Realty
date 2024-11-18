import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data
        createUser(email, password)
        .then(result => {
            if(result.user){
               navigate(from)
            }
        })
    }
    return (
        <div className="card md:w-1/2 mx-auto my-10 shrink-0 shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                {/* name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Please enter your name" className="input input-bordered" {...register("fullName", { required: true })} />
                    {errors.fullName && <span className='text-red-600'>This field is required</span>}
                </div>
                {/* Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Enter your email"
                        name='email' className="input input-bordered" {...register("email", { required: true })} />
                    {errors.email && <span className='text-red-600'>This field is required</span>}
                </div>
                {/* Photo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo url</span>
                    </label>
                    <input type="photo" placeholder="photo url"
                        name='photo' className="input input-bordered" {...register("photoUrl")}/>
                        {errors.photoUrl && <span className='text-red-600'>This field is required</span>}
                </div>
                {/* Password */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" className="input input-bordered" {...register("password", { required: true })}/>
                    {errors.password && <span className='text-red-600'>This field is required</span>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-outline">Sign Up</button>
                </div>
            </form>
            <p className="text-center mb-4">You have an account? <Link to='/login' className="font-bold uppercase text-blue-700">Login</Link></p>
        </div>
    )
};

export default Register;