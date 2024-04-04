"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";
import Link from "next/link";
const AddUsers = () => {
  const [name, setName] = useState("");
  // const [fatherName, setFatherName] = useState("");
  const dispatch = useDispatch();

  const userDispatch = () => {
    dispatch(addUser(name));
    setName("");
  };
  return (
    <div className="add-user">
      <h3>User List</h3>
      <input
        className="add-user-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add New User"
      />
      {/* <input
        className="add-user-input"
        type="text"
        value={fatherName}
        onChange={(e) => setFatherName(e.target.value)}
        placeholder="Father Name"
      /> */}
      <button onClick={userDispatch} className="add-user-btn">
        Add User
      </button>
      <Link href="/removeuser">Remove User</Link>
      <br />
      <Link href="/todolist">Go To Todo List</Link>
      <br />
      <Link href="/apiusers">Go To API User List</Link>
    </div>
  );
};

export default AddUsers;
