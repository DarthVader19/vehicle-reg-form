import React, { useEffect, useState } from 'react'
import Table from './components/table'
import Navbar from './components/navbar';




const Report = () => {

  const [data, setData] = useState([]);


  useEffect(() => {

    try{
    fetchData();

    }catch(err){
      console.log(err);
    }
  }, []);

  const fetchData = async () => {

    const url = 'http://localhost:5000/api/tabledata'
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const filterData =async()=>{


  }
 
  
  return (

    <div className='flex flex-col bg-gradient-to-t from-blue-500 via-blue-500 to-blue-200 ' >
      <div className='flex flex-col '>
        <div className="navbar">
          <Navbar/>
          <div className="heading">
            <a className="font-bold text-xl underline">Vehicle Report</a>
          </div>
      </div>

      </div>

      <div className='filter flex flex-row justify-between pl-2'>
        <div>
          <label>From Date </label>
          <span className=' w-24 bg-white p-1.5 ml-2 min-w-full max-w-sm  h-9 rounded'> {new Date().toLocaleString()}</span>

        </div>
        <div>
        <label>To Date </label>
          <span className=' w-24 bg-white p-1.5 ml-2 min-w-full max-w-sm  h-9 rounded'>
            {new Date().toLocaleString()}
          </span>
        </div>
        <div className='pr-4'>
          <button 
          className="submit rounded bg-gray-300 w-20 h-10 "
          > Search </button>
        </div>


      </div>

        <Table data={data}/>
    </div>
  )
}

export default Report;