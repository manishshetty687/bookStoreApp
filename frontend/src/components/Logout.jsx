import React, { useState } from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser]=useAuth();
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null,
            });
            localStorage.removeItem("Users");
            toast.success("logout successfully");
            window.location.reload();
        } catch (error) {
            toast.error("error:"+error.message);
        }
    };

  return (
   <>
    <div>
        <button className="px-3 py-2 bg-red-500 cursor-pointer rounded-md"
        onClick={handleLogout}>logout</button>
    </div>
   </>
  );
}

export default Logout