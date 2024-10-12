import React from "react";
import './Sidebar.css';
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
     
      <div id="mySidenav" className="sidenav">
        <Link to="/home">Home</Link>
        <Link to="/data">Data Sensor</Link>
        <Link to="/action">Action</Link>
        <Link to="/profile">Profile</Link>

      </div>
    </>
  );
};

export default Sidebar;
