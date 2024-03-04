import { Link } from "react-router-dom"
import TextInput from "../DashboardComponents/TextInput"

const ForgotPassword = ()=>{
    return(
        <>
            <div className="border border-red-100 my-6 py-4 lg:w-1/4 mx-auto w-11/12 text-gray-700 shadow-lg rounded-3xl">
                <div>
                    <img className='h-16 m-auto' src={process.env.PUBLIC_URL+"/logo.png"} alt="" />
                </div>
                <p className="text-3xl font-bold text-center ">Forgot <span className='text-red-600'>Password</span></p>
                <p className="text-xl underline font-bold text-center ">Organiser</p>
                <div className='text-center mx-2 space-x-3'>
                    <Link className='text-red-600 hover:underline duration-300 transition'  to={`${process.env.PUBLIC_URL}/login`}>Login</Link>
                    <Link className='text-red-600 hover:underline border-l-2 border-gray-700 px-2' to={`${process.env.PUBLIC_URL}/register`}>Register</Link>
                </div>
                
                <div className='px-4 my-4 space-y-3'>
                    <TextInput title={'Token'} label={'Enter your reset token'} inputname={'token'} inputtype={'text'}/>
                    <p className='text-left text-sm'><span className="text-red-500">NB</span>: Reset token will be sent to this email.</p>

                    <div className='text-center'>
                        <button className='bg-gray-700 text-white rounded px-4 py-1 font-bold m-auto'>Forgot Password</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword