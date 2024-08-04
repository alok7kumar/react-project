import React from "react";
import Layout from "../layout/Layout";
import Menu from "./Menu";

export default function Dashboard() {
  const auth = localStorage.getItem("auth");
  const user = JSON.parse(auth);
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row mt-3 mb-3">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            <table className="table table-bordered w-50">
              <thead></thead>
              <tbody>
                <tr>
                  <th scope="row">ID</th>
                  <td>{user?.id}</td>
                </tr>
                <tr>
                  <th scope="row">Name</th>
                  <td>{user?.name}</td>
                </tr>
                <tr>
                  <th scope="row">Email</th>
                  <td>{user?.email}</td>
                </tr>
                <tr>
                  <th scope="row">Mobile</th>
                  <td>+91 {user?.mobile}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
