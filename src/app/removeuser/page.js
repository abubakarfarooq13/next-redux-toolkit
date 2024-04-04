"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../redux/slice";
const page = () => {
  const userData = useSelector((data) => data.usersData.users);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Remove User Page</h1>
      <div className="display-user">
        {userData.map((item) => (
          <div className="user-item">
            <span>{item.name}</span>
            <button onClick={() => dispatch(removeUser(item.id))}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
