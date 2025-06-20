import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Login = () => {

    const {signInUser}= useContext(AuthContext);

    const handleLogin = e=>{
        e.preventDefault();
        const email= e.target.email.value;
        const password = e.target.email.value;
        console.log(email, password);
        signInUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log('ERROR',error.message)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                        <p className="mal-4 mb-4">New to this Website ? Please <Link to="/register" className="text-blue-400">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;