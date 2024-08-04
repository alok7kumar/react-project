import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import Menu from "./Menu";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function UpdateRecord() {
//   const [rec, setRec] = useState();
  const navigate = useNavigate();
  const [record, setRecord] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    batch: "",
    qualification: "",
    branch: "",
  });

  const { id } = useParams();
  function getFacultyDetails() {
    try {
      axios
        .get(`http://localhost:3000/faculties/${id}`)
        .then((res) => setRecord(res?.data?.record))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFacultyDetails();
  }, []);

  const handleChange= (e)=>{
    setRecord({...record,[e.target.name]:e.target.value})
  }

  const handleUpdate = async(e)=>{
    e.preventDefault()
    try{
        const res = await axios.put(`http://localhost:3000/faculties/${id}`,{record})
        console.log(res)
        toast.success("Record updated successfully",{autoClose:1000,position:"top-center"})
    }catch(error){
        console.log(error)
    }
  }

  return (
    <Layout>
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            {/* {JSON.stringify(rec,null)} */}

            <form action="" className="w-75" onSubmit={handleUpdate}>
              <h3 className="text-center p-2 bg-secondary text-white">
                Edit Faculty Info
              </h3>

              {/* name */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingText"
                  placeholder="name"
                  value={record?.name}
                  name="name"
                  onChange={handleChange}
                />
                <label htmlFor="floatingName">Name</label>
              </div>

              {/* Email */}
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="email"
                  value={record?.email}
                  name="email"
                  onChange={handleChange}
                />
                <label htmlFor="floatingEmail">Email</label>
              </div>

              {/* Mobile */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingMobile"
                  placeholder="mobile"
                  value={record?.mobile}
                  name="mobile"
                  onChange={handleChange}
                />
                <label htmlFor="floatingMobile">Mobile</label>
              </div>

              <div className="row">
                <div className="col-md-6">
                  {/* Subject */}
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingSubject"
                      placeholder="subject"
                      value={record?.subject}
                      name="subject"
                  onChange={handleChange}
                    />
                    <label htmlFor="floatingSubject">Subject</label>
                  </div>
                </div>
                <div className="col-md-6">
                  {/* Batch */}
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingBatch"
                      placeholder="batch"
                      value={record?.batch}
                      name="batch"
                  onChange={handleChange}
                    />
                    <label htmlFor="floatingBatch">Batch</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  {/* Qualification */}
                  <select
                    className="form-select mb-3"
                    aria-label="Default select example"
                    value={record?.qualification}
                    name="qualification"
                  onChange={handleChange}
                  >
                    <option defaultValue="select">Select Qualification</option>
                    <option value="MCA">MCA</option>
                    <option value="M.Tech">M.Tech</option>
                    <option value="M.Sc">M.Sc</option>
                  </select>
                </div>
                <div className="col-md-6">
                  {/* Branch */}
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingBranch"
                      placeholder="branch"
                      value={record?.branch}
                      name="branch"
                  onChange={handleChange}
                    />
                    <label htmlFor="floatingBranch">Branch</label>
                  </div>
                </div>
              </div>

              <div>
                <button className="btn btn-success">UPDATE RECORD</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
