import React from 'react'

const Navbar = () => {
  return (
    <div className="navbuttons ">
    <h3 className=" border-2 rounded p-1.5  hover:text-green-500"
      style={{ margin: "5px", cursor: "pointer" }}><a href="/details">Veh Details</a>    </h3>
      <h3 className=" border-2 rounded p-1.5 hover:text-green-500" 
      style={{ margin: "5px 11px", cursor: "pointer" }}><a href="/report">View Report</a></h3>
    </div>
  )
}

export default Navbar