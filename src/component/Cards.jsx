import React from 'react'

function Cards({ item }) {
  return (
    <div className="p-10 m-10  max-w-screen-2x1 container mx-auto md:px-20 px-4 shadow-xl justify-between mt-4 hover:scale-105 duration-200">
      <figure>
        <img src={item.image} alt={item.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.name}
          <div className="badge badge-secondary">{item.category}New</div>
        </h2>
        <p>{item.title}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">Free{item.price}</div>
          <div className="badge badge-outline hover:bg-pink-500 text hover:text-white px-2 py-1">View PDF</div>
        </div>
      </div>
    </div>
  )
}

export default Cards
