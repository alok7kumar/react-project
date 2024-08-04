import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div className="list-group">
        <h3 className="bg-secondary text-center p-2 text-white">ADMIN PANEL</h3>
        <NavLink
          to="/dashboard"
          className="list-group-item list-group-item-action"
          aria-current="true"
        >
          Profile
        </NavLink>
        <NavLink
          to="/add-record"
          className="list-group-item list-group-item-action"
        >
          Add Record
        </NavLink>
        <NavLink to="/all-records" className="list-group-item list-group-item-action">
          All Records
        </NavLink>
        
      </div>
    </>
  );
}
