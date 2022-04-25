import { AuthContext } from "../contexts/AuthContext";
import React, { useContext, useState } from "react";
import {useParams} from "react-router-dom"

export const EmployeeDetails = () => {
  const { data, getdata } = useContext(AuthContext);
  const {id} = useParams()

  return (
    <div className="user_details">
        
      <img className="user_image" src={data[id].image} />
      <h4 className="user_name">{data[id].username}</h4>
      <span className="user_salary">${data[id].salary}</span>
      <span className="tasks">
        <li className="task">{data[id].task}</li>
      </span>
      Status: <b className="status">{data[id].status}</b>
      Title: <b className="title">{data[id].title}</b> 
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
