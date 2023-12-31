import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/Authprovider';

const Signup = () => {
    const{createUser} = useContext(AuthContext);
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password)
        .then(result=>{
            const user  = result.user;
            console.log(user);

        })
        .catch(err => console.log(err));

    }

   

    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 p-19">
                <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-5">Create an Account Easily</h1>
                        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to={"/login"}><a href="#" className="label-text-alt link link-hover">Already have an account?</a></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign up</button>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">GOOGLE</button>
                            </div>
                        </form>
                    </div>
                    

                </div>
            </div>
        </div>
    );
};

export default Signup;