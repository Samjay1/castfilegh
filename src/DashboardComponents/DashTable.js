// import { Link } from "react-router-dom";
import Download from '../DashboardComponents/Download';

const Table = ({table_name,table_label,table_data})=>{
   
    const tableHead = table_label.map((value,index)=>{
        return <th key={index} scope="col" className="px-6 py-3">{value}</th>
    })

    const tableBody = table_data.map((value,index)=>{
        return (
            <tr key={index} className="bg-white border-b text-black">
                {table_label[0]?
                <td className="px-6 py-4">
                    {index+1}
                </td>
                :null}
                {table_label[1]?
                <td className="px-6 py-4">
                    {value.title}
                </td>
                :null}

                {table_label[2]?
                <td className="px-6 py-4">
                    {value.nominees}
                </td>
                :null}
                <td className="px-6 py-4">
                    
                </td>
            </tr>
            )
    })

    return(
        <>
            <div className="flex justify-between border-b border-red-900 mt-10">
                <p className="font-normal text-lg ml-2 text-red-900">{table_name}</p>
                <div className="lg:space-x-2 pb-1">
                    {/* <Link className="font-normal bg-gray-700 hover:bg-gray-900 text-white px-2 py-2 rounded" to={`${process.env.PUBLIC_URL}/dashboard`} >View all</Link> */}
                    <div  className='inline-block bg-green-700 text-white py-1 px-3 rounded hover:bg-green-800'>
                        <Download table_name={table_name} table_label={table_label} table_data={table_data}/>
                    </div>
                </div>
            </div>
            <div id="referral" className="relative -z-10 overflow-x-auto overflow-y-auto mt-10 font-normal shadow-lg rounded-t-2xl" >
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-red-900 uppercase bg-red-50  ">
                            <tr>
                                {tableHead}
                            </tr>
                        </thead>
                        <tbody>
                            {tableBody} 
                        </tbody>
                    </table>
            </div>
        </>
    )
}
export default Table;