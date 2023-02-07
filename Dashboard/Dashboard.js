import React from "react";
import "./Dashboard.css";

const Dashboard = ({ title, description, imageUrl, buttonText }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default Dashboard;
