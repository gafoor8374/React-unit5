import axios from "axios";
import React, { useState, useEffect,useContext } from "react";
import { EmployeeList } from "./EmployeeList";
import {AuthContext} from "../contexts/AuthContext"

export const Home = () => {

    const {data,getdata} = useContext(AuthContext)
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created
 
  var count = 0;
  var count1 = 0;
  let TerminatedCount = data.map((item) => {
    if (item.status === "terminated") {
      count++;
    } else {
      count1++;
    }
  });
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees<span className="totalemp">{data.length}</span>
        </div>
        <div>
          Total Terminated: <span className="total_terminated">{count}</span>
        </div>
        <div>
          Total Promoted: <span className="total_promoted">{count1}</span>
        </div>
        <div>
          Total New: <span className="total_new"></span>
        </div>
      </div>
    </>
  );
};
