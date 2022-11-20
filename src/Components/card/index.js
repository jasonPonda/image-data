import React from "react";
import "./style.css";

export const ServiceCard = ({ description, image }) => {
  return (
    <div className="card">
      <h6>{description}</h6>
      <img src={image} alt="" />
    </div>
  );
};
