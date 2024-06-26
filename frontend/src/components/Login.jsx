import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';


function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) =>{ const userinfo={
      
        email:data.email,
        password:data.password,
      }
      await axios.post("http://localhost:4001/user/login",userinfo)
      .then((res)=>{
        console.log(res.data)
        
        if(res.data){
          setTimeout(() => {
            toast.success("login successfully");
            document.getElementById("my_model_3").close();
            window.location.reload();
           
          }, 3000);
         
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user));
      }).catch((err)=>{
        if(err.response){
          console.log(err);
          
          toast.error("error:"+ err.response.data.message);
          setTimeout(() => {}, 3000);
        }
       
      });
    };
  return (
   
    <div>
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form  onSubmit={handleSubmit(onSubmit)} method="dialog" >
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=>document.getElementById("my_model_3").close()}>✕</Link>
   
    <h3 className="font-bold text-lg dark:text-black">Login</h3>
    <div className="dark:text-black">
    {/* email */}
        <div className=" mt-4 space-y-2  dark:text-black">
            <span >Email</span>
            <br/>
            <input   type="email" placeholder="Enter the email"  className="py-2 px-3 rounded-md outline-none"
             {...register("email", { required: true })} > 
             </input>
             <br/>
             {errors.email && <span className="text-red-700">required</span>}
        </div>
        {/* password */}
        <div className=" mt-4 space-y-2">
            <span>password</span>
            <br/>
            <input  {...register("password", { required: true })}  type="password" placeholder="Enter the password"  className="py-2 px-3 rounded-md outline-none">
</input>  <br/>{errors.password && <span className="text-red-700">required</span>}
        </div>
        {/* button */}
        <div className="flex justify-around mt-5">
            <button className="bg-pink-600 rounded-md px-3 py-1 text-white hover:bg-pink-700 ">Login</button>
            <Link to="signup">Not registered? <span className="text-blue-300 cursor-pointer underline"> sign up</span></Link>
        </div>
    </div>
    </form>
  </div>
</dialog>
    </div>
  //  https://github.com/manishshetty687/bookStoreApp.git
  )
}

export default Login