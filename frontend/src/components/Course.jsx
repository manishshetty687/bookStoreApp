import React from 'react'
import list from "../../public/list.json"; 
import Temp from './Temp';
import { Link } from 'react-router-dom';

function Course() {
  return (
   <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4  ">
        <div className=" justify-center text-center items-center mt-40">
            <h1 className="text-2xl "> We're happy  to have you <span className="text-pink-500">Here!!:</span> </h1>
            <p className="mt-2">
            Using a React Library: You can use the react-lorem-ipsum library to generate placeholder text in your JSX components.
            It provides both components and functions for creating gibberish text. Here’s an example of using the LoremIpsum component:
            </p>
            <Link to="/">
            <button className="bg-pink-500 text-white   mt-6 rounded-md px-3 py-2 hover:bg-pink-700 duration-300"> back</button>
            </Link>
           
        </div>
        <div className="mt-12 grid gird-cols-1 md:grid-cols-4">
            {list.map((item)=>(
                <Temp key={item.id} item={item}/>
            ))
                
            }
        </div>
    </div>
   </>
  )
}

export default Course