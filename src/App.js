import React from "react";
import "./App.css";
import "./Components/LoginSignUp.css";
import Login from "./Components/Login";
import SignUP from "./Components/SignUP";
import Home from "./Components/Home";
import Users from "./Components/UsersList";
import Requirements from "./Components/Requirements";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import ProtectedRoutes from "./Components/ProtectedRoutes";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <>

      <UserAuthContextProvider>
      <Router>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUP/>}/>
      <Route path='/home' element={<ProtectedRoutes><Home/></ProtectedRoutes>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/requirements' element={<Requirements/>}/>
        </Routes>
      </Router>
      </UserAuthContextProvider>

     
      
    </>
  );
}

export default App;
