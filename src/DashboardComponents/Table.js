import { Link } from "react-router-dom";
import Download from '../DashboardComponents/Download';

const Table = ({table_name,table_label,table_data,OriginalData,date=true,preview=false,download=true})=>{
   
    const tableHead = table_label?.map((value,index)=>{
        return <th key={index} scope="col" className="px-6 py-3">{value}</th>
    })
    let tableBodyMain =  table_data?.map((data,index)=>{
        // console.log(index,'data :>> ', data);
        let row = Object.keys(data).map((key)=>{ 
            if(key ==='preview'){ //removes extras eg id,q_id and org_id
                return <td key={key} className="px-6 py-4 bg-red-50">
                        <Link className="text-red-700 hover:text-blue-700 transition duration-200 font-bold underline " to={`${process.env.PUBLIC_URL}/admin/preview/${data[key]}`}>View</Link>
                     </td> 
            }
            if(key !== 'id' && key !== 'org_id' && key !== 'q_id' && key !== 'time' ){ //removes extras eg id,q_id and org_id
                // console.log('key :>> ', key, 'value :>> ', data[key]);
                
                if(key === 'a10'){
                    return <td key={key} className="px-6 py-4 truncate underline text-blue-600"><a href={data[key]} target='_blank' rel="noreferrer" className="w-24">Image Here</a> </td> 
                }
                else if(key === 'key'){
                    return null
                }
                
                return <td key={key} className="px-6 py-4"> {data[key]} </td> 
            }
            return null
        })
        
        return <tr key={index} className="bg-white border-b text-black">{row}</tr>
    })

 

    return(
        <>
            <div className="flex justify-between border-b border-red-900 mt-10">
                <p className="font-normal text-lg ml-2 text-red-900">{table_name}</p>
                <div className="lg:space-x-2 pb-1">
                    {/* <Link className="font-normal bg-gray-700 hover:bg-gray-900 text-white px-2 py-2 rounded" to={`${process.env.PUBLIC_URL}/dashboard`} >View all</Link> */}
                    {download &&<div  className='inline-block bg-green-700 text-white py-1 px-3 rounded hover:bg-green-800'>
                        <Download table_name={table_name} table_label={table_label?table_label:[]} table_data={OriginalData?OriginalData:[]}/>
                    </div>}
                </div>
            </div>
            <div id="referral" className="relative border overflow-x-auto overflow-y-auto mt-10 font-normal shadow-lg rounded-t-2xl" >
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-red-900 uppercase bg-red-50  ">
                            <tr>
                                {tableHead}
                                {date? <th scope="col" className="px-6 py-3">{'DATE'}</th>
                                : null
                                 }
                                 
                                {preview? <th scope="col" className="px-6 py-3">{'PREVIEW'}</th>
                                : null
                                 }
                            </tr>
                        </thead>
                        <tbody className="truncate">
                            {tableBodyMain} 
                        </tbody>
                    </table>
            </div>
        </>
    )
}
export default Table;