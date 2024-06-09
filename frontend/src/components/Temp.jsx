import React from 'react'

function Temp({item}) {
    console.log(item);
  return (
    <>
        <div className="mb-5">
        <div className="card w-92 p-5 bg-base-100 shadow-xl  dark:bg-slate-900 dark:text-white  dark:border hover:scale-105 duration-150">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between ">
      <div className="badge badge-outline  hover:bg-pink-600">${item.price}</div> 
      <div className="badge badge-outline  hover:bg-pink-600 py-2 px-3
      ">buy</div>
    </div>
  </div>
</div>
        </div>
    </>
  )
}

export default Temp