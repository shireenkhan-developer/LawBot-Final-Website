import React from "react";
import logo from "../images/lawbot.jpg";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../Context/UserAuthContext";
import {Link,useNavigate} from "react-router-dom";
//hello
export default function navbar() {
  const navigate = useNavigate();
const {user,logOut}=useUserAuth();
const handleLogOut = async()=>{

  try{
   await logOut();
   navigate("/");
  }
  catch(err)
  {
 console.log(err.message);

  }

}
  return (
    <nav className="navbar ">
      <ul className="nav-list">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/home">About</Link>
        </li>
        <li>
          <a href="#sec4">Contact</a>
        </li>
        <li>
          <Link to="/requirements">Requirements</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <Button variant="info" onClick={handleLogOut}>LogOut</Button>
      </ul>
    </nav>
  );
}
