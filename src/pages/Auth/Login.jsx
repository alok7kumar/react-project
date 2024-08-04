import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // handleChange
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // validation
      if (!user.email || !user.password)
        toast.error("Invalid credentials!!", {
          autoClose: 1000,
          position: "top-center",
        });
      else {
        const res = await axios.get("http://localhost:3000/users");
        const result = res.data;
        // console.log(user);
        if (result.length > 0) {
          result.map((r) => {
            if (r.email === user.email && r.password === user.password) {
              localStorage.setItem("auth",JSON.stringify(r))
              toast.success("Login sucessfull!", {
                autoClose: 1000,
                position: "top-center",
              });
              setTimeout(() => {
                navigate("/dashboard");
              }, 2000);
            }
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 mt-5">
            <form className="p-5 bg-light" onSubmit={handleSubmit}>
              <h4 className="text-center">Login Form</h4>
              <div>
                <div class="form-floating mb-3">
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                    {/* <label htmlFor="floatingInput">Email address</label> */}
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <button className="btn btn-primary w-100">LogIn</button>
              </div>
              <p className="text-center mt-3">
                If you are not registered !
                <NavLink to="/register" className="ps-2">
                  Register here
                </NavLink>
              </p>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </Layout>
  );
}
