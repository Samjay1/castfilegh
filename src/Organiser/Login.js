import '../logo.png';
import { Link ,useNavigate } from 'react-router-dom';
import TextInput from '../DashboardComponents/TextInput';
import { useState } from 'react';
import axios from 'axios'

const Login = ()=>{
    const BASE_URL= 'https://apicastfilegh.votellaverify.com/organiser';
    // const BASE_URL= 'http://localhost:7001/organiser';

    // window.sessionStorage.clear();
    const navigator = useNavigate();

    const [message, setMessage] = useState('');
    const [email,setEmail] = useState('')
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorEmailMessage, setErrorEmailMessage] = useState('')
    const [password, setPassword] = useState('')
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorPasswordMessage, setErrorPasswordMessage] = useState('')

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
            default:
                break;
        }
    }

    const OnSubmit = ()=>{
        window.sessionStorage.clear();
        console.log('email,password :>> ', email,password);
        setErrorEmail(email.length === 0? true:false)
        setErrorEmailMessage(email.length === 0 && 'This is a required question')
        setErrorPassword(password.length === 0? true:false)
        setErrorPasswordMessage(password.length === 0 && 'This is a required question')
        
        console.log(errorEmail ,errorPassword)
        
        if( email.length !== 0 && password.length !== 0 ){
            console.log('post now :>> ');
            let body = {
                email,password
            }
            axios.post(`${BASE_URL}/login`, body)
            .then((response)=>{
                console.log('response :>> ', response);
                if(response.data.status){
                    setMessage('Login Successfully')
                    let org_id = response.data.user.id
                    
                    console.log('login org_id :>> ', org_id);
                    window.sessionStorage.setItem('org_id', org_id)
                    setTimeout(()=>{
                        setMessage('')
                        navigator(`${process.env.PUBLIC_URL}/dashboard`)
                    },1000)
                }
            }).catch((error)=>{
                setMessage('Login Failed. Activate Account')
                setTimeout(()=>{
                    setMessage('')
                    navigator(`${process.env.PUBLIC_URL}/login`)
                },2000)
                console.log('error :>> ', error);
            })
        }
    }

    return(
        <>
            {message!==''? <p className="p-3 bg-green-100 text-center  lg:w-2/4 mx-auto w-11/12 text-gray-700 shadow mt-2 rounded">{message}</p> : null}
            <div className="border border-red-100 my-6 py-4 lg:w-1/4 mx-auto w-11/12 text-gray-700 shadow-lg rounded-3xl">
                <div>
                    <img className='h-16 m-auto' src={process.env.PUBLIC_URL+"/logo.png"} alt="" />
                </div>
                <p className="text-3xl font-bold text-center ">Sign <span className='text-red-600'>In</span></p>
                <p className="text-xl underline font-bold text-center ">Organiser</p>
                <p className='text-center mx-2'>Create a new account? <Link className='text-red-600 hover:underline' to={`${process.env.PUBLIC_URL}/register`}>Sign Up</Link></p>

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
                    <p className='text-right mx-2'><Link className='text-red-600 hover:underline'  to={`${process.env.PUBLIC_URL}/forgotpassword`}>Forgot Password?</Link></p>

                    <div className='text-center'>
                        <button onClick={OnSubmit} className='bg-gray-700 text-white rounded px-4 py-1 font-bold m-auto'>Sign in</button>
                    </div>

                    <div>
                        <p> <span className='text-red-500'>NB:</span> Contact Us to <span className='font-bold text-xl'>Activate</span> your account</p>
                        <p className="ml-8 text-base">castvote@gmail.com</p>
                        <p className="ml-7 text-base">+233270000742</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login