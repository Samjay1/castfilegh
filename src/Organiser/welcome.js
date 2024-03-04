import '../logo.png';
import { Link  } from 'react-router-dom';

const Welcome = ()=>{
    

    return(
        <>
            <div className="border border-red-100 mt-10 space-y-5 py-4 lg:w-2/4 mx-auto w-11/12 text-gray-700 shadow-lg rounded-3xl">
                <div>
                    <img className='h-16 m-auto' src={process.env.PUBLIC_URL+"/logo.png"} alt="" />
                </div>
                
                <p className="text-xl font-bold text-center ">Welcome to Castvote Nomination Platform</p>
                <p className='text-center mx-2 p-4 space-x-4'>
                    <Link className='text-white p-2 px-3 rounded-lg  hover:bg-gray-900 bg-gray-700' to={`${process.env.PUBLIC_URL}/register`}>Sign Up</Link>
                    <Link className='text-white p-2 px-3 rounded-lg  hover:bg-blue-900 bg-blue-700' to={`${process.env.PUBLIC_URL}/login`}>Sign In</Link>

                </p>

                {/* <p className='text-center mx-2 p-4 space-x-4'>
                    <Link className='text-white p-2 px-3 rounded-lg  hover:bg-gray-900 bg-gray-700' to={`${process.env.PUBLIC_URL}/admin/register`}>Admin Sign Up</Link>
                    <Link className='text-white p-2 px-3 rounded-lg  hover:bg-blue-900 bg-blue-700' to={`${process.env.PUBLIC_URL}/admin/login`}>Admin Sign In</Link>
                    
                </p> */}
                <div className='px-4 my-4 space-y-3'>
            
                   
                </div>
            </div>
        </>
    )

}

export default Welcome