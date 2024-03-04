import axios from "axios";
import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom"
import TextInput from "../DashboardComponents/TextInput"

const ResetPassword = ()=>{
    const {email} = useParams();
    const [resetState, setResetState] = useState(false);
    const [password, setPassword] = useState(null)
    const [cpassword, setCPassword] = useState(null)
    const [message, setMessage] = useState('');
    const BASE_URL= 'https://apicastfilegh.votellaverify.com/admin';
    const BASE_URL2= 'https://apicastfilegh.votellaverify.com/organiser';
    // const TEST_URL= 'http://localhost:7001/admin';
    // const TEST_URL2= 'http://localhost:7001/organiser';

    useEffect(()=>{
        axios.get(`${BASE_URL}/resetpermission/${email}`)
            .then((response)=>{
                let OrganiserData = response.data.response 
                setResetState(OrganiserData.reset)
                console.log(OrganiserData)
                setMessage('Permission Open')
                    setTimeout(()=>{
                        setMessage('')
                    },4000)
            })
    },[email])
    

    const passwordResetBtn = ()=>{
        if(password === cpassword){
            let body = {
                password:password,
                email:email
            }
            console.log('body :>> ', body);
            axios.post(`${BASE_URL2}/update_password`, body)
            .then((response)=>{
                let myMessage = response.data.message
                console.log(response.data)
                setMessage(myMessage)
                    setTimeout(()=>{
                        setMessage('')
                    },1000)
            }).catch((error)=>{
                console.log('error :>> ', error);
                setMessage('Failed to update password')
                    setTimeout(()=>{
                        setMessage('')
                    },1000)
            })
        }
        else if(password.length < 6){

            console.log('password is less than 6', password)
        }else{
            console.log('password not same', password,cpassword)
        }
    }
    if(resetState==='CLOSED'){
        return(
            <>
                <div className="border border-red-100 my-6 py-4 lg:w-1/4 mx-auto w-11/12 text-gray-700 shadow-lg rounded-3xl">
                    <div>
                        <img className='h-16 m-auto' src={process.env.PUBLIC_URL+"/logo.png"} alt="" />
                    </div>
                    {/* <p className="text-3xl font-bold text-center ">Reset <span className='text-red-600'>Password</span></p> */}
                    <p className="text-xl font-bold text-center my-3 mx-2">Password Reset Permission is  <span className='text-red-600'>Closed</span></p>
                    <p className="text-center text-base border-t-4 border-b-4 border-gray-500 mx-3 p-1">Contact Us for help</p>
                    <p className="text-center text-base">castvote@gmail.com</p>
                    <p className="text-center text-base">+233270000742</p>
                    <div className='text-center mx-2 mt-4 space-x-3'>
                        <Link className='text-red-600 hover:underline duration-300 transition'  to={`${process.env.PUBLIC_URL}/login`}>Login</Link>
                        <Link className='text-red-600 hover:underline border-l-2 border-gray-700 px-2' to={`${process.env.PUBLIC_URL}/register`}>Register</Link>
                    </div>
                    
                </div>
            </>
        )
    }else{
        return(
            <>
            {message!==''? <p className="p-3 bg-green-100 text-center  lg:w-2/4 mx-auto w-11/12 text-gray-700 shadow mt-2 rounded">{message}</p> : null}
           
                <div className="border border-red-100 my-6 py-4 lg:w-1/4 mx-auto w-11/12 text-gray-700 shadow-lg rounded-3xl">
                    <div>
                        <img className='h-16 m-auto' src={process.env.PUBLIC_URL+"/logo.png"} alt="" />
                    </div>
                    <p className="text-3xl font-bold text-center ">Reset <span className='text-red-600'>Password</span></p>
                    <p className="text-xl underline font-bold text-center ">Organiser</p>
                    <div className='text-center mx-2 space-x-3'>
                        <Link className='text-red-600 hover:underline duration-300 transition'  to={`${process.env.PUBLIC_URL}/login`}>Login</Link>
                        <Link className='text-red-600 hover:underline border-l-2 border-gray-700 px-2' to={`${process.env.PUBLIC_URL}/register`}>Register</Link>
                    </div>
                    <div className='px-4 my-4 space-y-3'>
                        <p className='text-left text-base'><span className="text-blue-500">Confirm Email</span>: {email}</p>

                        <TextInput 
                        title={'New Password'}
                        label={'Enter password'}
                        inputname={'password'} 
                        inputtype={'password'}
                        onValueChange={(e)=>{
                            setPassword(e.target.value)
                        }}/>
                        <TextInput 
                        title={'Confirm Password'} 
                        label={'Enter password'} 
                        inputname={'cpassword'} 
                        inputtype={'password'}
                        onValueChange={(e)=>{
                            setCPassword(e.target.value)
                        }}/>
                        
                        <div className='text-center'>
                            <button onClick={passwordResetBtn} className='bg-gray-700 text-white rounded px-4 py-1 font-bold m-auto'>Reset Password</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ResetPassword