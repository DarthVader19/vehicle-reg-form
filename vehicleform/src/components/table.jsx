 

const Table =({data})=>{

    // const {slipNo,vehNo,consignor,vehType,item,weight,charge}=data;

    return(
        <div className="relative overflow-x-auto">
         <table className="bg-white border-2 border-spacing-2 w-full text-lg text-left text-gray-600 ">
            <thead className="bg-green-400 text-zinc-100 border-2 border-b">
                <tr>
                <th className="px-6 py-3 border-2">Slip No.</th>
                <th className="px-6 py-3 border-2">Veh No.</th>
                <th className="px-6 py-3 border-2">Consignor</th>
                <th className="px-6 py-3  border-2">Veh Type</th>
                <th className="px-6 py-3 border-2">Item</th>
                <th className="px-6 py-3 border-2">Charge</th>
                <th className="px-6 py-3 border-2">Weight</th>
                <th className="px-6 py-3 border-2" >Is Sync</th>
                <th className="px-6 py-3  border-2">Action</th>

                </tr>
            </thead>
                    <tbody>
                        
                        {data.map((row, index) => (
                            <tr key={index}>
                            <td className="px-3 ">{row.slipNo}</td>
                            <td className="px-3">{row.vehNo}</td>

                            <td  className="px-3">{row.consignor}</td>

                            <td className="px-3">{row.vehType}</td>
                            <td className="px-3">{row.item}</td>
                            <td className="px-3">{row.charge}</td>
                            <td className="px-3">{row.weight}</td>
                            <td>{'⤴'}</td>

                            <td>{row.action}
                            <div>
                                <a className='m-2.5 underline' href="http://">View</a>
                                <a className='m-2.5 underline'  href="http://">Edit</a>
                            </div>
                             </td>
                            </tr>
                          ))}
                       

                    </tbody>
             </table>

        </div>
    )
};

export default Table ;