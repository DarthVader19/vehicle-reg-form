import React, { useEffect, useState } from "react";
import "./form.css";






const Form = (props) => {
  const [vehNo, setVehNo] = useState();
  const [consignor, setConsignor] = useState("");
  const [charge, setCharge] = useState();
  const [weight, setWeight] = useState();
  const [vehType, setVehType] = useState();
  const [date, setdate] = useState();
  const [item, setItem] = useState();
  const [errmsg, seterrmsg] = useState('');


 
   const formdata = {
    vehNo,
    consignor,
    charge,
    weight,
    vehType,
    date,
    item
   }

   const  handleSubmit = async ()=>{

   
    const date = new Date().toDateString() + " "+new Date().toLocaleTimeString().split(" ")[0]
    setdate(date)
    const {slipNo,wm} = props.Data
    formdata['slipNo'] =slipNo;
    formdata['wm']= wm; 
    if(slipNo&& vehNo)
    {
      props.setData(formdata)
      console.log(formdata);
      props.setstatus(true)
      setTimeout(()=>props.setstatus(false),1100)
  
      
      const res = await postData(formdata)
      console.log(res);
      seterrmsg('')
      return res
    }
    console.log('empty fields');
    seterrmsg('Empty fields. Please fill the form!')
   }


   async function postData(data){

    const url = 'http://localhost:5000/api/tabledata'
    const params ={
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:JSON.stringify(data)
      
    }

    const res = await fetch(url,params)

    return res.json()
   }
   const handlerror=()=>{
    seterrmsg('')
   }
  

  return (
    <div className="container rounded">
      
      <div className="left">
      <div style={{display:errmsg===''?'none':'block'}}>
        <span className="text-red-600 ">{errmsg}</span>
        <a className="cursor-pointer" onClick={handlerror}>{'❌'}</a>
      </div>
        <div className="box">
          <label 
          className="mr-4"
          
          htmlFor="vehNo"> Veh No. </label>
          <input
          className="rounded p-1"

            type="text"
            id="vehNo"
            name="vehNo"
            onChange={(e) => setVehNo(e.target.value)}
            value={vehNo}
          />
        </div>

        <div className="box">
          <label 
          
          htmlFor="consignor"> Consignor </label>
          <input
          className="rounded p-1"

            type="text"
            id="consignor"
            name="consignor"
            value={consignor}
            onChange={(e) => setConsignor(e.target.value)}
          />
        </div>

        <div className="box">
          <label 
          className="mr-4"
          
          htmlFor="charge"> Charge </label>
          <input
          className="rounded p-1"

            type="text"
            id="charge"
            name="charge"
            value={charge}
            onChange={(e) => setCharge(e.target.value)}
          />
        </div>

        <div className="box">
          <label 
          className="mr-4"
          
          htmlFor="weight"> Weight </label>
          <input
          className="rounded p-1"

            type="text"
            id="weight"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

       
        </div>

        <div className="bottom border-red-300">
            <div className="submit rounded bg-white w-20 ">
              <button   type="submit"  onClick={handleSubmit}>Submit</button>
            </div>
            <div className="cancel rounded bg-white w-20 ">
              <button type="button">Cancel</button>
            </div>

        </div>
      </div>
      <div className="right ">
        <div className="box ml-3">
          <label 
          className="mr-4"
          htmlFor="vehType"> Veh Type </label>
          <input
          className="rounded p-1"

            type="text"
            id="vehType"
            onChange={(e) => setVehType(e.target.value)}
            value={vehType}
          />
        </div>
        <div className="box ml-3 ">
          <label 
          className="mr-12"

          htmlFor="item"> item </label>
          <input
          className="rounded p-1"
            type="text"
            id="item"
            onChange={(e) => setItem(e.target.value)}
            value={item}
          />
        </div>
        <div className="box ml-3">
          <label 
          className="mr-4"
          
          htmlFor="date"> Date/Time </label>

          {/* <input
            type='date'
            id="date"
            onChange={(e) => setdate(e.target.value)}
            value={date}
          /> */}
           <a className="bg-white p-1.5 ml-2 min-w-fitcontent	w-48 h-9 rounded">
            {date}

           </a>
        </div>

        <div className="image flex flex-row ">
          <img 
           className="max-w-xs m-2" 

          src="https://t3.ftcdn.net/jpg/04/92/39/74/360_F_492397454_2QniwEAC2qKa007ntMRzK6WbDGguY2Wh.jpg"/>
          <img
           className="max-w-xs m-2" 
          src="https://st2.depositphotos.com/1968353/8891/i/600/depositphotos_88913942-stock-photo-semi-trailer-truck.jpg"  alt="image truck"/>

        </div>
      </div>
    </div>
  );
};

export default Form;
