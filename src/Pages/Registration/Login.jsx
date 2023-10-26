import React from 'react';
import { Link } from 'react-router-dom';

import signup from '../../assets/images/login/login.svg'
import SharedNav from '../Navbar/SharedNav';
import { FaFacebookF } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Login = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <SharedNav></SharedNav>
            <div className='flex justify-evenly items-center'>
                <div className="w-1/2">
                    <img src={signup} alt="" />
                </div>
                <div className="w-1/2 flex-shrink-0 bg-base-100">
                <form className="card-body border-2">
                    
                    <h2 className='text-center font-bold text-3xl'>Login</h2>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    {/* <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label> */}
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn text-white bg-[#ff3811]">Login</button>
                    </div>
                    <label className="label text-center">
                        <p>Or Sign in with</p>
                    </label>

                    <div className='flex justify-center items-center gap-5'>
                        <Link className='bg-gray-300 rounded-full p-4 text-blue-600'>
                            <FaFacebookF></FaFacebookF>
                        </Link>
                        <Link className='bg-gray-300 rounded-full p-4 text-green-600'>
                            <FaGoogle></FaGoogle>
                        </Link>
                        <Link className='bg-gray-300 rounded-full p-4'>
                            <FaGithub></FaGithub>
                        </Link>
                    </div>
                    
                        
                        <Link className='mt-5 text-red-500 text-center font-bold' to="/signup">
                        <p>New here? Signup</p>
                        </Link>
                    

                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;