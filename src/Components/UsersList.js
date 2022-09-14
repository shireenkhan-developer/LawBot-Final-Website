import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./navbar";
import User from "./User";
import Contact from "./Contact";
import Footer from "./Footer";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  function onDelete(user) {
    setUsers(
      users.filter((e) => {
        return e !== user;
      })
    );
  }
  
  
  const fetchUsers = async () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Navbar/>
       <h1 className="display-3 text-center" id="sec2">Users</h1>
      {users.length === 0 ? (
        <p className="text-center">
          <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
          <span className="sr-only">Loading...</span>
          <br></br>
          <span>Wait for a while.</span>
          <br></br>
          <span>Refresh(several times)! If its taking too much time.</span>
        </p>
      ) : (
        users.map((user) => (
          <>
            <User key={user.login.uuid} user={user} onDelete={onDelete} />
          </>
        ))
      )}
      <hr></hr>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default UsersList;
