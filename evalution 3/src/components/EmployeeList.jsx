import { AuthContext } from "../contexts/AuthContext";
import React, { useContext, useState } from "react";
import {Link} from "react-router-dom"
import { EmployeeDetails } from "./EmployeeDetails";

export const EmployeeList = () => {
  const { data, getdata } = useContext(AuthContext);
console.log(data)
  return (
    <div
      className="list_container"
      style={{ display: "flex", marginLeft: "20px" }}
    >
      {data.map((item) => {
        return (
          <Link
            to={`/employee/${item.id}`}
            className="employee_card"
            style={{
              border: "1px solid red",
              width: "200px",
              height: "250px",
              marginLeft: "20px",
              padding: "10px",
            }}
          >
            <img className="employee_image" src={item.image} alt={""} />
            <span className="employee_name">{item.employee_name}</span>
            <span className="employee_title">{item.title}</span>
          </Link>
        );
      })}
      {/* On clicking this card anywhere, user goes to user details */}
    </div>
  );
};
