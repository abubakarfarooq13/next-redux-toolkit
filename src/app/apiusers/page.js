"use client";
import React, { useEffect } from "react";
import { fetchApiUsers } from "../redux/slice";
import { useDispatch, useSelector } from "react-redux";
const page = () => {
  const dispatch = useDispatch();
  const apiUserData = useSelector((data) => data.usersData.userAPIData);
  useEffect(() => {
    dispatch(fetchApiUsers());
  }, []);
  return (
    <div>
      <h1>User List From API</h1>
      {apiUserData.length && apiUserData.map((item) => <h4>{item.name}</h4>)}
    </div>
  );
};

export default page;
