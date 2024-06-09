import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className="flex items-center justify-center h-screen ">
    <div id="my_model-3" className=" w-[600px]">
  <div className="modal-box">
    <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg dark:text-black">Signup</h3>
    <div className="dark:text-black">
    {/* name */}
    <div className=" mt-4 space-y-2  dark:text-black">
            <span >Name</span>
            <br/>
            <input   type="text" placeholder="Enter the full name"  className="py-2 px-3 rounded-md outline-none"  {...register("name", { required: true })}></input>
           <br/> {errors.text && <span className="text-red-700">required</span>}
        </div>
    {/* email */}
        <div className=" mt-4 space-y-2  dark:text-black">
            <span >Email</span>
            <br/>
            <input   type="email" placeholder="Enter the email"  className="py-2 px-3 rounded-md outline-none" {...register("email", { required: true })}></input>
            <br/>{errors.email && <span className="text-red-700">required</span>}
        </div>
        {/* password */}
        <div className=" mt-4 space-y-2">
            <span>password</span>
            <br/>
            <input   type="password" placeholder="Enter the password"  className="py-2 px-3 rounded-md outline-none" {...register("password", { required: true })}></input>
           <br/> {errors.password && <span className="text-red-700">required</span>}
        </div>
        {/* button */}
        <div className="flex justify-around mt-5">
            <button className="bg-pink-600 rounded-md px-3 py-1 text-white hover:bg-pink-700 ">Signup</button>
            <button> Have account? <span href='' className=" text-2px text-blue-300 cursor-pointer underline " onClick={()=>document.getElementById("my_modal_3").showModal()}> Login</span></button>
        </div>
        <Login/>
    </div>
    </form>
  </div>
</div>
    </div>
        
    </>
  )
}

export default Signup