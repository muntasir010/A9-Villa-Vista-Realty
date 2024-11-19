import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [success, setSuccess] = useState('');


    const navigate = useNavigate();
    const from = "/";

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { email, password, image, fullName } = data;

        //create user and update profile
        createUser(email, password)
            .then(() => {
                setSignUpError('');
                setSuccess('')

                if (password.length < 6) {
                    setSignUpError('Password should be at least 6 characters or longer')
                    return;
                }
                else if (!/[A-Z]/.test(password)) {
                    setSignUpError('Your password should have at least one uppercase characters');
                    return;
                }
               
                updateUserProfile(fullName, image)
                    .then(() => {
                        navigate(from);
                    });

            });
    };

    return (
        <div>
            <Helmet>
                <title>Villa Vista Realty | Register page</title>
            </Helmet>
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
                            name='photo' className="input input-bordered" {...register("photoURL")} />
                        {errors.photoURL && <span className='text-red-600'>This field is required</span>}
                    </div>
                    {/* Password */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                        {errors.password && <span className='text-red-600'>This field is required</span>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline">Sign Up</button>
                    </div>
                </form>
                {
                    signUpError && <p className="text-red-700">{signUpError}</p>
                }
                {
                    success && <p className="text-green-700">{success}</p>
                }
                <p className="text-center mb-4">You have an account? <Link to='/login' className="font-bold uppercase text-blue-700">Login</Link></p>
            </div>
        </div>
    )
};

export default Register;