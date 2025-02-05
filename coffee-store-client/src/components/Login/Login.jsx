import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import GoogleAuth from "../GoogleAuth/GoogleAuth";

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignInUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email,password)
        .then(result => {
            console.log(result);
          console.log(result.user.metadata);

          const lastSignInTime = result?.user?.metadata?.lastSignInTime;

          const loginInfo = {email,lastSignInTime}
          console.log(loginInfo);

          fetch(`http://localhost:5000/users`,{
            method: "PATCH",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
          })
            alert("Successfully Logged In");
            navigate('/')
        }).catch(error => {
            console.log(error);
        })
    }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignInUser} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password? <br /> 
                  </a>
                </label>
                <p>Don't have an account ? Please <Link to="/submit/Register" className="text-[#E3B577]">Register</Link> </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#E3B577]">Login</button>
              </div>
              <div className="">
                <GoogleAuth></GoogleAuth>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
