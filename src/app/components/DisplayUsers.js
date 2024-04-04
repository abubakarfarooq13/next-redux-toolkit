"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../redux/slice";
const DisplayUsers = () => {
  const userData = useSelector((data) => data.usersData.users);
  const dispatch = useDispatch();
  return (
    <div className="display-user">
      <h3>User List</h3>
      {userData.map((item) => (
        <div key={item.id} className="user-item">
          <span>{item.name}</span>
          <button onClick={() => dispatch(removeUser(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default DisplayUsers;
