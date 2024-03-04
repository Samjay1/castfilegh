import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"
import TextInput from "../DashboardComponents/TextInput"


const Register = ()=>{
    const BASE_URL= 'https://apicastfilegh.votellaverify.com/admin';
    // const TEST_URL= 'http://localhost:7001/admin';
    // const navigator = useNavigate()

    const [message, setMessage] = useState('');
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorEmailMessage, setErrorEmailMessage] = useState('')
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorPasswordMessage, setErrorPasswordMessage] = useState('')
    const [errorCPassword, setErrorCPassword] = useState(false)
    const [errorCPasswordMessage, setErrorCPasswordMessage] = useState('')

    const OnSubmit = ()=>{
        console.log('email,password,cpassword :>> ', email,password,cpassword);
        setErrorEmail(email.length === 0? true:false)
        setErrorEmailMessage(email.length === 0 && 'This is a required question')
        setErrorPassword(password.length === 0? true:false)
        setErrorPasswordMessage(password.length === 0 && 'This is a required question')
        setErrorCPassword(cpassword.length === 0? true:false)
        setErrorCPasswordMessage(cpassword.length === 0 && 'This is a required question')
        
        console.log(errorEmail ,errorPassword ,errorCPassword)
        if(password.length < 6){
            setErrorPassword(true)
            setErrorPasswordMessage('Passwords must be 6 or more characters')
            return
        }
        if(password !== cpassword){
            setErrorCPassword(true)
            setErrorCPasswordMessage('Passwords must be the same')
            return
        }
        else if( email.length !== 0 && password.length !== 0 && cpassword.length !== 0 ){
            console.log('post now :>> ');
            let body = {
                email,password
            }
            axios.post(`${BASE_URL}/register`, body)
            .then((response)=>{
                console.log('response :>> ', response);
                if(response.data.status){
                    setMessage('Account created Successfully (Proceed to Login)')
                    // setTimeout(()=>{
                    //     setMessage('')
                    //     navigator(`${process.env.PUBLIC_URL}/login`)
                    // },50000)
                }
            }).catch((error)=>{
                setMessage(`${error.response.data.message} Try login`)
                console.log('error :>> ', error);
            }) 
        }
    }

    const onValueChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        console.log('name, value :>> ', name, value);
        switch(name){
            case 'email':
                setEmail(value)
                setErrorEmail(false)
                break;
            case 'password':
                setPassword(value)
                setErrorPassword(false)
                break;
            case 'cpassword':
                setCPassword(value)
                setErrorCPassword(false)
                break;
            default:
                break;
        }
    }
    return(
        <>
             {message!==''? <p className="p-3 bg-green-100 text-center  lg:w-2/4 mx-auto w-11/12 text-gray-700 shadow mt-2 rounded">{message}</p> : null}
           <div className="border border-red-100 my-6 py-4 lg:w-1/4 mx-auto w-11/12 text-gray-700 shadow-lg rounded-3xl">
                <div>
                    <img className='h-16 m-auto' src={process.env.PUBLIC_URL+"/logo.png"} alt="" />
                </div>
                <p className="text-3xl font-bold text-center ">Sign <span className='text-red-600'>Up</span></p>
                <p className="text-xl underline font-bold text-center ">Admin</p>
                <p className='text-center mx-2'>Already have an account? <Link className='text-red-600 hover:underline'  to={`${process.env.PUBLIC_URL}/admin/login`}>Sign In</Link></p>

                <div className='px-4 my-4 space-y-3'>
                    <TextInput 
                    title={'Email'} 
                    label={'Enter email address'} 
                    inputname={'email'} 
                    inputtype={'email'} 
                    errorState={errorEmail}
                    errorMessage={errorEmailMessage}
                    onValueChange={onValueChange}/>

                   
                    <TextInput 
                    title={'Password'} 
                    label={'Enter password'} 
                    inputname={'password'} 
                    inputtype={'password'}
                    errorState={errorPassword}
                    errorMessage={errorPasswordMessage}
                    onValueChange={onValueChange}/>

                    <TextInput 
                    title={'Confirm Password'} 
                    label={'Enter password'} 
                    inputname={'cpassword'} 
                    inputtype={'password'}
                    errorState={errorCPassword}
                    errorMessage={errorCPasswordMessage}
                    onValueChange={onValueChange}/>

                    <div className='text-center'>
                        <button onClick={OnSubmit} className='bg-gray-700 text-white rounded px-4 py-1 font-bold m-auto'>Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register