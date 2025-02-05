import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import GoogleAuth from './../GoogleAuth/GoogleAuth';

const Register = () => {
const {createSignUpUser} = useContext(AuthContext);
const navigate = useNavigate();

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const isValidate = false;

        createSignUpUser(email,password)
        .then((result) => {
            console.log(result);
            const createdAt = result?.user?.metadata?.
            creationTime            
            const users = {name,email,photo,createdAt,isValidate};

            fetch('https://coffee-store-server-jade-iota.vercel.app/users',{
              method: "POST",
              headers: {
                "content-type": 'application/json'
              },
              body: JSON.stringify(users)
            })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              alert('user is successfully created');
              navigate("/")
              form.reset();
            })

        })
        .catch(err => {
            console.log(err);
        })

    }



  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegisterSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
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
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-[#E3B577]">Register Now</button>
              </div>
              <GoogleAuth></GoogleAuth>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
