import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/Authprovider';

const Login = () => {
    const{login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate("/");
        })
        .then(err => console.log(err));
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 p-12">
                <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-5">Login now! With Perfect Email & Password</h1>                       
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
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
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to={"signup"} className="label-text-alt link link-hover">Create an Account</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;