import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUserAuth } from '../Context/UserAuthContext';
const ProtectedRoutes = ({children}) => {
    let {user} =useUserAuth();
    if(!user){
        return <Navigate to={"/Login"} />
    }
    
    return children;
}
export default ProtectedRoutes
