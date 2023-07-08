import React, { useState } from "react";
import "./vd.css";
import Form from "./components/form";
import Navbar from "./components/navbar";




const VehDetails = (props) => {
  const [slipNo, setSlipNo] = useState(null);
  const [wm, setwm] = useState(false);
  const [status, setStatus] = useState(false)

  const [data, setData] = useState({slipNo:null})

  function handleChange(e){
    setSlipNo(e.target.value)
    const ob = {
      slipNo,
      wm
    }
    setData(ob)
  }


  if(status){
    console.log(data);
  }
  const handlesumbit=()=>{

    if(status){
      console.log(data);
    }
  }
  return (
    <div className="detail-page ml-6 bg-gradient-to-t from-blue-500 via-blue-500 to-blue-200">
      <div className="navbar">
       <Navbar/>
        <div className="heading">
          <a className="font-bold text-xl underline">Vehicle Details</a>
        </div>
      </div>

      <div className="form">
        <div className="topdetails">
          <div className="p-4px bg-gray  ">
            <label htmlFor="slipno"> Slip No. </label>
            <input
             className="rounded p-1 bg-red border-2 m-1.5"

             type="text" 
             id="slipno" 
             name="slip_no" 
             value={slipNo} placeholder="000001" onChange={handleChange}/>
          </div>
          <div className=" bg-gray m-2 ml-16 " >
            <input
            className="border-4"
              type="checkbox"
              id="weight-manual"
              name="slip_no"
              value={wm}
            />
            <label htmlFor="weight-manual"> Weight Manual</label>
          </div>
        </div>

        {/* form componnets */}
        <Form Data = {data} setData={setData} setstatus={setStatus}/>
      </div>
    </div>
  );
};

export default VehDetails;
